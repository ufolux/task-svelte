<script lang="ts">
  export type Tag = {
    id: string;
    name: string;
    color: string;
    description?: string;
  };

  export interface TaskTagProps {
    tag: Tag;
  }
  let { tag }: TaskTagProps = $props();
</script>

<span class={['rounded-xl', 'px-2', tag.color]}>
  {tag.name}
</span>
