<template>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <charts v-if="this.loaded" :data="this.data" :chart="'line-chart'"/>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title is-5">Three</p>
    </div>
  </div>
</div>
</template>

<script>
  import Charts from '@/components/charts/Charts';

  export default {
    components: {
      Charts
    },
    name: 'Dashboard',
    data(){
      return {
        loaded: false,
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'GitHub Commits',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
            },
          ]
        }
      }
    },
    mounted(){
      this.loaded = true;
    }
  }
</script>