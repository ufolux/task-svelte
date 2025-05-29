<script lang="ts">
  import { Icon } from 'svelte-awesome';
  import paperclip from 'svelte-awesome/icons/paperclip';
  import commenting from 'svelte-awesome/icons/commentingO';
  import ellipsisH from 'svelte-awesome/icons/ellipsisH';
  import flag from 'svelte-awesome/icons/flag';
  import TaskTag, { type Tag } from '$lib/components/TaskTag.svelte';
  import TaskAvatar, { type Avatar } from '$lib/components/TaskAvatar.svelte';

  interface Props {
    tags: Tag[];
    title: string;
    desc: string;
    dueDate: string; // ISO date string
    avatars: Avatar[];
    attachedNum: number;
    commentNum: number;
  }

  let { tags, title, desc, dueDate, avatars, attachedNum, commentNum }: Props = $props();
  dueDate = new Date(dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
</script>

<div
  class="border-border-light bg-background-light flex flex-col rounded-lg border-1 p-4 shadow-sm"
>
  <div class="mb-2 flex items-center justify-between">
    <div class="flex gap-1">
      <!-- tag -->
      {#each tags as tag (tag.id)}
        <TaskTag {tag} />
      {/each}
    </div>
    <button>
      <Icon data={ellipsisH} class="text-icon-secondary" />
    </button>
  </div>

  <h3 data-variant="cardTitle">{title}</h3>
  <p data-variant="caption">{desc}</p>
  <p data-variant="caption" class="mt-2">
    <Icon data={flag} />
    {dueDate}
  </p>
  <div class="mt-2 flex items-center justify-between">
    <div class="flex items-center">
      {#each avatars as avatar, index (avatar.id)}
        <TaskAvatar {avatar} isLast={index === avatars.length - 1} />
      {/each}
    </div>
    <div class="text-icon-secondary flex items-center gap-2 text-sm">
      <button class="items-center gap-1">
        <Icon data={paperclip} />
        {attachedNum}
      </button>
      <button class="items-center gap-1">
        <Icon data={commenting} />
        {commentNum}
      </button>
    </div>
  </div>
</div>
