<template>
 <div class="image-comp">
   <i class="el-icon-picture"></i>
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
.image-comp {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  color: #666;
  font-size: 36px;
}
</style>
