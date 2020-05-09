<template>
  <div class="example">
    <div class="codemirror">
      <codemirror v-model="code"
                  :options="cmOption"
                  @cursorActivity="onCmCursorActivity"
                  @ready="onCmReady"
                  @focus="onCmFocus"
                  @blur="onCmBlur" />
    </div>
    <pre class="pre">{{ code }}</pre>
  </div>
</template>

<script>
import dedent from 'dedent';
import { codemirror } from 'vue-codemirror';

// base style
import 'codemirror/lib/codemirror.css';

// theme css
import 'codemirror/theme/base16-dark.css';

// language
import 'codemirror/mode/vue/vue';

// active-line.js
import 'codemirror/addon/selection/active-line';

// styleSelectedText
import 'codemirror/addon/selection/mark-selection';
import 'codemirror/addon/search/searchcursor';

// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar';
import 'codemirror/addon/search/matchesonscrollbar';

import 'codemirror/addon/search/match-highlighter';

// keyMap
import 'codemirror/mode/clike/clike';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/search/search';
import 'codemirror/keymap/sublime';

// foldGutter
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/fold/xml-fold';

export default {
  name: 'codemirror-example-vue',
  title: 'Mode: text/x-vue & Theme: base16-dark',
  components: {
    codemirror,
  },
  data() {
    return {
      code: dedent(
        `
        <template>
  <fin-drag class="drag-demo1-main-content"
            ref="finDrag"
            @drop="drop"
            v-model="value">
    <template v-slot:header="{ isActived }">
      <div class="drag-content-btnwrap" ref="btnWrap">
        <fin-button
          :disabled="!isActived"
          class="vdr-trmbl-button"
          type="primary"
          size="small"
          @click="setDomPosition('push')"
        >
          置顶
        </fin-button>
        <fin-button
          :disabled="!isActived"
          class="vdr-trmbl-button"
          type="primary"
          size="small"
          @click="setDomPosition('unshift')"
        >置底</fin-button>
        <fin-button
          :disabled="!isActived"
          class="vdr-trmbl-button"
          type="primary"
          size="small"
          @click="setLevel(1)"
        >上移一级</fin-button>
        <fin-button
          :disabled="!isActived"
          class="vdr-trmbl-button"
          type="primary"
          size="small"
          @click="setLevel(-1)"
        >下移一级</fin-button>
      </div>
    </template>
    <template v-slot="props">
      <component :is="'fin-'+props.data.type"
                 v-model="props.data.data" />
    </template>
  </fin-drag>
</template>

<script>
import Superquad from 'superquad';
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
  data() {
    return {
      superquad: null,
    };
  },
  mounted() {
    /**
     * 解决控件获取焦点点击按钮导致失焦问题
     * 源码判断逻辑正则
     * className: vdr
     * new RegExp(this.className + '-([trmbl]{2})', '')
     * 所以想点击除控件以外元素不失焦需要增加class前缀：vdr-trmbl
     */
    const spans = this.$refs.btnWrap.querySelectorAll('span');
    for (let i = 0; i < spans.length; i += 1) {
      spans[i].className = 'vdr-trmbl-span';
    }
    // 创建碰撞检测对象
    this.superquad = new Superquad(this.$refs.finDrag.getDrggableContentWidthHeight());
  },
  methods: {
    drop(data) {
      this.value.push({
        ...data,
        id: new Date().getTime(),
      });
    },
    setDomPosition(type) {
      const { index } = this.$refs.finDrag.getActiveInfo();
      if (index !== undefined) {
        this.value[type](...this.value.splice(index, 1));
      }
    },
    setLevel(moveNumber = 1) {
      /**
       * 实现思路
       * 1、获取当前选中元素重叠在一起的数据集合
       * 2、找到集合中选中元素上一级or下一级元素所在原数组的下标
       * 3、交互两个元素位置
       */
      this.superquad.clear();
      const { id, index } = this.$refs.finDrag.getActiveInfo();
      let gather = null;
      let gatherIndex = null;
      this.value.forEach((item) => {
        const { w, h } = item;
        this.superquad.add({
          ...item,
          width: w,
          height: h,
        });
        const possibleCollisions = this.superquad.getIntersections({
          ...item,
          width: w,
          height: h,
        });
        // 1
        possibleCollisions.forEach((citem, i) => {
          if (citem.id === id) {
            gatherIndex = i;
            gather = possibleCollisions;
          }
        });
      });
      // 2
      // 当前选中元素在集合中的上一个or下一个元素
      const prevItem = gather[gatherIndex + moveNumber];
      if (prevItem) {
        // 当前选择元素的上一个元素所在原数组的下标
        const prevIndex = this.value.findIndex((item) => item.id === prevItem.id);
        // 3 在原数组中交互位置
        const selectItem = this.value.splice(index, 1, prevItem)[0];
        this.value.splice(prevIndex, 1, selectItem);
      }
    },
    // setZIndex(index, isTop) {
    //   const item = this.value[index];
    //   const zIndex = isTop ? this.getNumber('max') + 1 : this.getNumber('min') - 1;
    //   this.$set(this.value, index, {
    //     ...item,
    //     zIndex: zIndex < 0 ? 0 : zIndex,
    //   });
    // },
    // getNumber(type) {
    //   return Math[type](...this.value.map((o) => o.zIndex));
    // },
  },
};
<${'/'}script>

<style scoped lang="less">
.drag-demo1-main-content {
  height: 100%;
}
.drag-content-btnwrap {
  margin-bottom: 20px;
}
</style>

        `,
      ),
      cmOption: {
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        keyMap: 'sublime',
        mode: 'text/x-vue',
        theme: 'base16-dark',
        extraKeys: {
          F11(cm) {
            cm.setOption('fullScreen', !cm.getOption('fullScreen'));
          },
          Esc(cm) {
            if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false);
          },
        },
      },
    };
  },
  methods: {
    onCmCursorActivity(mirror) {
      console.debug('onCmCursorActivity', mirror);
    },
    onCmReady(mirror) {
      console.debug('onCmReady', mirror);
    },
    onCmFocus(mirror) {
      console.debug('onCmFocus', mirror);
    },
    onCmBlur(mirror) {
      console.debug('onCmBlur', mirror);
    },
  },
};
</script>

<style lang="less">
.example {
  display: flex;
  height: 100%;
  .vue-codemirror,.CodeMirror {
    height: 100%;
  }
  .codemirror,
  .pre {
    width: 50%;
    height: 100%;
    margin: 0;
    overflow: auto;
  }

  .pre {
    display: block;
    padding: 1rem;
    font-size: 14px;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
