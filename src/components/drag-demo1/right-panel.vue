<template>
  <fin-drag class="drag-demo1-main-content"
            ref="finDrag"
            @drop="drop"
            v-model="value">
    <template v-slot:header="{ activeIndex }">
      <div ref="btnWrap">
        <fin-button
          class="vdr-trmbl-button"
          type="primary"
          @click="setZIndex(activeIndex, true)"
        >
          置顶
        </fin-button>
        <fin-button
          class="vdr-trmbl-button"
          type="primary"
          @click="setZIndex(activeIndex)"
        >置底</fin-button>
      </div>
    </template>
    <template v-slot="props">
      <component :is="'fin-'+props.data.type"
                 v-model="props.data.data" />
    </template>
  </fin-drag>
</template>

<script>
import FinDrag from '../common/drag.vue';
import items from './items';

export default {
  components: {
    FinDrag,
    ...items,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    /**
     * 解决控件获取焦点点击按钮导致失焦问题
     * 源码判断逻辑正则
     * className: vdr
     * new RegExp(this.className + '-([trmbl]{2})', '')
     * 所以想点击除控件以外元素不失焦需要增加class前缀：vdr-trmbl
     */
    const spans = this.$refs.btnWrap.querySelectorAll('span');
    for (let i = 0; i < spans.length; i += 1) {
      spans[i].className = 'vdr-trmbl-span';
    }
  },
  methods: {
    drop(data) {
      this.value.push(data);
    },
    setZIndex(index, isTop) {
      const item = this.value[index];
      const zIndex = isTop ? this.getNumber('max') + 1 : this.getNumber('min') - 1;
      this.$set(this.value, index, {
        ...item,
        zIndex: zIndex < 0 ? 0 : zIndex,
      });
    },
    getNumber(type) {
      return Math[type](...this.value.map((o) => o.zIndex));
    },
  },
};
</script>

<style scoped lang="less">
.drag-demo1-main-content {
  height: 100%;
}
</style>
