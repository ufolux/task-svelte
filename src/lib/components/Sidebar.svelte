<script>
  import Icon from 'svelte-awesome';
  import thLarge from 'svelte-awesome/icons/thLarge';
  import moon from 'svelte-awesome/icons/moonO';
  import sun from 'svelte-awesome/icons/sunO';
  import { page } from '$app/state';
  import { getTheme, toggleTheme } from '$lib/stores/theme.svelte';
</script>

<aside class="sidebar border-border flex w-40 flex-col border-r">
  <div class="sidebar-logo flex h-15 items-center justify-center gap-2 py-8">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="32" height="32" rx="8" fill="var(--color-primary)" />
      <rect x="9" y="10" width="5" height="20" rx="2" fill="white" />
      <rect x="17.5" y="10" width="5" height="20" rx="2" fill="white" />
      <rect x="26" y="10" width="5" height="20" rx="2" fill="white" />
    </svg>
    <span class="prose lg:prose-2xl text-primary">Tasker</span>
  </div>

  <div class="flex h-full flex-col justify-between">
    <ul class="sidebar-content flex flex-col px-2 py-4">
      <li
        class="sidebar-item hover:bg-color-hover flex items-center gap-2 rounded-md p-2"
        class:bg-color-active={page.url.pathname === '/projects'}
      >
        <Icon data={thLarge} />
        <a href="/projects" class="sidebar-link">Projects</a>
      </li>
    </ul>
    <ul class="sidebar-content flex flex-col px-2 py-4">
      <!-- Theme toggle button -->
      <li class="sidebar-item hover:bg-color-hover mt-auto flex items-center gap-2 rounded-md p-2">
        <button
          onclick={toggleTheme}
          class="text-primary flex items-center gap-2"
          title={getTheme() === 'light' ? 'Dark Mode' : 'Light Mode'}
        >
          <Icon data={getTheme() === 'light' ? moon : sun} />
          <span class="sidebar-link">
            {getTheme() === 'light' ? 'Dark Mode' : 'Light Mode'}
          </span>
        </button>
      </li>
    </ul>
  </div>
</aside>
