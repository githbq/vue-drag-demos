<template>
 <img style="width: 100%"
      src="../../../assets/logo.png"
      :alt="value.alt"
  >
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
