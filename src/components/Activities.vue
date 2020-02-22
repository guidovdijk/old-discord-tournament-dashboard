<template>
    <keep-alive>
        <component :is="activity"></component>
    </keep-alive>

</template>

<script>
import Teams from './activities/Teams.vue'
import Tournament from './activities/Tournament.vue'
    export default {
        name: 'Activities',
        components: {
            Teams,
            Tournament,
        },
        computed: {
            activity(){
                return this.$store.state.activity;
            }
        },
    }
</script>