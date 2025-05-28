<script lang="ts">
  export type Avatar = {
    id: string;
    src: string;
  };
  export interface AvatarProps {
    avatar: Avatar;
    isLast?: boolean;
  }
  let { avatar, isLast }: AvatarProps = $props();
</script>

<img
  src={avatar.src}
  alt="Avatar"
  class={['size-6', 'rounded-full', 'border-border-light', 'border-2', isLast ? null : '-mr-2']}
/>
