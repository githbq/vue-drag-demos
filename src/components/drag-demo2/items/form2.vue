<template>
  <fin-form label-width="80px">
    <fin-form-item label="身高">
      <fin-input v-model="value.height"></fin-input>
    </fin-form-item>
    <fin-form-item label="体重">
      <fin-input v-model="value.weight"></fin-input>
    </fin-form-item>
  </fin-form>
</template>
<script>
export default {
  props: {
    value: Object,
  },
};
</script>
