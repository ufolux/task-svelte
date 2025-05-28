<script>
  import NavBarTab from '$lib/components/NavBarTab.svelte';
  import TaskList from '$lib/components/TaskList.svelte';
</script>

<div class="flex w-full flex-1 flex-col overflow-y-scroll">
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
  <div class="bg-background gap-8 overflow-y-auto px-4">
    <TaskList
      listTitle="BACKLOG"
      tasks={[
        {
          title: 'Implement new payment gateway',
          desc: 'Integrate the new payment gateway for better transaction handling.',
          dueDate: '2023-11-30',
          attachedNum: 2,
          commentNum: 5,
          tags: [
            { id: 'payment', name: 'Payment', color: 'bg-green-200' },
            { id: 'integrate', name: 'Integration', color: 'bg-blue-200' },
          ],
          avatars: [
            {
              id: '1',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '2',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Implement new payment gateway',
        },
        {
          title: 'Revamp UI for checkout page',
          desc: 'Redesign the checkout page to improve user experience.',
          dueDate: '2023-12-15',
          attachedNum: 1,
          commentNum: 3,
          tags: [
            { id: 'ui', name: 'UI', color: 'bg-yellow-200' },
            { id: 'design', name: 'Design', color: 'bg-purple-200' },
          ],
          avatars: [
            {
              id: '3',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '4',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Revamp UI for checkout page',
        },
        {
          title: 'Revamp UI for checkout page1',
          desc: 'Redesign the checkout page to improve user experience.',
          dueDate: '2023-12-15',
          attachedNum: 1,
          commentNum: 3,
          tags: [
            { id: 'ui', name: 'UI', color: 'bg-yellow-200' },
            { id: 'design', name: 'Design', color: 'bg-purple-200' },
          ],
          avatars: [
            {
              id: '5',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '6',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Revamp UI for checkout page2',
        },
        {
          title: 'Revamp UI for checkout page1',
          desc: 'Redesign the checkout page to improve user experience.',
          dueDate: '2023-12-15',
          attachedNum: 1,
          commentNum: 3,
          tags: [
            { id: 'ui', name: 'UI', color: 'bg-yellow-200' },
            { id: 'design', name: 'Design', color: 'bg-purple-200' },
          ],
          avatars: [
            {
              id: '5',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '6',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Revamp UI for checkout page3',
        },
        {
          title: 'Revamp UI for checkout page1',
          desc: 'Redesign the checkout page to improve user experience.',
          dueDate: '2023-12-15',
          attachedNum: 1,
          commentNum: 3,
          tags: [
            { id: 'ui', name: 'UI', color: 'bg-yellow-200' },
            { id: 'design', name: 'Design', color: 'bg-purple-200' },
          ],
          avatars: [
            {
              id: '5',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '6',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Revamp UI for checkout page4',
        },
        {
          title: 'Revamp UI for checkout page1',
          desc: 'Redesign the checkout page to improve user experience.',
          dueDate: '2023-12-15',
          attachedNum: 1,
          commentNum: 3,
          tags: [
            { id: 'ui', name: 'UI', color: 'bg-yellow-200' },
            { id: 'design', name: 'Design', color: 'bg-purple-200' },
          ],
          avatars: [
            {
              id: '5',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '6',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Revamp UI for checkout page5',
        },
        {
          title: 'Revamp UI for checkout page1',
          desc: 'Redesign the checkout page to improve user experience.',
          dueDate: '2023-12-15',
          attachedNum: 1,
          commentNum: 3,
          tags: [
            { id: 'ui', name: 'UI', color: 'bg-yellow-200' },
            { id: 'design', name: 'Design', color: 'bg-purple-200' },
          ],
          avatars: [
            {
              id: '5',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '6',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Revamp UI for checkout page6',
        },
      ]}
    />
    <TaskList
      listTitle="TO DO"
      tasks={[
        {
          title: 'Implement new payment gateway',
          desc: 'Integrate the new payment gateway for better transaction handling.',
          dueDate: '2023-11-30',
          attachedNum: 2,
          commentNum: 5,
          tags: [
            { id: 'payment', name: 'Payment', color: 'bg-green-200' },
            { id: 'integrate', name: 'Integration', color: 'bg-blue-200' },
          ],
          avatars: [
            {
              id: '1',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '2',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Implement new payment gateway',
        },
        {
          title: 'Revamp UI for checkout page improve user experience',
          desc: 'Redesign the checkout page to improve user experience.',
          dueDate: '2023-12-15',
          attachedNum: 1,
          commentNum: 3,
          tags: [
            { id: 'ui', name: 'UI', color: 'bg-yellow-200' },
            { id: 'design', name: 'Design', color: 'bg-purple-200' },
          ],
          avatars: [
            {
              id: '3',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '4',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Revamp UI for checkout page',
        },
      ]}
    />
    <TaskList
      listTitle="IN PROGRESS"
      tasks={[
        {
          title: 'Implement new payment gateway',
          desc: 'Integrate the new payment gateway for better transaction handling.',
          dueDate: '2023-11-30',
          attachedNum: 2,
          commentNum: 5,
          tags: [
            { id: 'payment', name: 'Payment', color: 'bg-green-200' },
            { id: 'integrate', name: 'Integration', color: 'bg-blue-200' },
          ],
          avatars: [
            {
              id: '1',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '2',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Implement new payment gateway',
        },
        {
          title: 'Revamp UI for checkout page improve user experience',
          desc: 'Redesign the checkout page to improve user experience.',
          dueDate: '2023-12-15',
          attachedNum: 1,
          commentNum: 3,
          tags: [
            { id: 'ui', name: 'UI', color: 'bg-yellow-200' },
            { id: 'design', name: 'Design', color: 'bg-purple-200' },
          ],
          avatars: [
            {
              id: '3',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '4',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Revamp UI for checkout page',
        },
      ]}
    />
    <TaskList
      listTitle="NEEDS REVIEW"
      tasks={[
        {
          title: 'Implement new payment gateway',
          desc: 'Integrate the new payment gateway for better transaction handling.',
          dueDate: '2023-11-30',
          attachedNum: 2,
          commentNum: 5,
          tags: [
            { id: 'payment', name: 'Payment', color: 'bg-green-200' },
            { id: 'integrate', name: 'Integration', color: 'bg-blue-200' },
          ],
          avatars: [
            {
              id: '1',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '2',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Implement new payment gateway',
        },
        {
          title: 'Revamp UI for checkout page improve user experience',
          desc: 'Redesign the checkout page to improve user experience.',
          dueDate: '2023-12-15',
          attachedNum: 1,
          commentNum: 3,
          tags: [
            { id: 'ui', name: 'UI', color: 'bg-yellow-200' },
            { id: 'design', name: 'Design', color: 'bg-purple-200' },
          ],
          avatars: [
            {
              id: '3',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
            {
              id: '4',
              src: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0093c1a89fdc9bc0ebfb54d6d9db16537db1ea5a_full.jpg',
            },
          ],
          id: 'Revamp UI for checkout page',
        },
      ]}
    />
  </div>
</div>
