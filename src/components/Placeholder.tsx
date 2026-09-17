export default function Placeholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="doc-content animate-fade-in">
      <div className="mb-8">
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-3"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
            borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
            color: 'var(--color-primary)',
          }}
        >
          Coming Soon
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text)' }}>{title}</h1>
        <p className="max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>{description}</p>
      </div>

      <div 
        className="p-6 rounded-xl border text-center"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-surface-light) 50%, transparent)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="text-6xl mb-4">🚧</div>
        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Content Coming Soon</h2>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          This section is under construction. Check back soon for comprehensive coverage of {title.toLowerCase()}.
        </p>
      </div>
    </div>
  );
}
