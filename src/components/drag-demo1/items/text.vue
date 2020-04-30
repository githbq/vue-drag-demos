<template>
  <span class="text-comp">
    <textarea v-model="value.value"></textarea>
  </span>
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
.text-comp {
  > textarea {
    width: 100%;
    height: 100%;
    border: 0;
    resize: none;
    background: rgba(0, 0, 0, 0);
    &:focus {
      outline: 0;
    }
  }
}
</style>
