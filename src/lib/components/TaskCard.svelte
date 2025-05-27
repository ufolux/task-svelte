<script>
  import { Icon } from 'svelte-awesome';
  import paperclip from 'svelte-awesome/icons/paperclip';
  import commenting from 'svelte-awesome/icons/commentingO';

  /**
   * @type {{ tags: string[], title: string, desc: string, dueDate: string, attachedNum: number, commentNum: number }}
   */
  let { tags, title, desc, dueDate, attachedNum, commentNum } = $props();
</script>

<div class="flex flex-col">
  <div class="flex">
    <!-- tag -->
    {#each tags as tag}
      <span>{tag}</span>
    {/each}
  </div>
  <h1>{title}</h1>
  <h2>{desc}</h2>
  <h3>{dueDate}</h3>
  <div class="flex">
    <div>
      <img
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg"
        alt="Avatar"
        class="h-10 w-10 rounded-full"
      />
      <img
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg"
        alt="Avatar"
        class="h-10 w-10 rounded-full"
      />
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
