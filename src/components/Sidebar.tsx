import { BookOpen, Layers, Link2, Columns, Hash, TreePine, GitBranch, ArrowUpDown, Search, Brain, Home, Repeat, Cpu } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  {
    category: 'Foundations',
    items: [
      { id: 'introduction', label: 'Introduction', icon: Home },
      { id: 'memory', label: 'Memory & References', icon: Cpu },
      { id: 'complexity', label: 'Complexity Analysis', icon: Brain },
      { id: 'recursion', label: 'Recursion', icon: Repeat },
    ],
  },
  {
    category: 'Data Structures',
    items: [
      { id: 'arrays', label: 'Arrays & Strings', icon: Layers },
      { id: 'linked-lists', label: 'Linked Lists', icon: Link2 },
      { id: 'stacks-queues', label: 'Stacks & Queues', icon: Columns },
      { id: 'hash-tables', label: 'Hash Tables', icon: Hash },
      { id: 'trees', label: 'Trees & BSTs', icon: TreePine },
      { id: 'graphs', label: 'Graphs', icon: GitBranch },
    ],
  },
  {
    category: 'Algorithms',
    items: [
      { id: 'sorting', label: 'Sorting', icon: ArrowUpDown },
      { id: 'searching', label: 'Searching', icon: Search },
      { id: 'dynamic-programming', label: 'Dynamic Programming', icon: Brain },
    ],
  },
];

export default function Sidebar({ currentPage, onNavigate, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed top-0 left-0 h-screen h-[100dvh] w-[280px] sm:w-72 z-50
                    transform transition-transform duration-300 ease-in-out flex flex-col
                    lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:z-10
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          backgroundColor: 'var(--color-surface-dark)',
          borderRightColor: 'var(--color-border)',
        }}
      >
        <div
          className="flex-shrink-0 px-6 py-5 border-b"
          style={{
            backgroundColor: 'var(--color-surface-dark)',
            borderBottomColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>DSA Docs</h1>
              <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Code First Approach</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6">
          {navItems.map((section) => (
            <div key={section.category} className="mb-6">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider px-3 mb-2" style={{ color: 'var(--color-text-dim)' }}>
                {section.category}
              </h3>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => { onNavigate(item.id); onClose(); }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                   ${isActive ? 'border' : ''}`}
                        style={isActive ? {
                          backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
                          color: 'var(--color-primary)',
                          borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                        } : {
                          color: 'var(--color-text-muted)',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color = 'var(--color-text)';
                            e.currentTarget.style.backgroundColor = 'var(--color-surface-light)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color = 'var(--color-text-muted)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div
          className="flex-shrink-0 px-6 py-4 border-t"
          style={{ borderTopColor: 'var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-dim)' }}>Built with React + TypeScript</p>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-dim)' }}>Code First • Explain After</p>
        </div>
      </aside>
    </>
  );
}
