<template>
  <fin-aside class="aside-wrapper">
    <draggable
      :list="value"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :clone="cloneDog"
      :sort="false"
    >
      <div
        v-for="(item, index) in value"
        :key="index"
        class="left-panel-item"
      >
        {{item.name}}
      </div>
    </draggable>
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
    cloneDog(item) {
      return {
        ...item,
        id: `${item.id}_${new Date().getTime()}`,
      };
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
