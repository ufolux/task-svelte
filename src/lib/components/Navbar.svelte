<script>
  import Icon from 'svelte-awesome';
  import bullhorn from 'svelte-awesome/icons/bullhorn';
  import arrowLeft from 'svelte-awesome/icons/arrowLeft';
  import search from 'svelte-awesome/icons/search';
</script>

<nav class="navbar text-foreground flex flex-col items-center justify-between gap-6 px-4 pb-4">
  <!-- bar -->
  <div class="flex w-full pt-4">
    <div class="text-icon-secondary flex flex-1 items-center gap-6">
      <button class="flex items-center" title="back">
        <Icon data={arrowLeft} />
      </button>
      <div class="flex max-w-80 flex-1 items-center gap-2 rounded-md border-1 px-2 py-1">
        <Icon class="text-subtle" data={search} />
        <input class="text-foreground focus:outline-none" placeholder="Search a thing..." />
      </div>
    </div>

    <div class="flex items-center gap-3">
      <Icon data={bullhorn} class="text-foreground" />
      <div class="flex">User A</div>
    </div>
  </div>
</nav>
