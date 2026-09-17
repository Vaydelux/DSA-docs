import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, themes, defaultTheme, getThemeById } from '../config/themes';

interface ThemeContextType {
  theme: Theme;
  setTheme: (themeId: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedThemeId = localStorage.getItem('dsa-docs-theme');
    if (savedThemeId) {
      return getThemeById(savedThemeId);
    }
    return defaultTheme;
  });

  const setTheme = (themeId: string) => {
    const newTheme = getThemeById(themeId);
    setThemeState(newTheme);
    localStorage.setItem('dsa-docs-theme', themeId);
    applyThemeToDocument(newTheme);
  };

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

function applyThemeToDocument(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-surface-light', theme.colors.surfaceLight);
  root.style.setProperty('--color-surface-lighter', theme.colors.surfaceLighter);
  root.style.setProperty('--color-surface-dark', theme.colors.surfaceDark);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-text-muted', theme.colors.textMuted);
  root.style.setProperty('--color-text-dim', theme.colors.textDim);
  root.style.setProperty('--color-border', theme.colors.border);
  root.style.setProperty('--color-border-light', theme.colors.borderLight);
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-primary-light', theme.colors.primaryLight);
  root.style.setProperty('--color-primary-dark', theme.colors.primaryDark);
  root.style.setProperty('--color-success', theme.colors.success);
  root.style.setProperty('--color-warning', theme.colors.warning);
  root.style.setProperty('--color-error', theme.colors.error);
  root.style.setProperty('--color-info', theme.colors.info);
  root.style.setProperty('--color-code-background', theme.colors.codeBackground);
  root.style.setProperty('--color-code-border', theme.colors.codeBorder);
  // Foreground tokens
  root.style.setProperty('--color-text-on-primary', theme.colors.textOnPrimary);
  root.style.setProperty('--color-text-on-success', theme.colors.textOnSuccess);
  root.style.setProperty('--color-text-on-warning', theme.colors.textOnWarning);
  root.style.setProperty('--color-text-on-error', theme.colors.textOnError);
  root.style.setProperty('--color-text-on-info', theme.colors.textOnInfo);
  // Set color scheme based on surface brightness
  const isDark = isColorDark(theme.colors.surface);
  root.style.colorScheme = isDark ? 'dark' : 'light';
}

function isColorDark(color: string): boolean {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}
