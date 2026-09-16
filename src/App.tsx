import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './context/ThemeContext';
import Introduction from './pages/Introduction';
import Memory from './pages/Memory';
import Complexity from './pages/Complexity';
import Recursion from './pages/Recursion';
import Arrays from './pages/Arrays';
import LinkedLists from './pages/LinkedLists';
import StacksQueues from './pages/StacksQueues';
import HashTables from './pages/HashTables';
import Trees from './pages/Trees';
import Graphs from './pages/Graphs';
import Sorting from './pages/Sorting';
import Searching from './pages/Searching';
import DynamicProgramming from './pages/DynamicProgramming';
import { Menu, ArrowLeft, ArrowRight } from 'lucide-react';

const pages: Record<string, { component: React.ComponentType; label: string }> = {
  'introduction': { component: Introduction, label: 'Introduction' },
  'memory': { component: Memory, label: 'Memory & References' },
  'complexity': { component: Complexity, label: 'Complexity Analysis' },
  'recursion': { component: Recursion, label: 'Recursion' },
  'arrays': { component: Arrays, label: 'Arrays & Strings' },
  'linked-lists': { component: LinkedLists, label: 'Linked Lists' },
  'stacks-queues': { component: StacksQueues, label: 'Stacks & Queues' },
  'hash-tables': { component: HashTables, label: 'Hash Tables' },
  'trees': { component: Trees, label: 'Trees & BSTs' },
  'graphs': { component: Graphs, label: 'Graphs' },
  'sorting': { component: Sorting, label: 'Sorting' },
  'searching': { component: Searching, label: 'Searching' },
  'dynamic-programming': { component: DynamicProgramming, label: 'Dynamic Programming' },
};

const pageOrder = Object.keys(pages);

export default function App() {
  const [currentPage, setCurrentPage] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentIndex = pageOrder.indexOf(currentPage);
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;

  const PageComponent = pages[currentPage].component;

  return (
    <ThemeProvider>
      <div className="flex min-h-screen min-h-[100dvh] overflow-x-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
        <Sidebar
          currentPage={currentPage}
          onNavigate={navigate}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 min-w-0 flex flex-col overflow-y-auto">
          <header className="sticky top-0 z-30 backdrop-blur-md border-b" style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 90%, transparent)', borderBottomColor: 'var(--color-border)' }}>
            <div className="flex items-center justify-between px-4 md:px-8 py-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-text)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <nav className="flex items-center gap-2 text-sm">
                  <span style={{ color: 'var(--color-text-dim)' }}>DSA Docs</span>
                  <span style={{ color: 'var(--color-border)' }}>/</span>
                  <span className="font-medium" style={{ color: 'var(--color-text)' }}>{pages[currentPage].label}</span>
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <ThemeSwitcher />
                <div className="hidden sm:flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-dim)' }}>
                  <span>{currentIndex + 1}</span>
                  <span>/</span>
                  <span>{pageOrder.length}</span>
                </div>
              </div>
            </div>
          </header>
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 max-w-4xl mx-auto w-full">
            <PageComponent />
            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                {prevPage ? (
                  <button
                    onClick={() => navigate(prevPage)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-200 group min-h-[52px]"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-surface-light) 50%, transparent)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-muted)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-text)';
                      e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--color-primary) 30%, transparent)';
                      e.currentTarget.style.backgroundColor = 'var(--color-surface-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-muted)';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-surface-light) 50%, transparent)';
                    }}
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform flex-shrink-0" />
                    <div className="text-left min-w-0">
                      <div className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-text-dim)' }}>Previous</div>
                      <div className="text-sm font-medium truncate">{pages[prevPage].label}</div>
                    </div>
                  </button>
                ) : <div />}
                {nextPage ? (
                  <button
                    onClick={() => navigate(nextPage)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-200 group min-h-[52px] sm:ml-auto"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-surface-light) 50%, transparent)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-muted)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-text)';
                      e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--color-primary) 30%, transparent)';
                      e.currentTarget.style.backgroundColor = 'var(--color-surface-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-muted)';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-surface-light) 50%, transparent)';
                    }}
                  >
                    <div className="text-right min-w-0">
                      <div className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--color-text-dim)' }}>Next</div>
                      <div className="text-sm font-medium truncate">{pages[nextPage].label}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                  </button>
                ) : <div />}
              </div>
            </div>
            <footer className="mt-12 pb-8 text-center">
              <p className="text-xs" style={{ color: 'var(--color-text-dim)' }}>Built with React + TypeScript + Tailwind CSS</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-dim)' }}>Code First • Explain After • One Phase at a Time</p>
            </footer>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
