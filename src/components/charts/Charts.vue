<template>
    <div class="tile is-child box">
        <p class="title is-5">{{this.title}}</p>
        <component :is="chart" :data="data" :options="options.chart" @gradient="createGradient"/>
    </div>
</template>

<script>
import LineChart from './LineChart';
import Chart from 'chart.js';

Chart.defaults.global.defaultColor = "white";
Chart.defaults.global.defaultFontColor = "white";
Chart.defaults.global.defaultFontSize = 11;
Chart.defaults.global.tooltips.enabled = true;
Chart.defaults.global.elements.line.borderColor = 'rgb(58, 184, 156, 1)';
Chart.defaults.global.elements.line.tension = 0.5;
Chart.defaults.global.elements.line.pointBorderWidth = 5;
Chart.defaults.global.elements.line.borderWidth = 2;

export default {
    name: 'Charts',
    props: ['data', 'chart', 'title'],
    components: {
        LineChart
    },
    methods: {
        createGradient(gradient){
            this.gradient = gradient.getContext('2d').createLinearGradient(0, 0, 0, 450)

            for (let i = 0; i < this.options.custom.gradient.length; i++) {
                const gradient = this.options.custom.gradient[i];
                this.gradient.addColorStop(gradient.stop, gradient.color);
            }

            this.insertGradient();
        },

        insertGradient(){
            this.data.datasets.forEach(set => {
                set.backgroundColor = this.gradient;
                set.pointBackgroundColor = 'rgb(58, 184, 156, 1)';
            });
        },    
    },
    data() {
        return {
            gradient: null,
            options: {
                custom: {
                    gradient: [
                        {
                            color: "rgb(58, 184, 156, 0.0)",
                            stop: 1
                        },
                        {
                            color: "rgb(58, 184, 156, 0.2)",
                            stop: 0.5
                        },
                        {
                            color: "rgb(58, 184, 156, 0.5)",
                            stop: 0
                        },
                    ]
                },
                chart: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                }
            }
        }
    },
}
</script>