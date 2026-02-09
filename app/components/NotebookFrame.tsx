'use client';

interface NotebookFrameProps {
  src: string;
  title?: string;
}

export default function NotebookFrame({ src, title = "Data Visualization" }: NotebookFrameProps) {
  return (
    <div className="w-full h-full relative bg-white">
      {/* Fallback text in case it doesn't load */}
      <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm -z-10">
        Loading visualization...
      </div>
      
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full border-none block"
        style={{ width: '100%', height: '100%' }} // Inline style backup
        loading="lazy"
        // Expanded permissions for Plotly interaction
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </div>
  );
}