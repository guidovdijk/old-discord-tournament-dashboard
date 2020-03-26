<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    props: {
      data: {
        type: Object,
        default: null,
      }, 
      options: {
        type: Object,
        default: null,
      }
    },

    mounted () {    
        this.createGradient();
                
        this.renderChart(this.data, this.options);
    },
    methods: {
      createGradient() { 
        this.$emit('gradient', this.$refs.canvas);
      },
    }
  }
</script>