<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { getTheme } from '$lib/stores/theme.svelte.js';
  import '../app.css';

  let { children } = $props();

  // Watch for theme changes and update the DOM
  $effect(() => {
    const theme = getTheme();
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = theme;
    }
  });
</script>

<div class="layout bg-background flex h-screen w-screen">
  <Sidebar />
  <main class="main flex flex-1 flex-col">
    <Navbar />
    {@render children()}
  </main>
</div>
