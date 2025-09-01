//frontend/src/components/Sections.tsx

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionId } from "./Navbar";

type SectionProps = {
  section: { id: string; heading: string; paragraph: string };
  setActiveSection: React.Dispatch<React.SetStateAction<SectionId>>;
  timeOfLastClick: number;
};

const Section: React.FC<SectionProps> = ({ section, setActiveSection, timeOfLastClick }) => {
  const { id, heading, paragraph } = section;
  const { inView, ref, entry } = useInView({ threshold: 0.7 });

  useEffect(() => {
    // If in view and sufficient time has passed since the last click
    if (inView && Date.now() - timeOfLastClick > 1000) {
      // Update active section
      setActiveSection(entry?.target?.id as SectionId);
    }
  }, [inView, entry, setActiveSection, timeOfLastClick]);

  return (
    <section
      id={id}
      ref={ref}
      className="h-[90vh] flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-7xl font-bold mb-6">{heading}</h1>
      <p className="text-lg font-medium max-w-md">{paragraph}</p>
    </section>
  );
};

export default Section;
