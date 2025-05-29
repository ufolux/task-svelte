<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    classes?: string[];
    style?: string;
    children?: Snippet;
  }

  let { classes = [], style = '', children }: Props = $props();
</script>

<div class={['flex', 'flex-col', ...classes]} {style}>
  {@render children?.()}
</div>
