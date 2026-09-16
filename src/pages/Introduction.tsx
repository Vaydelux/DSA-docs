export default function Introduction() {
  return (
    <div className="doc-content animate-fade-in">
      <div className="mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Interactive Documentation
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Master Data Structures<br />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            & Algorithms
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl">
          Learn DSA the right way — see the code first, understand the "why" after.
          Every concept is taught with <strong className="text-white">complete implementations</strong>,
          <strong className="text-white"> visual diagrams</strong>, and <strong className="text-white">interactive playgrounds</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
        <div className="p-4 sm:p-5 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-3">
            <span className="text-xl">📝</span>
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">Code First</h3>
          <p className="text-xs text-[#94a3b8]">See the complete implementation before any explanation.</p>
        </div>
        <div className="p-4 sm:p-5 rounded-xl bg-[#1e293b]/50 border border-[#334155]">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
            <span className="text-xl">🎨</span>
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">Visual Learning</h3>
          <p className="text-xs text-[#94a3b8]">SVG diagrams show data structures in action.</p>
        </div>
        <div className="p-4 sm:p-5 rounded-xl bg-[#1e293b]/50 border border-[#334155] sm:col-span-2 md:col-span-1">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
            <span className="text-xl">🎮</span>
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">Interactive</h3>
          <p className="text-xs text-[#94a3b8]">Play with live playgrounds. Learn by doing.</p>
        </div>
      </div>

      <h2>Learning Path</h2>
      <p>
        This curriculum is structured to build your understanding progressively. Start with foundations,
        then move through data structures and algorithms in order of increasing complexity.
      </p>

      <h3>00. Foundations</h3>
      <ul>
        <li><strong className="text-white">Memory & References</strong> — How data is stored, values vs references</li>
        <li><strong className="text-white">Complexity Analysis</strong> — Big-O notation, time/space complexity</li>
        <li><strong className="text-white">Recursion</strong> — Base case, recursive case, call stack</li>
      </ul>

      <h3>01-06. Core Data Structures</h3>
      <ul>
        <li><strong className="text-white">Arrays & Strings</strong> — Contiguous memory, two pointers, sliding window</li>
        <li><strong className="text-white">Linked Lists</strong> — Dynamic memory, fast/slow pointers</li>
        <li><strong className="text-white">Stacks & Queues</strong> — LIFO/FIFO patterns</li>
        <li><strong className="text-white">Hash Tables</strong> — O(1) lookups, collision resolution</li>
        <li><strong className="text-white">Trees & BSTs</strong> — Hierarchical data, traversals</li>
        <li><strong className="text-white">Graphs</strong> — BFS, DFS, representations</li>
      </ul>

      <h3>07-09. Core Algorithms</h3>
      <ul>
        <li><strong className="text-white">Sorting</strong> — Bubble, merge, quick sort</li>
        <li><strong className="text-white">Searching</strong> — Binary search and variants</li>
        <li><strong className="text-white">Dynamic Programming</strong> — Memoization, tabulation</li>
      </ul>

      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
        <p className="text-sm text-indigo-300 font-medium mb-2">🎯 Start Learning</p>
        <p className="text-sm text-[#94a3b8]">
          Navigate through the sidebar to explore each topic. Each page follows a consistent structure:
          overview, mental model, implementation, walkthrough, complexity analysis, and practice problems.
        </p>
      </div>
    </div>
  );
}
