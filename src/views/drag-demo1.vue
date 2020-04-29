
<template>
  <fin-container>
    <left-panel v-model="templateList" />
    <fin-main>
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
    // submit() {
    //   alert(JSON.stringify(this.dragData));
    // },
  },
};
</script>
