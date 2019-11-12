<template>
  <div id="app">
    <left-menu @node-click="handleNodeClick"></left-menu>
    <right-content ref="rightContent" :id="id"></right-content>
  </div>
</template>

<script>
import LeftMenu from '@/views/LeftMenu'
import RightContent from '@/views/RightContent'

export default {
  components: {
    LeftMenu,
    RightContent
  },

  data () {
    return {
      id: 0
    }
  },

  methods: {
    handleNodeClick (id) {
      this.id = id
    }
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f1f1f1;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
