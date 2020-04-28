<template>
  <fin-drag @drop="drop" v-model="value">
    <template v-slot="props">
      <component :is="props.data.componentType" v-model="props.data"/>
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
  },
};
</script>
