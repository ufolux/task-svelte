<script>
  import { toggleTheme, getTheme } from '$lib/stores/theme.svelte';
  import Icon from 'svelte-awesome';
  import moon from 'svelte-awesome/icons/listAlt';
  import sun from 'svelte-awesome/icons/listAlt';
</script>

<nav
  class="navbar bg-color-sidebar-bg border-color-sidebar-border flex h-10 items-center justify-between border-b px-4"
>
  <div class="flex-1">
    <h1 class="text-lg font-bold">Dashboard</h1>
  </div>

  <div class="flex items-center gap-3">
    <button
      on:click={toggleTheme}
      class="hover:bg-color-hover rounded-full p-2 transition-colors"
      title={getTheme() === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <Icon data={getTheme() === 'light' ? moon : sun} />
    </button>

    <div class="bg-color-primary flex h-8 w-8 items-center justify-center rounded-full text-white">
      US
    </div>
  </div>
</nav>
