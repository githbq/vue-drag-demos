<template>
  <fin-form label-width="80px">
    <fin-form-item label="姓名">
      <fin-input v-model="value.name"></fin-input>
    </fin-form-item>
    <fin-form-item label="年龄">
      <fin-input v-model="value.age"></fin-input>
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
