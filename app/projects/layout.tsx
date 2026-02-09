"use client";
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { clsx } from 'clsx';
import React from 'react';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // 直接设置固定基础路径，不要再使用 params.slug
  const baseUrl = '/projects'; 

  const tabs = [
    { name: 'Introduction', path: `${baseUrl}/introduction` },
    { name: 'Methodology', path: `${baseUrl}/methodology` },
    { name: 'Visual Narrative', path: `${baseUrl}/visual-narrative` },
    { name: 'Summary', path: `${baseUrl}/summary` },
  ];

  return (
    <div className="flex flex-col h-screen bg-stone-50 text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      
      {/* Sticky Nav Bar */}
      <header className="border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm z-50 sticky top-0 flex-none transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* LEFT: Title */}
            <Link href={`${baseUrl}/introduction`} className="font-extrabold text-slate-900 text-lg tracking-tight hover:text-rose-700 transition-colors flex-shrink-0">
              The Gone Girls
            </Link>

            {/* RIGHT: Tabs + GitHub Button */}
            <div className="flex items-center gap-2 md:gap-4">
              <nav className="flex space-x-1">
                {tabs.map((tab) => {
                  const isActive = pathname === tab.path;
                  return (
                    <Link
                      key={tab.name}
                      href={tab.path}
                      className={clsx(
                        "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-rose-50 text-rose-700 shadow-sm ring-1 ring-rose-100"
                          : "text-slate-500 hover:text-slate-900 hover:bg-stone-100"
                      )}
                    >
                      {tab.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="h-6 w-px bg-stone-200 hidden md:block" />

              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* SCROLLABLE AREA: Includes Page Content AND Footer */}
      <div className="flex-1 overflow-y-auto relative scroll-smooth">
        
        {/* Main Page Content */}
        <main className="min-h-full">
          {children}
        </main>

        {/* Footer (Now scrolls with content) */}
        <footer className="border-t border-stone-200 bg-stone-100 py-8 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-500 leading-relaxed">
            <div>
              <strong className="block text-slate-800 mb-2 uppercase tracking-wider font-bold">About the Project</strong>
              <p>This interactive data visualization project was developed as part of the <em>Information Visualization</em> course taught by <strong>Professor Marilena Daquino</strong> at the <strong>University of Bologna</strong>.</p>
            </div>
            <div className="md:text-right">
              <strong className="block text-slate-800 mb-2 uppercase tracking-wider font-bold">Author</strong>
              <p>This work was completed by <strong>Ludi Yang</strong>, a student of the <em>Digital Humanities and Digital Knowledge</em> programme.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}