"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems } from "@/src/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hakkimda");

  useEffect(() => {
    const sectionElements = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      },
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Ana navigasyon">
        <a className="brand" href="#ana-sayfa" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">
            KK
          </span>
          <span className="brand__name">Kubilay Kendirci</span>
        </a>

        <button
          aria-controls="main-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          className="menu-toggle"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div
          className={`nav-panel ${isOpen ? "nav-panel--open" : ""}`}
          id="main-menu"
        >
          <ul className="nav-links">
            {navigationItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    aria-current={isActive ? "location" : undefined}
                    className={
                      isActive ? "nav-link nav-link--active" : "nav-link"
                    }
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a className="nav-cta" href="#iletisim" onClick={closeMenu}>
            Bağlantı kur
          </a>
        </div>
      </nav>
    </header>
  );
}
