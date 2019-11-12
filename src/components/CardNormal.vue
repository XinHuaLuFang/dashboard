<template>
  <div class="card-normal">
    <div class="card-normal-content">
      <div class="card-normal-title">小程序流量追踪</div>
      <div class="card-normal-subtitle">2019/07/01 - 2019/09/01，按日</div>
      <div class="card-normal-chart"></div>
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
      chart: null
    }
  },

  mounted () {
    this.getData()
  },

  methods: {
    getData () {
      this.http.get('/api/dashboard/get-chart-data').then(({ data }) => {
        if (this.chart) {
          return
        }
        let chart = this.echarts.init(this.$el.querySelector('.card-normal-chart'))
        if (this.id === 5) {
          chart.setOption({
            xAxis: {
              type: 'category',
              data: data.chartData1.date
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: '小程序UV',
                data: data.chartData1.uv,
                type: 'line'
              },
              {
                name: '小程序PV',
                data: data.chartData1.pv,
                type: 'line'
              }
            ]
          })
        } else {
          chart.setOption({
            series: [
              {
                type: 'pie',
                radius: ['50%', '70%'],
                data: [
                  { name: '日活/北京/ios日活/北京', value: 500 },
                  { name: '日活/南京/平谷区', value: 250 },
                  { name: '加入购物车的门店的去重数/南京/平谷区', value: 250 }
                ]
              }
            ]
          })
        }
        window.addEventListener('resize', function () {
          chart.resize()
        })
      })
    }
  }
}
</script>

<style>
.card-normal {
  width: 50%;
  height: 480px;
  padding: 16px;
}
.card-normal-content {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.card-normal-title {
  font-size: 18px;
  color: #000;
  text-align: left;
  height: 30px;
  line-height: 30px;
}
.card-normal-subtitle {
  font-size: 14px;
  color: #333;
  text-align: left;
  height: 30px;
  line-height: 30px;
}
.card-normal-chart {
  flex: 1;
}
</style>
