import { browser } from '$app/environment';

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
  if (savedTheme) return savedTheme;

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
  if ((newTheme === 'light' || newTheme === 'dark') && newTheme !== themeState) {
    themeState = newTheme;
    saveTheme();
  }
}

// Initialize theme on first load
if (browser) {
  document.documentElement.dataset.theme = themeState;
}
