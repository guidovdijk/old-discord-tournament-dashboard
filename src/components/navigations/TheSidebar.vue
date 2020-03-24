<template>
  <div class="sidebar-narrow-width is-fixed has-background-dark">
    <b-menu>
        <b-menu-list>
            <b-menu-item label="Dashboard"></b-menu-item>
            <b-menu-item>
                <template slot="label" slot-scope="props">
                    Teams
                </template>
                <b-menu-item>
                    <template slot="label" slot-scope="props">
                        Devices
                        <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                        </b-dropdown>
                    </template>
                </b-menu-item>
                <b-menu-item label="Payments" disabled></b-menu-item>
            </b-menu-item>
            <b-menu-item label="Tournament" :active="isActive">
                <b-menu-item tag="router-link" :to="{ path: '/' }" label="Overview"></b-menu-item>
                <b-menu-item label="Addresses"></b-menu-item>
            </b-menu-item>
        </b-menu-list>
        <b-menu-list>
            <b-menu-item
                label="My Profile"
                tag="router-link"
                to="/about">
            </b-menu-item>
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
        name: 'NavigationSidebar',
        data() {
            return {
                isActive: true
            }
        }
    }
</script>
