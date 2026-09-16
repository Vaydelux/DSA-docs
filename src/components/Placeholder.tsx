export default function Placeholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="doc-content animate-fade-in">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-3">
          Coming Soon
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{title}</h1>
        <p className="text-[#94a3b8] max-w-2xl">{description}</p>
      </div>

      <div className="p-6 rounded-xl bg-[#1e293b]/50 border border-[#334155] text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h2 className="text-xl font-bold text-white mb-2">Content Coming Soon</h2>
        <p className="text-sm text-[#94a3b8]">
          This section is under construction. Check back soon for comprehensive coverage of {title.toLowerCase()}.
        </p>
      </div>
    </div>
  );
}
