<template>
  <div
    ref="drggable"
    class="drggable-resizable-container"
    @drop="drop"
    @dragover="dragover"
  >
    <slot name="header" :activeIndex="activeIndex" />
    <div class="drggable-resizable-wrapper">
      <vue-draggable-resizable
        v-for="(item, index) in value"
        :style="{ zIndex: item.zIndex }"
        :key="index"
        :w="item.w"
        :h="item.h"
        :x="item.x"
        :y="item.y"
        :parent="true"
        :debug="false"
        :snap="true"
        :snapTolerance="10"
        @resizing="setDragData(item, ...arguments)"
        @dragging="setDragData(item, ...arguments)"
        @refLineParams="getRefLineParams"
        @activated="activeIndex = index"
      >
        <slot :data="item" />
      </vue-draggable-resizable>
      <span
        class="ref-line v-line"
        v-for="(item, index) in vLine"
        :key="`${index}v`"
        v-show="item.display"
        :style="{ left: item.position, top: item.origin, height: item.lineLength }"
      />
      <span
        class="ref-line h-line"
        v-for="(item, index) in hLine"
        :key="`${index}h`"
        v-show="item.display"
        :style="{ top: item.position, left: item.origin, width: item.lineLength }"
      />
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable-gorkys';
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css';

export default {
  components: {
    VueDraggableResizable,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      vLine: [],
      hLine: [],
      activeIndex: null, // 当前激活元素下标
    };
  },
  methods: {
    // 辅助线回调事件
    getRefLineParams(params) {
      const { vLine, hLine } = params;
      this.vLine = vLine;
      this.hLine = hLine;
    },
    setDragData(item, left, top, width, height) {
      // eslint-disable-next-line no-param-reassign
      item.x = left;
      // eslint-disable-next-line no-param-reassign
      item.y = top;
      if (width) {
        // eslint-disable-next-line no-param-reassign
        item.w = width;
      }
      if (height) {
        // eslint-disable-next-line no-param-reassign
        item.h = height;
      }
    },
    dragover(ev) {
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
      const { drggable } = this.$refs;
      const { x, y } = ev;
      const offsetY = y - drggable.offsetTop;
      const offsetX = x - drggable.offsetLeft;
      const data = JSON.parse(ev.dataTransfer.getData('Object'));
      this.$emit('drop', {
        ...data,
        x: offsetX - data.w / 2,
        y: offsetY - data.h / 2,
      });
    },
    clearActiveIndex() {
      this.activeIndex = null;
    },
  },
};
</script>

<style scoped lang="less">
.drggable-resizable-container {
  display: flex;
  flex-direction: column;
}
.drggable-resizable-wrapper {
  flex: 1;
  position: relative;
  border: solid 1px #eee;
}
</style>
