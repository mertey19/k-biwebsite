"use client";

import { ArrowDownRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { SocialLinks } from "@/src/components/ui/SocialLinks";
import { siteConfig } from "@/src/config/site";
import { profile } from "@/src/data/portfolio";

const heroTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export function HeroSection() {
  return (
    <section
      className="hero section"
      id="ana-sayfa"
      aria-labelledby="hero-title"
    >
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 14 }}
            transition={heroTransition}
          >
            <span aria-hidden="true" />
            {profile.eyebrow}
          </motion.p>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            id="hero-title"
            initial={{ opacity: 0, y: 24 }}
            transition={{ ...heroTransition, delay: 0.08 }}
          >
            {profile.greeting} <strong>{profile.name}</strong>
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            transition={{ ...heroTransition, delay: 0.16 }}
          >
            {profile.title}
          </motion.p>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero__summary"
            initial={{ opacity: 0, y: 18 }}
            transition={{ ...heroTransition, delay: 0.24 }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            transition={{ ...heroTransition, delay: 0.32 }}
          >
            <a className="button button--primary" href="#proje">
              Projeyi İncele
              <ArrowDownRight aria-hidden="true" size={18} />
            </a>
            <a className="button button--secondary" href="#iletisim">
              İletişime Geç
              <Mail aria-hidden="true" size={17} />
            </a>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            className="hero__socials"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <span>Çevrimiçi</span>
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          transition={{ ...heroTransition, delay: 0.18 }}
          aria-hidden="true"
        >
          <div className="hero-visual__orbit hero-visual__orbit--one" />
          <div className="hero-visual__orbit hero-visual__orbit--two" />
          <div className="signal-card">
            <div className="signal-card__topline">
              <span>SIGNAL / 01</span>
              <span className="signal-status">
                <i />
                ACTIVE
              </span>
            </div>
            <div className="monogram">
              <span>KK</span>
              <small>EE</small>
            </div>
            <div className="oscilloscope">
              <div className="scope-grid" />
              <div className="waveform">
                <i className="wave wave--1" />
                <i className="wave wave--2" />
                <i className="wave wave--3" />
                <i className="wave wave--4" />
                <i className="wave wave--5" />
                <i className="wave wave--6" />
                <i className="wave wave--7" />
                <i className="wave wave--8" />
              </div>
            </div>
            <div className="signal-card__footer">
              <span>DEVRE</span>
              <span>ÖLÇÜM</span>
              <span>TASARIM</span>
            </div>
          </div>
          <div className="circuit-node circuit-node--one" />
          <div className="circuit-node circuit-node--two" />
          <div className="circuit-node circuit-node--three" />
        </motion.div>
      </div>
      <a className="hero__scroll" href="#hakkimda">
        <span>Keşfet</span>
        <ArrowDownRight aria-hidden="true" size={17} />
      </a>
      <span className="sr-only">{siteConfig.name} portfolyo ana sayfası</span>
    </section>
  );
}
