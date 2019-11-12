import Mock from 'mockjs'

Mock.mock('/api/dashboard/get-my-dashboards', 'get', () => {
  return {
    dashdash: [
      {
        id: 1,
        name: '南京大区数据',
        category: '我的运营看板'
      },
      {
        id: 2,
        name: '北京大区数据',
        category: '我的运营看板'
      }
    ]
  }
})

Mock.mock('/api/dashboard/get-dashboard-detail', 'get', (params) => {
  return {
    id: 1,
    name: '南京大区数据',
    category: '我的运营看板',
    author: '张三',
    charts: [
      {
        id: 1,
        index: 1,
        component: 'card-small'
      },
      {
        id: 2,
        index: 2,
        component: 'card-small'
      },
      {
        id: 3,
        index: 3,
        component: 'card-small'
      },
      {
        id: 4,
        index: 4,
        component: 'card-small'
      },
      {
        id: 5,
        index: 5,
        component: 'card-normal'
      },
      {
        id: 6,
        index: 6,
        component: 'card-normal'
      }
    ]
  }
})

Mock.mock('/api/dashboard/get-chart-detail', 'get', () => {
  return {
    title: '小程序流量追踪',
    subTitle: '2019/07/01 - 2019/09/01,按日',
    num: '58,846',
    increment: '2045',
    percent: '34.5%'
  }
})

Mock.mock('/api/dashboard/get-chart-data', 'get', () => {
  return {
    chartData1: {
      date: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08'],
      uv: [300, 260, 240, 240, 270, 235, 250, 240],
      pv: [370, 320, 310, 310, 350, 310, 320, 310]
    },
    chartData2: {}
  }
})
