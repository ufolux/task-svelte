<script>
  import { page } from '$app/state';
  import Icon from 'svelte-awesome';
  import userPlus from 'svelte-awesome/icons/userPlus';
  import settings from 'svelte-awesome/icons/cog';
  import infoCircle from 'svelte-awesome/icons/infoCircle';
  import plus from 'svelte-awesome/icons/plus';

  const tabs = [
    { name: 'Board', href: '#board' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Table', href: '#table' },
    { name: 'Reports', href: '#reports' },
    { name: 'Files', href: '#files' },
  ];

  const buttons = [
    { icon: userPlus, label: 'Add User' },
    { icon: settings, label: 'Settings' },
    { icon: infoCircle, label: 'Info' },
  ];
</script>

<div class="flex w-full items-center justify-between">
  <div class="flex gap-1">
    {#each tabs as tab}
      <a
        href={tab.href}
        class={[
          'hover:bg-hover',
          'rounded-md',
          'px-2',
          'py-2',
          {
            'bg-active': tab.href === page.url.hash,
            'text-primary': tab.href === page.url.hash,
            'text-subtle': tab.href !== page.url.hash,
          },
        ]}
        aria-label={tab.name}
      >
        {tab.name}
      </a>
    {/each}
  </div>

  <div class="flex h-10 gap-2">
    {#each buttons as button}
      <button
        class="text-icon-primary hover:bg-hover border-border-light flex size-10 items-center justify-center gap-1 rounded-xl border"
        aria-label={button.label}
      >
        <Icon class="size-6" data={button.icon} />
      </button>
    {/each}
    <button
      class="bg-primary hover:bg-secondary flex min-w-30 items-center justify-center gap-2 rounded-md px-2 text-white"
    >
      <Icon data={plus} />
      New Board
    </button>
  </div>
</div>
