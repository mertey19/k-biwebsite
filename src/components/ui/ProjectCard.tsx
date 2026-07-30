"use client";

import { Check, CircleDot, Radio, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "@/src/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <div className="project-card__visual" aria-hidden="true">
        <div className="project-visual__topline">
          <span>PROJECT / 001</span>
          <span>AUDIO SYSTEM</span>
        </div>
        <div className="speaker-stage">
          <div className="sound-arc sound-arc--one" />
          <div className="sound-arc sound-arc--two" />
          <div className="speaker">
            <div className="speaker__ring speaker__ring--top">
              <i />
            </div>
            <div className="speaker__ring speaker__ring--bottom">
              <i />
            </div>
            <span className="speaker__port" />
          </div>
          <div className="signal-label signal-label--input">INPUT</div>
          <div className="signal-label signal-label--output">OUTPUT</div>
        </div>
        <div className="project-visual__footer">
          <span>01</span>
          <div />
          <span>240Hz — 18kHz</span>
        </div>
      </div>

      <div className="project-card__content">
        <div className="project-card__heading">
          <div>
            <p className="project-kicker">Uygulamalı Elektronik Projesi</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-number">01</span>
        </div>
        <p className="project-description">{project.description}</p>

        <div className="project-details">
          <div>
            <h4>
              <Wrench aria-hidden="true" size={17} />
              Yapılan Çalışmalar
            </h4>
            <ul className="work-list">
              {project.responsibilities.map((responsibility) => (
                <li key={responsibility}>
                  <Check aria-hidden="true" size={15} />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-details__side">
            <div>
              <h4>
                <Radio aria-hidden="true" size={17} />
                Kullanılan Araçlar
              </h4>
              <ul className="tag-list">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>
                <CircleDot aria-hidden="true" size={17} />
                Kazanımlar
              </h4>
              <ul className="outcome-list">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
