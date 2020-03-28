<template>
  <div class="sidebar-narrow-width is-fixed has-background-dark">
    <b-menu>
      <b-menu-list>
        <b-menu-item label="Dashboard" tag="router-link" :to="{ path: '/'}" exact></b-menu-item>
        <b-menu-item>
          <template slot="label" slot-scope="props">Teams</template>
          <b-menu-item>
            <template slot="label" slot-scope="props">Devices</template>
          </b-menu-item>
          <b-menu-item label="Payments" disabled></b-menu-item>
        </b-menu-item>
        <b-menu-item label="Tournament" :active="path.includes('tournaments')" expanded>
          <template slot="label" slot-scope="props">Tournament</template>
          <b-menu-item
            tag="router-link"
            :to="{ path: '/tournaments/overview' }"
            exact
            label="Overview"
          ></b-menu-item>
          <b-menu-item
            tag="router-link"
            :to="{ path: '/tournaments/create' }"
            label="New Tournament"
          ></b-menu-item>
        </b-menu-item>
      </b-menu-list>
      <b-menu-list>
        <b-menu-item label="My Profile" tag="router-link" to="/about"></b-menu-item>
      </b-menu-list>
      <div class="menu-end">
        <b-menu-list>
          <b-menu-item label="Twitter"></b-menu-item>
          <b-menu-item label="Discord"></b-menu-item>
          <b-menu-item label="Facebook"></b-menu-item>
        </b-menu-list>
      </div>
    </b-menu>
  </div>
</template>

<script>
export default {
  name: "NavigationSidebar",
  data() {
    return {
      path: this.$route && this.$route.path
    };
  },
  watch: {
    $route(route) {
      this.path = route.path;
    }
  }
};
</script>
