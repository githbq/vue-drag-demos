
<template>
  <fin-container>
    <left-panel v-model="templateList" />
    <fin-main class="drag-demo2-main">
      <div>
        <fin-button type="primary" @click="submit">确定</fin-button>
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
.fin-form-wrapper {
  margin-top: 20px;
}
.fin-form-wrapper, .draggable-wrapper {
  height: 100%;
}
.draggable-wrapper-item {
  border: solid 1px #eee;
  margin-bottom: 10px;
  padding: 10px;
  > h1 {
    margin-bottom: 10px;
  }
}
</style>
