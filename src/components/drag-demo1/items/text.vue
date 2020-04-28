<template>
  <span>{{value.label}}</span>
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
