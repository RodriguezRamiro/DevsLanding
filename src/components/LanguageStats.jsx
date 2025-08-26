//src/components/languageStats.jsx

import { useEffect, useState } from "react";
import '../styles/LanguageStats.css';

const GITHUB_USERNAME = "rodriguezramiro";


const COLORS = [
  "var(--button-gradient)",
  "var(--card-hover-gradient)",
  "var(--text-highlight-color)",
  "var(--active)",
  "var(--color-gold-accent)"
];

function LanguageStats() {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchLanguages() {
      const query = `
        {
          user(login: "${GITHUB_USERNAME}") {
            repositories(first: 100, isFork: false, privacy: PUBLIC) {
              nodes {
                languages(first: 10) {
                  edges {
                    size
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      `;

      try {
        // Call backend proxy endpoint
        const response = await fetch("/api/github", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ query }),
          });


        const result = await response.json();

        // Safety check in case API fails
        if (!result.data || !result.data.user) {
            console.error("GitHub API returned no data:", result);
            setLoading(false);
            return;
          }

        const repoLanguages = result.data.user.repositories.nodes;

        const langTotals = {};
        repoLanguages.forEach((repo) => {
          repo.languages.edges.forEach((lang) => {
            const name = lang.node.name;
            const size = lang.size;
            langTotals[name] = (langTotals[name] || 0) + size;
          });
        });

        const total = Object.values(langTotals).reduce((a, b) => a + b, 0);

        const langPercentages = Object.entries(langTotals)
          .map(([name, size]) => ({
            name,
            percent: ((size / total) * 100).toFixed(1),
          }))
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 5);

        setLanguages(langPercentages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching languages:", error);
        setLoading(false);
      }
    }

    fetchLanguages();
  }, []);

  if (loading) return <p>Loading language stats...</p>;

  return (
    <section className="language-progress my-12">
      <h2 className="text-xl font-semibold mb-4">Languages & Proficiency</h2>
      <div className="language-container">
        {languages.map((lang, index) => (
          <div key={lang.name} className="language-row-wrapper">
            <div className="language-row">
              <span>{lang.name}</span>
              <span>{lang.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded">
              <div
                className="language-bar"
                style={{
                  width: `${lang.percent}%`,
                  background: COLORS[index % COLORS.length],
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguageStats;
