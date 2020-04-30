<template>
  <div class="input-conp">
    <fin-input
      type="text"
      placeholder="请输入"
      v-model="value.value"
    />
  </div>
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
.input-conp {
  height: 100%;
  & /deep/ .el-input {
    height: 100%;
    .el-input__inner {
      height: 100%;
    }
  }
}
</style>
