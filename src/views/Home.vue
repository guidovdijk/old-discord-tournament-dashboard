<template>
  <div>
    <NavigationBar msg="Welcome to Your Vue.js App"/>
      <NavigationSidebar />
      <div class="container is-fluid">
        <div class="columns has-sidebar-neighbour">
          <div class="column">
            <div class="columns">
              <div class="column is-10-desktop is-12-tablet">
                <NavigationBarSecondary />
                <Activities />
                
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/navigations/NavigationBar.vue'
import NavigationSidebar from '@/components/navigations/NavigationSidebar.vue'
import NavigationBarSecondary from '@/components/navigations/NavigationBarSecondary.vue'
import Activities from '@/components/Activities.vue'

export default {
  name: 'Home',
  components: {
    NavigationBar,
    NavigationSidebar,
    NavigationBarSecondary,
    Activities
  },
  methods: {
    toggle(){

    }
  }
}
</script>
