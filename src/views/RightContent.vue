<template>
  <div id="rightContent">
    <h3>南京大区数据</h3>
    <div class="content">
      <draggable
        v-model="cards"
        group="cards"
        @start="drag=true"
        @end="drag=false"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <component
          v-for="(item, index) in cards"
          :key="index"
          :id="item.id"
          :is="item.component"
        ></component>
      </draggable>
      <p v-if="loading">加载中</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CardSmall from '@/components/CardSmall'
import CardNormal from '@/components/CardNormal'

export default {
  components: {
    draggable,
    CardSmall,
    CardNormal
  },

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      cards: [],
      cardsBackup: [],
      loading: false
    }
  },

  computed: {
    noMore () {
      return this.cards.length >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },

  mounted () {
    this.getData()
  },

  methods: {
    getData () {
      // 不会mock传参
      this.http.get('/api/dashboard/get-dashboard-detail').then(({ data }) => {
        this.cards = data.charts
        this.cardsBackup = JSON.parse(JSON.stringify(data.charts))
      })
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.cards = this.cards.concat(this.cardsBackup)
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style>
#rightContent {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 40px 20px;
}
#rightContent h3 {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  color: #000;
}
#rightContent .content>div>div {
  float: left;
}
#rightContent .content>div:after {
  content: '';
  clear: both;
  display: block;
  width: 0;
  height: 0;
  font-size: 0;
}
</style>
