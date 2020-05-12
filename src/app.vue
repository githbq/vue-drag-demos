<template>
  <fin-container id="app"
                 direction="vertical">
    <fin-header>
      <router-link to="/">Home</router-link> |
      <router-link to="/drag-demo1">drag-demo1</router-link> |
      <router-link to="/drag-demo2">drag-demo2</router-link> |
      <router-link to="/code-mirror">code-mirror</router-link> |
      <router-link to="/code-mirror-http-load">code-mirror-http-load</router-link> |
    </fin-header>
    <router-view />
  </fin-container>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-container {
  overflow: hidden;
}
.el-header {
  background-color: #b3c0d1;
  line-height: 60px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-aside {
  width: 200px !important;
  height: 100%;
  border-right: solid 1px #eee;
}
.el-main {
  overflow-y: auto;
}
</style>
