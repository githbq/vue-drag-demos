<template>
  <fin-aside class="aside-wrapper">
    <draggable :list="value"
               :group="{ name: 'default', pull: 'clone', put: false }"
               :clone="clone"
               :sort="false">
      <div class="left-panel-item"
           v-for="(item,index) in value"
           :key="index">
        {{item.name}}
      </div>
    </draggable>
  </fin-aside>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: { draggable },
  props: {
    groupName: {
      type: String,
      default: 'default',
    },
    value: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clone(item) {
      return {
        ...item,
        id: `${item.name}_${new Date().getTime()}`,
      };
    },
  },
};
</script>

<style scoped>
.aside-wrapper .left-panel-item {
  width: 180px;
  height: 40px;
  border: solid 1px #ccc;
  text-align: center;
  line-height: 40px;
  margin: 20px auto 0;
}
</style>
