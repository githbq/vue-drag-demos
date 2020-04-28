<template>
  <draggable class="right-panel" :list="value"
             group="default">
    <section class="draggable-wrapper-item"
             v-for="item in value"
             :key="item.id">
      <h1>{{item.name}}-实例{{item.id}}</h1>
      <component :is="'fin-'+item.type"
                 v-model="item.data" />
    </section>
  </draggable>
</template>
<script>
import Draggable from 'vuedraggable';
import items from './items';

export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  components: { Draggable, ...items },
};

</script>

<style lang="less">
.right-panel{
  flex:1;
  height:100%;
}
</style>
