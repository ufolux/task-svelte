<script lang="ts">
  export type Avatar = {
    id: string;
    src: string;
  };
  interface Props {
    avatar: Avatar;
    isLast?: boolean;
  }
  let { avatar, isLast }: Props = $props();
</script>

<img
  src={avatar.src}
  alt="Avatar"
  class={['size-6', 'rounded-full', 'border-border-light', 'border-2', isLast ? null : '-mr-2']}
/>
