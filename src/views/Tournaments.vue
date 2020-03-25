<template>
  <Activities />              
</template>

<script>
// @ is an alias to /src
import TheActivities from '@/components/TheActivities.vue'

export default {
  name: 'Tournaments',
  components: {
    'Activities': TheActivities
  },
  methods: {
    toggle(){

    }
  }
}
</script>
