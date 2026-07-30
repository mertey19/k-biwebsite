import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the complete portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Kubilay Kendirci \| Elektrik ve Elektronik Mühendisliği<\/title>/i,
  );
  assert.match(html, /Merhaba, ben/);
  assert.match(html, /Taşınabilir Hoparlör Tasarımı ve Geliştirilmesi/);
  assert.match(html, /kubilaykendirci2oo5149@gmail\.com/);
  assert.match(
    html,
    /https:\/\/www\.linkedin\.com\/in\/kubilay-kendirci-a649531b3\//,
  );
  assert.match(html, /https:\/\/www\.instagram\.com\/kubilaykendirci\//);
  assert.match(html, /İçeriğe geç/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.doesNotMatch(html, /LINKEDIN_URL_BURAYA|INSTAGRAM_URL_BURAYA/);
});

test("renders safe structured person data", async () => {
  const response = await render();
  const html = await response.text();
  const scriptMatch = html.match(
    /<script type="application\/ld\+json">([^<]+)<\/script>/,
  );

  assert.ok(scriptMatch);
  const structuredData = JSON.parse(scriptMatch[1]);
  assert.equal(structuredData["@type"], "Person");
  assert.equal(structuredData.name, "Kubilay Kendirci");
  assert.equal(
    structuredData.jobTitle,
    "Elektrik ve Elektronik Mühendisliği Öğrencisi",
  );
  assert.equal(structuredData.email, "mailto:kubilaykendirci2oo5149@gmail.com");
  assert.deepEqual(structuredData.sameAs, [
    "https://www.linkedin.com/in/kubilay-kendirci-a649531b3/",
    "https://www.instagram.com/kubilaykendirci/",
  ]);
  assert.deepEqual(Object.keys(structuredData).sort(), [
    "@context",
    "@type",
    "email",
    "jobTitle",
    "name",
    "sameAs",
  ]);
});
