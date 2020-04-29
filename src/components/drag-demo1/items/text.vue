<template>
  <span>{{value.value}}</span>
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
