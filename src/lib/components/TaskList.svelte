<script lang="ts">
  import { Icon } from 'svelte-awesome';
  import plus from 'svelte-awesome/icons/plus';
  import TaskCard from './TaskCard.svelte';

  export type Task = {
    id: string;
    tags: { id: string; name: string; color: string }[];
    title: string;
    desc: string;
    dueDate: string; // ISO date string
    avatars: { id: string; src: string }[];
    attachedNum: number;
    commentNum: number;
  };

  interface TaskListProps {
    listTitle: string;
    tasks: Task[];
  }
  let { listTitle, tasks }: TaskListProps = $props();
</script>

<div class="w-1/4 flex-col py-4">
  <div class="flex min-w-60 items-center justify-between">
    <div class="items-center gap-3">
      <h2 class="text-muted font-medium">
        {listTitle}
      </h2>
      <span class="text-subtle font-normal">{tasks.length}</span>
    </div>
    <button class="bg-border-light text-muted flex size-6 items-center justify-center rounded-full">
      <Icon data={plus} />
    </button>
  </div>

  <div class="mt-2 flex flex-1 flex-col gap-2 overflow-y-auto">
    {#each tasks as task}
      <TaskCard {...task} />
    {/each}
  </div>
</div>
