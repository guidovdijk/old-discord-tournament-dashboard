<template>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title is-5">One</p>
      <line-chart :data="this.data" />
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title is-5">Three</p>
    </div>
  </div>
</div>
</template>

<script>
  import LineChart from '@/components/charts/LineChart'
  export default {
    components: {
      LineChart
    },
    name: 'Dashboard',
    data(){
      return {
        gradient: null,
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'GitHub Commits',
              fontColor: 'white',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
            },
          ]
        }
      }
    },
    mounted() {
 
    },
    method: {

    }
  }
</script>