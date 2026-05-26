/* devslanding/src/components/LanguageStats.jsx */

import { useEffect, useState, useRef } from "react";
import "../styles/LanguageStats.css";

/**
 * LanguageStats Component
 * -----------------------
 *
 *
 * Live engineering telemetry panel.
 * Fetches GitHub repository statistics (via backend proxy) and
 * displays language usage percentages in a clean UI.
 *
 * Uses REACT_APP_BACKEND_URL from .env.local to dynamically
 * switch between local dev server and deployed API.
 *
 * Designed to reinforce:
 * Technical depth
 * Active development
 * Infrastructure capability
 * Modern studio presentation
 */

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const LanguageStats = () => {

  const [languageData, setLanguageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animatedData, setAnimatedData] = useState({});

  const sectionRef = useRef(null);

  // Backend base URL (set in .env.local or production)
  // const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL;

  console.log(
    "Using backend URL:",
    BACKEND_URL
  );

  /*  Fetch GitHub Language Data */

  useEffect(() => {

    const fetchLanguages = async () => {

      try {

        const query = `
          {
            viewer {
              repositories(
                first: 50,
                ownerAffiliations: OWNER
              ) {
                nodes {
                  name
                  languages(
                    first: 5,
                    orderBy: {
                      field: SIZE,
                      direction: DESC
                    }
                  ) {
                    edges {
                      size
                      node {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch(
          `${BACKEND_URL}/api/github`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              query,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(
            `Network error: ${response.status}`
          );
        }

        const result =
          await response.json();

        {/* Build language frequency map */}

        const langCounts = {};

        result.data.viewer.repositories.nodes.forEach(
          (repo) => {

            repo.languages.edges.forEach(
              ({ node, size }) => {

                if (!langCounts[node.name]) {

                  langCounts[node.name] = {
                    size: 0,
                    color:
                      node.color || "#ccc",
                  };
                }

                langCounts[node.name].size += size;
              }
            );
          }
        );

        setLanguageData(langCounts);

      } catch (err) {

        console.error(
          "Error fetching GitHub language stats:",
          err
        );

        setError(err.message);

      } finally {

        setLoading(false);
      }
    };

    fetchLanguages();

  }, [BACKEND_URL]);

  {/* Animate values once in view */}

  useEffect(() => {

    if (!Object.keys(languageData).length) {
      return;
    }

    const observer =
      new IntersectionObserver(

        (entries) => {

          if (entries[0].isIntersecting) {

            const totalSize =
              Object.values(languageData)
                .reduce(
                  (acc, lang) =>
                    acc + lang.size,
                  0
                );

            const final = {};

            Object.entries(languageData)
              .forEach(
                ([name, { size }]) => {

                  final[name] = (
                    (size / totalSize) * 100
                  ).toFixed(1);
                }
              );

            const duration = 1500;

            const startTime =
              performance.now();

            const animate = (now) => {

              const elapsed =
                now - startTime;

              const progress =
                Math.min(
                  elapsed / duration,
                  1
                );

              const eased =
                easeOutCubic(progress);

              const current = {};

              Object.entries(final)
                .forEach(
                  ([name, percent]) => {

                    current[name] = (
                      percent * eased
                    ).toFixed(1);
                  }
                );

              setAnimatedData(current);

              if (progress < 1) {
                requestAnimationFrame(
                  animate
                );
              }
            };

            // Reset First
            const reset = {};

            Object.keys(languageData)
              .forEach((name) => {
                reset[name] = 0;
              });

            setAnimatedData(reset);

            requestAnimationFrame(
              animate
            );

          } else {

            const reset = {};

            Object.keys(languageData)
              .forEach((name) => {
                reset[name] = 0;
              });

            setAnimatedData(reset);
          }
        },

        {
          threshold: 0.3,
        }
      );

    if (sectionRef.current) {

      observer.observe(
        sectionRef.current
      );
    }

    return () => observer.disconnect();

  }, [languageData]);

  {/* States */}
  if (loading) {

    return (

      <section className="language-stats glass-card">

        <div className="stats-loading">
          Loading engineering telemetry...
        </div>

      </section>
    );
  }

  if (error) {

    return (

      <section className="language-stats glass-card">

        <div className="stats-error">
          Error: {error}
        </div>

      </section>
    );
  }

  {/* Render */}

  return (

    <section
      ref={sectionRef}
      className="language-stats glass-card"
    >

      {/* Top Row */}
      <div className="stats-top-row">

        <div className="stats-pill">
          Live GitHub Telemetry
        </div>

        <div className="stats-status">
          Active Development
        </div>

      </div>


      {/* Heading */}
      <h2 className="stats-title">
        Core Engineering Stack
      </h2>

      <p className="stats-subtitle">
        Real-time repository analysis
        reflecting active development,
        production tooling,
        and fullstack architecture
        workflows.
      </p>


      {/* Language Bars */}
      <div className="language-progress">

        <div className="language-container">

          {Object.entries(languageData)
            .map(
              ([name, { color }], index) => (

                <div
                  key={name}
                  className="language-row-wrapper"
                >

                  {/* Top Row */}
                  <div className="language-row">

                    <span>
                      {name}
                    </span>

                    <span>
                      {animatedData[name] ?? 0}%
                    </span>

                  </div>


                  {/* Track */}
                  <div className="language-track">

                    {/* Animated Fill */}
                    <div
                      className="language-bar"
                      style={{
                        backgroundColor: color,

                        width:
                          `${animatedData[name] ?? 0}%`,

                        transition:
                          `width 1.5s ease-out ${index * 0.1}s`,
                      }}
                    />

                  </div>

                </div>
              )
            )}

        </div>

      </div>

    </section>
  );
};

export default LanguageStats;
