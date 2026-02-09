// app/components/Sidebar.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const magazineSections = [
  { name: 'Introduction', href: '/projects/introduction' },
  { name: 'Methodology', href: '/projects/methodology' },
  { name: 'Visual Narrative', href: '/projects/visual-narrative' },
  { name: 'Summary', href: '/projects/summary' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="p-6 h-full flex flex-col">
      <h1 className="text-xl font-bold tracking-tight mb-8">The Gone Girls</h1>
      <nav className="space-y-2">
        {magazineSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={clsx(
              "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              // 匹配当前激活的页面
              pathname === section.href
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            {section.name}
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