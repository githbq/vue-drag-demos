
<template>
  <fin-container>
    <left-panel v-model="templateList" />
    <fin-main class="drag-demo2-main">
      <div style="margin-bottom: 20px">
        <fin-button type="primary" size="small" @click="submit">确定</fin-button>
      </div>
      <right-panel v-model="dragData"/>
    </fin-main>
  </fin-container>
</template>

<script>
import LeftPanel from '@/components/drag-demo2/left-panel.vue';
import RightPanel from '@/components/drag-demo2/right-panel.vue';
import templateList from '@/assets/template-list2';

export default {
  name: 'drag-demo2',
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
      // console.log(this.formList);
    },
  },
};
</script>

<style scoped lang="less">
.drag-demo2-main {
  display: flex;
  flex-direction: column;
}
</style>
