<template>
  <div class="block-comp">{{value.value}}</div>
</template>
<script>
export default {
  props: {
    value: {
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
.block-comp {
  height: 100%;
  background: #eee;
}
</style>
