<template>
  <div class="is-viewport-height is-flex has-direction-column">
    <NavigationBar msg="Welcome to Your Vue.js App"/>
      <div class="columns is-variable is-8">
        <div class="column is-narrow has-background-dark column-has-scroll">
          <NavigationSidebar />
        </div>
        <div class="column column-has-scroll">
          <div class="columns is-fullheight ">
            <div class="column column-has-max-height is-10-desktop is-12-tablet">
              <NavigationBarSecondary />
              <Activities />
              
            </div>
          </div>
        </div>
        <div class="column is-2 has-background-dark">
              <NavigationSidebar />

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
