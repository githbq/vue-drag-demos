<template>
  <fin-aside class="aside-wrapper">
    <div
      v-for="(item, index) in value"
      :key="index"
      class="left-panel-item"
      :draggable="true"
      @dragstart="dragstart($event, item)"
    >
      <i :class="iconType[item.type]"></i>
      <span>{{item.name}}</span>
    </div>
  </fin-aside>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      iconType: {
        text: 'el-icon-tickets',
        image: 'el-icon-picture-outline',
        input: 'el-icon-edit',
        block: 'el-icon-takeaway-box',
      },
    };
  },
  methods: {
    dragstart(event, item) {
      event.dataTransfer.setData('Object', JSON.stringify(item));
    },
  },
};
</script>

<style lang="less" scoped>
.aside-wrapper .left-panel-item {
  box-sizing: border-box;
  width: 180px;
  height: 40px;
  line-height: 40px;
  margin: 20px auto 0;
  padding-left: 20px;
  font-size: 14px;
  cursor: move;
  background: #f4f6fc;
  span {
    padding-left: 8px;
  }
  &:hover {
    color: #409eff;
    border: dashed 1px #409eff;
  }
}
</style>
