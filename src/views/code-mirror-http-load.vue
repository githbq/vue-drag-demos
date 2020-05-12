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
    <div style="border:2px solid red;width:100%;">
      <component :is="componentName" />
    </div>
  </div>
</template>

<script>
import dedent from 'dedent';
import { codemirror } from 'vue-codemirror';
import httpVueLoader from 'http-vue-loader';

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
      componentName: 'div',
      code: dedent(
        `
        <template>
   <div class="test-demo">{{x}}</div>
</template>

<script>
////////////////// code-mirror-http-load
 module.exports={
   data:function (){
     return {x:'hello word'}
   } 
};
<${'/'}script>

<style scoped>
 .test-demo{color:red;}
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
  async mounted() {
    const componentName = 'Aaaaaa';
    // 如果接口http://localhost:8000/dist/xxx能返回vue模板内容则可渲染
    this.$options.components[componentName] = await httpVueLoader('http://localhost:8000/dist/xxx');
    this.componentName = componentName;
  },
};
</script>

<style lang="less">
.example {
  display: flex;
  height: 100%;
  .vue-codemirror,
  .CodeMirror {
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
