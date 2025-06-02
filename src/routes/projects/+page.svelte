<script>
  import NavBarTab from '$lib/components/NavBarTab.svelte';
  import TaskList from '$lib/components/TaskList.svelte';
  import { ListData } from '$lib/models/MockData.js';
</script>

<div class="flex w-full flex-1 flex-col overflow-y-hidden">
  <!-- header -->
  <div class="border-border-light flex w-full flex-col border-b px-4 pb-4">
    <p>Checkout Team</p>
    <div class="mb-4 flex flex-1 items-center justify-between">
      <h1 data-variant="pageTitle">Storefront Checkout Revamp</h1>
      <img
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg"
        alt="Project Thumbnail"
        class="h-10 w-10 rounded-full"
      />
    </div>

    <!-- tabs -->
    <NavBarTab />
  </div>

  <!-- task list -->
  <div class="bg-background-light flex-1 gap-8 overflow-y-hidden px-4">
    <TaskList listTitle="BACKLOG" tasks={ListData.backlog} />
    <TaskList listTitle="TO DO" tasks={ListData.todo} />
    <TaskList listTitle="IN PROGRESS" tasks={ListData.inProgress} />
    <TaskList listTitle="NEEDS REVIEW" tasks={ListData.needsReview} />
  </div>
</div>
