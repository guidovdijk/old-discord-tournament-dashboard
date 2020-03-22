<template>
    <b-navbar :fixed-top="true" :type="'is-black'">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">

            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        Sign up
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>


<script>
export default {
  name: 'NavigationBar',
  props: {
    msg: String
  }
}
</script>

