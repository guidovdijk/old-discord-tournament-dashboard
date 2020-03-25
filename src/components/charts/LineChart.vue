<script>
  import { Line } from 'vue-chartjs'
  import options from './chartOptions';

  export default {
    extends: Line,
    props: ['data'],
    data(){
      return {
        dataCollection: null,
        options: options,
        gradient: null,
      }
    },
    mounted () {
        this.createGradient();
        this.insertGradient();
        
        this.renderChart(this.data, this.options)

        this.renderChart({
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Data One',
              borderColor: 'white',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: 'white',
              backgroundColor: this.gradient,
              data: [40, 39, 10, 40, 39, 80, 40]
            }
          ]
        });
    },
    methods: {
      createGradient(){
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

        for (let i = 0; i < this.options.custom.gradient.length; i++) {
          const gradient = this.options.custom.gradient[i];
          this.gradient.addColorStop(gradient.stop, gradient.color);
        }
      },

      insertGradient(){
        this.data.datasets.forEach(set => {
          set.backgroundColor = this.gradient;
        });
      }
    }
  }
</script>