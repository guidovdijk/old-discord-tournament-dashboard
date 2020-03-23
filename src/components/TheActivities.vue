<template>
    <section class="activities">

        <div class="activities__add-ons">
            <p class="title is-5 is-marginless">
                <strong>123</strong> posts
            </p>

            <b-button icon-left="settings" type="is-link" rounded outlined>Edit tournament</b-button>
        </div>

        <b-tabs position="is-centered" v-model="activeTab">
            <template v-for="(item, index) in navItems">
                <b-tab-item :key="index" :label="item">
                    <component :is="item"></component>
                </b-tab-item>
            </template>
        </b-tabs>

    </section>
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
        data() {
            return {
                activeTab: 0,
                navItems: [
                    'Tournament',
                    'Brackets',
                    'Teams',
                    'Results',
                ]
            }
        }
    }
</script>
