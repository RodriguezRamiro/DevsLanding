/* //devslanding/src/styles/ExperimentsShowcase.jsx */

import { useState } from "react";
import experiments from "../data/collaborations";
import "../styles/ExperimentsShowcase.css";

const ExperimentsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiments[activeIndex];

  return (
    <section id="experiments" className="showcase-root">
      <header className="showcase-header">
        <h2 className="showcase-title">Designs</h2>
        <p className="carousel-subtitle">Creative UI & Mini-Projects</p>
      </header>

      <div className="showcase-layout">
        {/* LEFT LIST */}
        <ul className="showcase-list">
          {experiments.map((exp, i) => (
            <li
              key={i}
              className={i === activeIndex ? "active" : ""}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {exp.title}
            </li>
          ))}
        </ul>

        {/* RIGHT PREVIEW */}
        <div key={active.title} className="showcase-preview">
          <h3>{active.title}</h3>
          <p>{active.description}</p>

          <div className="preview-tags">
            {active.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>

          {active.link && (
            <a
              href={active.link}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-link"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperimentsShowcase;
