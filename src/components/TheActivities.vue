<template>
  <section class="activities">
    <div class="activities__add-ons">
      <p class="title is-5 is-marginless"><strong>Tournament</strong> title</p>
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
  import Teams from "./activities/Teams.vue";
  import Tournament from "./activities/Tournament.vue";
  import Details from "./activities/Details.vue";
  export default {
    name: "Activities",
    components: {
      Teams,
      Tournament,
      Details
    },
    data() {
      return {
        activeTab: 2,
        navItems: [
          {
            name: "Brackets",
            component: "Tournament"
          },
          {
            name: "Teams",
            component: "Teams"
          },
          {
            name: "Details",
            component: "Details"
          }
        ]
      };
    }
  };
</script>
