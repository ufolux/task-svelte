<script>
  import { Icon } from 'svelte-awesome';
  import plus from 'svelte-awesome/icons/plus';
  import TaskCard from './TaskCard.svelte';

  /**
   * @type {{ listTitle: string, tasks: { title: string, desc: string, dueDate: string, attachedNum: number, commentNum: number, tags: string[] }[] }}
   */
  let { listTitle, tasks } = $props();
</script>

<div class="py-4">
  <div class="flex w-1/4 min-w-60 items-center justify-between bg-amber-50">
    <h2 class="text-muted font-bold">
      {listTitle}
      <span class="font-medium">{tasks.length}</span>
    </h2>
    <button
      class="bg-icon-secondary text-muted flex size-6 items-center justify-center rounded-full"
    >
      <Icon data={plus} />
    </button>
  </div>

  <div>
    {#each tasks as task}
      <TaskCard {...task} />
    {/each}
  </div>
</div>
