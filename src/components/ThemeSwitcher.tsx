import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { themes, themesByCategory } from '../config/themes';
import { Palette, X, Check } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors"
        style={{
          backgroundColor: theme.colors.surfaceLight,
          borderColor: theme.colors.border,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = theme.colors.primary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = theme.colors.border;
        }}
        aria-label="Change theme"
      >
        <Palette className="w-4 h-4" style={{ color: theme.colors.primary }} />
        <span className="text-sm font-medium hidden sm:inline" style={{ color: theme.colors.text }}>
          {theme.name}
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] mx-4 rounded-2xl border overflow-hidden flex flex-col shadow-2xl"
            style={{
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0"
              style={{ borderColor: theme.colors.border }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${theme.colors.primary}20` }}
                >
                  <Palette className="w-5 h-5" style={{ color: theme.colors.primary }} />
                </div>
                <div>
                  <h2 className="text-lg font-bold leading-tight" style={{ color: theme.colors.text }}>
                    Choose Your Theme
                  </h2>
                  <p className="text-xs" style={{ color: theme.colors.textMuted }}>
                    {themes.length} themes available
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ color: theme.colors.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.surfaceLight;
                  e.currentTarget.style.color = theme.colors.text;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = theme.colors.textMuted;
                }}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <div className="space-y-6">
                {Object.entries(themesByCategory).map(([category, categoryThemes]) => (
                  <section key={category}>
                    <div className="flex items-center gap-2 mb-3">
                      <h3
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: theme.colors.textDim }}
                      >
                        {category}
                      </h3>
                      <div
                        className="flex-1 h-px"
                        style={{ backgroundColor: theme.colors.border }}
                      />
                      <span
                        className="text-[10px] font-medium"
                        style={{ color: theme.colors.textDim }}
                      >
                        {categoryThemes.length}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {categoryThemes.map((t) => {
                        const isSelected = t.id === theme.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => {
                              setTheme(t.id);
                              setIsOpen(false);
                            }}
                            className="group relative rounded-xl border-2 p-3 text-left transition-all duration-200 flex flex-col min-h-[110px]"
                            style={{
                              backgroundColor: t.colors.surface,
                              borderColor: isSelected ? t.colors.primary : t.colors.border,
                              boxShadow: isSelected
                                ? `0 0 0 2px ${t.colors.surface}, 0 0 0 4px ${t.colors.primary}`
                                : 'none',
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = t.colors.primaryLight;
                                e.currentTarget.style.transform = 'translateY(-1px)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected) {
                                e.currentTarget.style.borderColor = t.colors.border;
                                e.currentTarget.style.transform = 'translateY(0)';
                              }
                            }}
                          >
                            {isSelected && (
                              <div
                                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: t.colors.primary }}
                              >
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              </div>
                            )}

                            <div className="flex items-center gap-2.5 mb-3">
                              <div
                                className="w-7 h-7 rounded-lg border flex-shrink-0"
                                style={{
                                  backgroundColor: t.colors.primary,
                                  borderColor: t.colors.border,
                                }}
                              />
                              <div className="flex-1 min-w-0">
                                <div
                                  className="font-semibold text-xs leading-tight truncate"
                                  style={{ color: t.colors.text }}
                                >
                                  {t.name}
                                </div>
                              </div>
                            </div>

                            <div className="flex-1" />

                            <div className="flex items-center gap-1.5">
                              {[
                                { color: t.colors.surface, label: 'Surface', ring: true },
                                { color: t.colors.surfaceLight, label: 'Light' },
                                { color: t.colors.primary, label: 'Primary' },
                                { color: t.colors.text, label: 'Text' },
                                { color: t.colors.success, label: 'Success' },
                                { color: t.colors.error, label: 'Error' },
                              ].map((swatch, i) => (
                                <div
                                  key={i}
                                  className="w-4 h-4 rounded-full flex-shrink-0"
                                  style={{
                                    backgroundColor: swatch.color,
                                    border: swatch.ring
                                      ? `1.5px solid ${t.colors.border}`
                                      : '1.5px solid transparent',
                                    boxShadow: `0 0 0 1px ${t.colors.border}40`,
                                  }}
                                  title={swatch.label}
                                />
                              ))}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <div
              className="px-5 py-3 border-t flex-shrink-0 flex items-center justify-between"
              style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surfaceLight + '40' }}
            >
              <p className="text-[11px]" style={{ color: theme.colors.textDim }}>
                Current: <span style={{ color: theme.colors.text }}>{theme.name}</span>
              </p>
              <p className="text-[11px]" style={{ color: theme.colors.textDim }}>
                Selection saved automatically
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
