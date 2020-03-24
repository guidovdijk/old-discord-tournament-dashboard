<template>
    <section class="activities">

        <div class="activities__add-ons">
            <p class="title is-5 is-marginless">
                <strong>Tournament</strong> title
            </p>

            <b-button icon-left="settings" type="is-link" rounded outlined>Edit tournament</b-button>
        </div>

        <b-tabs position="is-centered" v-model="activeTab">
            <template v-for="(item, index) in navItems">
                <b-tab-item :key="index" :label="item.name">
                    <component :is="item.component"></component>
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
                activeTab: 1,
                navItems: [
                    {
                        name: 'Brackets',
                        component: 'Tournament',
                    },
                    {
                        name: 'Teams',
                        component: 'Teams',
                    },
                    {
                        name: 'Results',
                        component: 'Results',
                    },
                ]
            }
        }
    }
</script>
