
<template>
  <fin-container>
    <left-panel v-model="templateList" />
    <fin-main class="drag-demo1-main">
      <div>
        <fin-button type="primary"
                    @click="submit">确定</fin-button>
      </div>
      <right-panel v-model="dragData" />
    </fin-main>
  </fin-container>
</template>

<script>
import LeftPanel from '@/components/drag-demo1/left-panel.vue';
import RightPanel from '@/components/drag-demo1/right-panel.vue';
import templateList from '@/assets/template-list';

export default {
  name: 'drag-demo1',
  components: {
    LeftPanel,
    RightPanel,
  },
  data() {
    return {
      templateList,
      dragData: [],
    };
  },
  methods: {
    submit() {
      // alert(JSON.stringify(this.dragData));
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
