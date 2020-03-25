const options = {
  chart: {
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
            fontColor: 'white'
        }
      }],
      xAxes: [{
        ticks: {
            fontColor: 'white',
        }
      }]
    }
  },
  custom: {
    gradient: [ 
      {
        color: "rgb(58, 184, 156, 0.5)",
        stop: 1
      },
      {
        color: "rgb(58, 184, 156, 0.3)",
        stop: 0.5
      },
      {
        color: "rgb(58, 184, 156, 0.0)",
        stop: 0
      },
    ]
  }
}

export default options;