<template>
  <div>
    <fin-button type="primary">置顶</fin-button>
    <fin-button type="primary">置低</fin-button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>

</style>
