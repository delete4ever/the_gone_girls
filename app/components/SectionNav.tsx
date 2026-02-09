// app/components/SectionNav.tsx
"use client";
import { Link as ScrollLink } from 'react-scroll';
import { clsx } from 'clsx';
import { useState } from 'react';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'visual-narrative', label: 'Visual Narrative' },
  { id: 'summary', label: 'Summary' },
  { id: 'methodology', label: 'Methodology' },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 mb-8 py-4">
      <ul className="flex space-x-6 text-sm font-medium overflow-x-auto no-scrollbar">
        {sections.map((section) => (
          <li key={section.id} className="whitespace-nowrap">
            <ScrollLink
              to={section.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => setActiveSection(section.id)}
              className={clsx(
                "cursor-pointer pb-2 border-b-2 transition-colors duration-200",
                activeSection === section.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
              )}
            >
              {section.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}