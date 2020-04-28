<template>
  <fin-input
    type="text"
    placeholder="请输入"
    v-model="value.value"
  />
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
