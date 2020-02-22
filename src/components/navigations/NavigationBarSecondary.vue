<template>
    <nav class="level navbar--secondary">
        <!-- Left side -->
        <div class="level-left">
            <div class="level-item">
                <p class="title is-5">
                    <strong>123</strong> posts
                </p>
            </div>
        </div>

        <div class="level-item has-text-centered">
            <p v-for="(item, index) in navItems" v-bind:key="index">
                <a v-on:click="changeActivity(item)">
                    {{item}}
                </a>
            </p>
        </div>
        <div class="level-right">
            <p class="level-item">
                <button class="button is-link is-rounded is-outlined">
                    <span class="icon is-small">
                        <i class="fas fa-settings"></i>
                    </span>
                    <span>Edit tournament</span>
                </button>
            </p>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationBarSecondary',
    props: {
    },
    data(){
        return {
            navItems: [
                'Tournament',
                'Brackets',
                'Teams',
                'Results',
            ]
        };
    },
    methods: {
        changeActivity(item){
            this.$store.dispatch("changeActivity", {
                activity: item
            });
            console.log(this.$store.state);
        }
    }
}
</script>

