<template>
    <div>
      <NavigationBar msg="Welcome to Your Vue.js App"/>
      <NavigationSidebar />

      <div class="container is-fluid">
        <div class="columns has-sidebar-neighbour">
          <div class="column is-10-desktop is-12-tablet">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import TheNavigation from '@/components/navigations/TheNavigation.vue'
import TheSidebar from '@/components/navigations/TheSidebar.vue'
export default {
  components: {
    'NavigationBar': TheNavigation,
    'NavigationSidebar': TheSidebar,
  }
}
</script>