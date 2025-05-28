<script>
  import { Icon } from 'svelte-awesome';
  import paperclip from 'svelte-awesome/icons/paperclip';
  import commenting from 'svelte-awesome/icons/commentingO';
  import ellipsisH from 'svelte-awesome/icons/ellipsisH';
  import flag from 'svelte-awesome/icons/flag';
  import TaskTag from './TaskTag.svelte';

  /**
   * @typedef {Object} CardProps
   * @property {Tag[]} tags - Array of tags associated with the task
   * @property {string} title - Title of the task
   * @property {string} desc - Description of the task
   * @property {string} dueDate - Due date of the task in ISO format
   * @property {Avatar[]} avatars - Array of avatars associated with the task
   * @property {number} attachedNum - Number of attachments
   * @property {number} commentNum - Number of comments on the task
   */

  /**
   * @type CardProps
   */
  let { tags, title, desc, dueDate, avatars, attachedNum, commentNum } = $props();
  dueDate = new Date(dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
</script>

<div class="border-border-light flex flex-1 flex-col rounded-lg border-1 p-4 shadow-md">
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
  <p data-variant="caption">
    <Icon data={flag} />
    {dueDate}
  </p>
  <div class="flex">
    <div class="flex items-center">
      {#each avatars as avatar, index (avatar.id)}
        <img
          src={avatar.src}
          alt="Avatar"
          class={['h-10', 'w-10', 'rounded-full', index === avatars.length - 1 ? null : '-mr-2']}
        />
      {/each}
    </div>
    <div>
      <span>
        <Icon data={paperclip} />
        {attachedNum}
      </span>
      <span>
        <Icon data={commenting} />
        {commentNum}
      </span>
    </div>
  </div>
</div>
