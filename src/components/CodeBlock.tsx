import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="my-4 sm:my-6 rounded-xl overflow-hidden border shadow-lg"
      style={{
        borderColor: 'var(--color-code-border)',
        backgroundColor: 'var(--color-code-background)',
      }}
    >
      <div
        className="flex items-center justify-between px-3 sm:px-4 py-2 border-b"
        style={{
          backgroundColor: 'var(--color-surface-light)',
          borderBottomColor: 'var(--color-code-border)',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#f87171] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#fbbf24] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#34d399] opacity-80" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
            {title || language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200"
          style={{ color: 'var(--color-text-muted)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-text)';
            e.currentTarget.style.backgroundColor = 'var(--color-surface-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-muted)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre className="code-block p-4 m-0 bg-transparent" style={{ ...style, background: 'transparent' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  <span className="table-cell text-right pr-4 select-none text-xs w-8" style={{ color: 'var(--color-text-dim)' }}>{i + 1}</span>
                  <span className="table-cell">
                    {line.map((token, key) => <span key={key} {...getTokenProps({ token })} />)}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
