<template>
  <div id="leftMenu">
    <el-input
      placeholder="搜索看板"
      v-model="filterText"
    ></el-input>
    <div>我的看板</div>
    <el-tree
      :data="treeData"
      :props="treeProps"
      default-expand-all
      :filter-node-method="filterMethod"
      ref="tree"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterText: '',
      treeData: [],
      treeProps: {
        label: 'name',
        children: 'children'
      }
    }
  },

  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },

  mounted () {
    this.getTree()
  },

  methods: {
    getTree () {
      this.http.get('/api/dashboard/get-my-dashboards').then(({ data }) => {
        this.treeData = [{
          name: '我的运营看板',
          children: data.dashdash
        }]
        this.$nextTick(() => {
          let doms = this.$el.querySelectorAll('.el-tree-node')
          doms[1].click()
        })
      })
    },

    filterMethod (value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },

    handleNodeClick (node) {
      this.$emit('node-click', node.id)
    }
  }
}
</script>

<style>
#leftMenu {
  background: #fff;
  width: 240px;
}
</style>
