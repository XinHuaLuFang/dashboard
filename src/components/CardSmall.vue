<template>
  <div class="card-small">
    <div class="card-small-content">
      <div class="card-small-title">{{title}}</div>
      <div class="card-small-subtitle">{{subTitle}}</div>
      <div class="card-small-num">{{num}}</div>
      <div class="card-small-bottom">
        <span class="card-small-increment">{{increment}}</span>
        <span class="card-small-percent">{{percent}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      title: '',
      subTitle: '',
      num: '',
      increment: '',
      percent: ''
    }
  },

  mounted () {
    this.getData()
  },

  methods: {
    getData () {
      this.http.get('/api/dashboard/get-chart-detail').then(({ data }) => {
        this.title = data.title
        this.subTitle = data.subTitle
        this.num = data.num
        this.increment = data.increment
        this.percent = data.percent
      })
    }
  }
}
</script>

<style>
.card-small {
  width: 25%;
  height: 240px;
  padding: 16px;
}
.card-small-content {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.card-small-title {
  font-size: 18px;
  color: #000;
  text-align: left;
  height: 30px;
  line-height: 30px;
}
.card-small-subtitle {
  font-size: 14px;
  color: #333;
  text-align: left;
  height: 30px;
  line-height: 30px;
}
.card-small-num {
  flex: 1;
  color: #000;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.card-small-bottom {
  text-align: left;
  height: 30px;
  line-height: 30px;
}
.card-small-increment {
  font-size: 16px;
}
.card-small-percent {
  font-size: 16px;
  padding-left: 30px;
}
</style>
