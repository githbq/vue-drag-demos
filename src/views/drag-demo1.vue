
<template>
  <fin-container>
    <left-panel v-model="templateList" />
    <fin-main class="drag-demo1-main">
      <div>
        <fin-button type="primary" @click="headleSubmit">确定</fin-button>
      </div>
      <fin-drag
        class="drag-demo1-main-content"
        @drop="drop"
        v-model="dragData"
      >
        <template v-slot="props">
          <component :is="props.data.componentType" v-model="props.data"/>
        </template>
      </fin-drag>
    </fin-main>
  </fin-container>
</template>

<script>
import LeftPanel from '@/components/drag-demo1/left-panel.vue';
// import RightPanel from '@/components/drag-demo1/right-panel.vue';
import FinDrag from '@/components/common/drag.vue';
import items from '@/components/drag-demo1/items';
import templateList from '@/assets/template-list';

export default {
  name: 'drag-demo1',
  components: {
    LeftPanel,
    // RightPanel,
    FinDrag,
    ...items,
  },
  data() {
    return {
      templateList,
      dragData: [],
    };
  },
  methods: {
    drop(data) {
      this.dragData.push(data);
    },
    headleSubmit() {
      alert(JSON.stringify(this.dragData));
    },
  },
};
</script>

<style scoped lang="less">
.drag-demo1-main {
  display: flex;
  flex-direction: column;
}
.drag-demo1-main-content {
  flex: 1;
}
</style>
