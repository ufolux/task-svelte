import { browser } from '$app/environment';

// Define available themes
export const themes = {
  light: {
    name: 'Light',
    colors: {
      primary: '#4F46E5',
      background: '#FFFFFF',
      text: '#333333',
      sidebarBg: '#FFFFFF',
      sidebarBorder: '#E5E7EB',
      hover: '#F3F4F6',
      active: '#DBEAFE',
    },
  },
  dark: {
    name: 'Dark',
    colors: {
      primary: '#6366F1',
      background: '#111827',
      text: '#F9FAFB',
      sidebarBg: '#1F2937',
      sidebarBorder: '#374151',
      hover: '#374151',
      active: '#312E81',
    },
  },
};

/**
 * Function to get the initial theme based on localStorage or system preference
 * @returns {'light' | 'dark'}
 * @private
 */
function getInitialTheme() {
  if (!browser) return 'light';

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme !== 'light' && savedTheme !== 'dark') {
    localStorage.removeItem('theme');
    return 'light';
  }
  if (savedTheme && themes[savedTheme]) return savedTheme;

  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

// Create private theme state - not exported directly
let themeState = $state(getInitialTheme());

// Function to save theme changes to localStorage
function saveTheme() {
  if (browser) {
    localStorage.setItem('theme', themeState);
    document.documentElement.dataset.theme = themeState;
  }
}

/**
 * Export function to get current theme
 * @returns {'light' | 'dark'}
 */
export function getTheme() {
  return themeState;
}

// Theme toggle function
export function toggleTheme() {
  themeState = themeState === 'light' ? 'dark' : 'light';
  saveTheme();
}

/**
 * Set specific theme
 * @param {'light' | 'dark'} newTheme
 */
export function setTheme(newTheme) {
  if (themes[newTheme]) {
    themeState = newTheme;
    saveTheme();
  }
}

// Initialize theme on first load
if (browser) {
  document.documentElement.dataset.theme = themeState;
}
