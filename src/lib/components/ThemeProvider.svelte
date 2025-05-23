<script>
  import { getTheme, themes } from '../stores/theme.svelte';

  // Get current theme object
  let currentTheme = $derived(themes[getTheme()]);

  // Generate CSS variables from theme
  let cssVars = $derived({
    '--color-primary': currentTheme.colors.primary,
    '--color-background': currentTheme.colors.background,
    '--color-text': currentTheme.colors.text,
    '--color-sidebar-bg': currentTheme.colors.sidebarBg,
    '--color-sidebar-border': currentTheme.colors.sidebarBorder,
    '--color-hover': currentTheme.colors.hover,
    '--color-active': currentTheme.colors.active,
  });

  // Convert CSS variables to inline style string
  let styleString = $derived(
    Object.entries(cssVars)
      .map(([key, value]) => `${key}:${value}`)
      .join(';')
  );

  // Accept children as props for Svelte 5
  let { children } = $props();
</script>

<div style={styleString}>
  {@render children()}
</div>
