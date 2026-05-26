/* //devslanding/src/components/InteractiveDesings.jsx */

import { useState } from "react";
import experiments from "../data/collaborations";
import "../styles/InteractiveDesigns.css";

const ExperimentsShowcase = () => {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const active =
    experiments[activeIndex];

  return (

    <section
      id="interactive-showcase"
      className="showcase-root"
    >

      {/* Section Header */}
      <header className="showcase-header">

        <h2 className="showcase-title">
          Interactive Showcase
        </h2>

        <p className="showcase-subtitle">
          Concept interfaces,
          motion experiments,
          immersive interactions,
          and creative frontend systems.
        </p>

      </header>

      {/* Main Layout */}
      <div className="showcase-layout">

        {/* LEFT NAVIGATION */}
        <aside className="showcase-sidebar">

          <div className="showcase-sidebar-label">
            Creative Index
          </div>

          <ul className="showcase-list">

            {experiments.map((exp, i) => (

              <li
                key={i}

                className={
                  i === activeIndex
                    ? "active"
                    : ""
                }

                onMouseEnter={() =>
                  setActiveIndex(i)
                }
              >

                <span className="showcase-number">
                  0{i + 1}
                </span>

                <span className="showcase-name">
                  {exp.title}
                </span>

              </li>

            ))}

          </ul>

        </aside>

        {/* RIGHT PREVIEW */}
        <div
          key={active.title}
          className="showcase-preview"
        >

          <div className="showcase-preview-inner">

            <div className="preview-top">

              <div className="preview-label">
                Featured Exploration
              </div>

              <h3>
                {active.title}
              </h3>

            </div>

            <p className="preview-description">
              {active.description}
            </p>

            <div className="preview-tags">

              {active.tags.map((tag, i) => (

                <span key={i}>
                  {tag}
                </span>

              ))}

            </div>

            {active.link && (

              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="preview-link"
              >
                Launch Experience
              </a>

            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ExperimentsShowcase;