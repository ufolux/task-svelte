<script>
  /**
   * @type {{ tag: Tag }}
   */
  let { tag } = $props();
</script>

<span class={['rounded-xl', 'px-2', tag.color]}>
  {tag.name}
</span>
