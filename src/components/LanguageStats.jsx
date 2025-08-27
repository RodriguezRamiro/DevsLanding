// src/components/LanguageStats.jsx

import { useEffect, useState, useRef } from "react";
import "../styles/LanguageStats.css";

/**
 * LanguageStats Component
 * -----------------------
 * Fetches GitHub repository statistics (via backend proxy) and
 * displays language usage percentages in a clean UI.
 *
 * Uses REACT_APP_BACKEND_URL from .env.local to dynamically
 * switch between local dev server and deployed API.
 */

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const LanguageStats = () => {
  const [languageData, setLanguageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animatedData, setAnimatedData] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef(null);

  // Backend base URL (set in .env.local or production)
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const query = `
          {
            viewer {
              repositories(first: 50, ownerAffiliations: OWNER) {
                nodes {
                  name
                  languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
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

        const response = await fetch(`${BACKEND_URL}/api/github`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) throw new Error(`Network error: ${response.status}`);

        const result = await response.json();

        // Build language frequency map
        const langCounts = {};
        result.data.viewer.repositories.nodes.forEach((repo) => {
          repo.languages.edges.forEach(({ node, size }) => {
            if (!langCounts[node.name]) {
              langCounts[node.name] = { size: 0, color: node.color || "#ccc" };
            }
            langCounts[node.name].size += size;
          });
        });

        setLanguageData(langCounts);
      } catch (err) {
        console.error("Error fetching GitHub language stats:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, [BACKEND_URL]);

  // Animate values once in view
  useEffect(() => {
    if (!Object.keys(languageData).length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true); // only trigger once
          const totalSize = Object.values(languageData).reduce(
            (acc, lang) => acc + lang.size,
            0
          );

          const final = {};
          Object.entries(languageData).forEach(([name, { size }]) => {
            final[name] = ((size / totalSize) * 100).toFixed(1);
          });

          const duration = 1500; // 1.5s animation
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);

            const current = {};
            Object.entries(final).forEach(([name, percent]) => {
              current[name] = (percent * eased).toFixed(1);
            });

            setAnimatedData(current);

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [languageData, hasAnimated]);

  if (loading) return <p>Loading GitHub language stats...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div ref={sectionRef} className="language-stats">
      <h2 className="text-xl font-bold mb-4">Tech Stack Live</h2>
      <div className="language-progress">
        <div className="language-container">
          {Object.entries(languageData).map(([name, { color }], index) => (
            <div key={name} className="language-row-wrapper">
              <div className="language-row">
                <span>{name}</span>
                <span>{animatedData[name] ?? 0}%</span>
              </div>
              <div
                className="language-bar"
                style={{
                  backgroundColor: color,
                  width: `${animatedData[name] ?? 0}%`,
                  transition: `width 1.5s ease-out ${index * 0.1}s`, // cascade effect
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageStats;
