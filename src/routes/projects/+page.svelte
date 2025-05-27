<script>
  import NavBarTab from '$lib/components/NavBarTab.svelte';
  import TaskList from '$lib/components/TaskList.svelte';
</script>

<div class=" flex w-full flex-col px-4">
  <!-- header -->
  <div class="border-border-light flex w-full flex-col border-b pb-4">
    <p>Checkout Team</p>
    <div class="mb-4 flex flex-1 items-center justify-between">
      <h1 class="text-2xl font-bold">Storefront Checkout Revamp</h1>
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
  <TaskList
    listTitle="BACKLOG"
    tasks={[
      {
        title: 'Implement new payment gateway',
        desc: 'Integrate the new payment gateway for better transaction handling.',
        dueDate: '2023-11-30',
        attachedNum: 2,
        commentNum: 5,
        tags: ['Payment', 'Integration'],
      },
      {
        title: 'Revamp UI for checkout page',
        desc: 'Redesign the checkout page to improve user experience.',
        dueDate: '2023-12-15',
        attachedNum: 1,
        commentNum: 3,
        tags: ['UI', 'Design'],
      },
    ]}
  />
</div>
