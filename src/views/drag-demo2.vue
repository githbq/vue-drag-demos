
<template>
  <fin-container>
    <left-panel v-model="templateList" />
    <fin-main class="drag-demo2-main">
      <div>
        <fin-button type="primary" @click="submit">确定</fin-button>
      </div>
      <fin-form class="fin-form-wrapper" label-width="80px">
        <draggable class="draggable-wrapper" :list="formList" group="people">
          <section
            class="draggable-wrapper-item"
            v-for="item in formList"
            :key="item.id"
          >
            <h1>{{item.name}}-实例{{item.id}}</h1>
            <fin-form-item
              v-for="(citem, ind) in item.fields"
              :label="citem.label"
              :key="ind"
            >
              <fin-input v-model="citem.value"></fin-input>
            </fin-form-item>
          </section>
        </draggable>
      </fin-form>
    </fin-main>
  </fin-container>
</template>

<script>
import LeftPanel from '@/components/drag-demo2/left-panel.vue';
import templateList from '@/assets/template-list2';

export default {
  name: 'drag-demo1',
  components: {
    LeftPanel,
  },
  data() {
    return {
      templateList,
      formList: [],
    };
  },
  methods: {
    submit() {
      console.log(this.formList);
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
