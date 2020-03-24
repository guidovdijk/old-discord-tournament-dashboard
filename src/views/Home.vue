<template>
  <div class="container is-fluid">
    <div class="columns has-sidebar-neighbour">
      <div class="column">
        <div class="columns">
          <div class="column is-10-desktop is-12-tablet">
            <Activities />              
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheActivities from '@/components/TheActivities.vue'

export default {
  name: 'Home',
  components: {
    'Activities': TheActivities
  },
  methods: {
    toggle(){

    }
  }
}
</script>
