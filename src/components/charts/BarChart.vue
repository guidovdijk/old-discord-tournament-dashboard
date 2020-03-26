<script>
  import { Bar } from 'vue-chartjs'

  export default {
    extends: Bar,
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