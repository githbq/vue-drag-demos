<template>
  <fin-drag class="drag-demo1-main-content"
            ref="finDrag"
            @drop="drop"
            v-model="value">
    <template v-slot:header="{ activeIndex }">
      <div>
        <fin-button type="primary" @click="setZIndex(activeIndex, true)">置顶</fin-button>
        <fin-button type="primary" @click="setZIndex(activeIndex)">置低</fin-button>
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
  methods: {
    drop(data) {
      this.value.push(data);
    },
    setZIndex(index, isTop) {
      if (index !== null) {
        const item = this.value[index];
        const zIndex = isTop ? this.getNumber('max') + 1 : this.getNumber('min') - 1;
        this.$set(this.value, index, {
          ...item,
          zIndex: zIndex < 0 ? 0 : zIndex,
        });
        this.$refs.finDrag.clearActiveIndex();
      }
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
