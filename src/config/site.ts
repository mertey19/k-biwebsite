const SITE_URL_PLACEHOLDER = "SITE_URL_BURAYA";

export const siteConfig = {
  name: "Kubilay Kendirci",
  title: "Elektrik ve Elektronik Mühendisliği Öğrencisi",
  description:
    "Kubilay Kendirci'nin elektronik devreler, donanım geliştirme ve gömülü sistemler alanlarındaki çalışmalarını ve teknik becerilerini içeren kişisel portfolyo sitesi.",
  email: "kubilaykendirci2oo5149@gmail.com",
  siteUrl: SITE_URL_PLACEHOLDER,
  social: {
    linkedin: "LINKEDIN_URL_BURAYA",
    instagram: "INSTAGRAM_URL_BURAYA",
  },
} as const;

export type SocialPlatform = keyof typeof siteConfig.social;

export function getSiteUrl(): URL {
  try {
    const url = new URL(siteConfig.siteUrl);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url
      : new URL("https://example.com");
  } catch {
    return new URL("https://example.com");
  }
}

export function getSafeSocialUrl(platform: SocialPlatform): string | undefined {
  const value = siteConfig.social[platform].trim();

  if (!value || value.endsWith("_URL_BURAYA")) {
    return undefined;
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}
