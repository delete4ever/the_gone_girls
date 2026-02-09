// app/components/Sidebar.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

// Only one project now
const projects = [
  { name: 'The Gone Girls', slug: 'gone-girls' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="p-6 h-full flex flex-col">
      <h1 className="text-xl font-bold tracking-tight mb-8">Research Portfolio</h1>
      <nav className="space-y-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className={clsx(
              "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname.includes(p.slug)
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            {p.name}
          </Link>
        ))}
      </nav>
      
      <div className="mt-auto pt-8 text-xs text-slate-400">
        © 2026 Ludi Yang<br />
        University of Bologna
      </div>
    </div>
  );
}