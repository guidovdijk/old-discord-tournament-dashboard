<template>
    <div>
      <NavigationBar msg="Welcome to Your Vue.js App"/>
      <NavigationSidebar />
      <router-view/>
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