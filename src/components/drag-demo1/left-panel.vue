<template>
  <fin-aside class="aside-wrapper">
    <div
      v-for="(item, index) in value"
      :key="index"
      class="left-panel-item"
      :draggable="true"
      @dragstart="dragstart($event, item)"
    >
      {{item.name}}
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
  methods: {
    dragstart(event, item) {
      event.dataTransfer.setData('Object', JSON.stringify(item));
    },
  },
};
</script>

<style scoped>
.aside-wrapper >>> .left-panel-item {
  width: 180px;
  height: 40px;
  border: solid 1px #ccc;
  text-align: center;
  line-height: 40px;
  margin: 20px auto 0;
}
</style>
