export default function Introduction() {
  return (
    <div className="doc-content animate-fade-in">
      <div className="mb-8 sm:mb-10">
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
            borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
            color: 'var(--color-primary)',
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-primary)' }} />
          Interactive Documentation
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ color: 'var(--color-text)' }}>
          Master Data Structures<br />
          <span className="bg-clip-text text-transparent" style={{ 
            backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-primary-light))` 
          }}>
            & Algorithms
          </span>
        </h1>
        <p className="text-base sm:text-lg max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
          Learn DSA the right way — see the code first, understand the "why" after.
          Every concept is taught with <strong style={{ color: 'var(--color-text)' }}>complete implementations</strong>,
          <strong style={{ color: 'var(--color-text)' }}> visual diagrams</strong>, and <strong style={{ color: 'var(--color-text)' }}>interactive playgrounds</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
        <div 
          className="p-4 sm:p-5 rounded-xl border"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-surface-light) 50%, transparent)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
            style={{ backgroundColor: 'color-mix(in srgb, var(--color-success) 10%, transparent)' }}
          >
            <span className="text-xl">📝</span>
          </div>
          <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Code First</h3>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>See the complete implementation before any explanation.</p>
        </div>
        <div 
          className="p-4 sm:p-5 rounded-xl border"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-surface-light) 50%, transparent)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
            style={{ backgroundColor: 'color-mix(in srgb, var(--color-info) 10%, transparent)' }}
          >
            <span className="text-xl">🎨</span>
          </div>
          <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Visual Learning</h3>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>SVG diagrams show data structures in action.</p>
        </div>
        <div 
          className="p-4 sm:p-5 rounded-xl border sm:col-span-2 md:col-span-1"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-surface-light) 50%, transparent)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
            style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' }}
          >
            <span className="text-xl">🎮</span>
          </div>
          <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Interactive</h3>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Play with live playgrounds. Learn by doing.</p>
        </div>
      </div>

      <h2>Learning Path</h2>
      <p style={{ color: 'var(--color-text-muted)' }}>
        This curriculum is structured to build your understanding progressively. Start with foundations,
        then move through data structures and algorithms in order of increasing complexity.
      </p>

      <h3>00. Foundations</h3>
      <ul>
        <li><strong style={{ color: 'var(--color-text)' }}>Memory & References</strong> — How data is stored, values vs references</li>
        <li><strong style={{ color: 'var(--color-text)' }}>Complexity Analysis</strong> — Big-O notation, time/space complexity</li>
        <li><strong style={{ color: 'var(--color-text)' }}>Recursion</strong> — Base case, recursive case, call stack</li>
      </ul>

      <h3>01-06. Core Data Structures</h3>
      <ul>
        <li><strong style={{ color: 'var(--color-text)' }}>Arrays & Strings</strong> — Contiguous memory, two pointers, sliding window</li>
        <li><strong style={{ color: 'var(--color-text)' }}>Linked Lists</strong> — Dynamic memory, fast/slow pointers</li>
        <li><strong style={{ color: 'var(--color-text)' }}>Stacks & Queues</strong> — LIFO/FIFO patterns</li>
        <li><strong style={{ color: 'var(--color-text)' }}>Hash Tables</strong> — O(1) lookups, collision resolution</li>
        <li><strong style={{ color: 'var(--color-text)' }}>Trees & BSTs</strong> — Hierarchical data, traversals</li>
        <li><strong style={{ color: 'var(--color-text)' }}>Graphs</strong> — BFS, DFS, representations</li>
      </ul>

      <h3>07-09. Core Algorithms</h3>
      <ul>
        <li><strong style={{ color: 'var(--color-text)' }}>Sorting</strong> — Bubble, merge, quick sort</li>
        <li><strong style={{ color: 'var(--color-text)' }}>Searching</strong> — Binary search and variants</li>
        <li><strong style={{ color: 'var(--color-text)' }}>Dynamic Programming</strong> — Memoization, tabulation</li>
      </ul>

      <div 
        className="mt-8 p-5 rounded-xl border"
        style={{
          background: `linear-gradient(to right, color-mix(in srgb, var(--color-primary) 10%, transparent), color-mix(in srgb, var(--color-primary-light) 10%, transparent))`,
          borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
        }}
      >
        <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-primary-light)' }}>🎯 Start Learning</p>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Navigate through the sidebar to explore each topic. Each page follows a consistent structure:
          overview, mental model, implementation, walkthrough, complexity analysis, and practice problems.
        </p>
      </div>
    </div>
  );
}
