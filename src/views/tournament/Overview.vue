<template>
  <section class="activities">
    <div class="activities__add-ons" v-if="!loading">
      <p class="title is-5 is-marginless">
        <strong>{{data.name}}</strong>
      </p>
    </div>

    <b-tabs position="is-centered" v-model="activeTab" v-if="!loading">
      <template v-for="(item, index) in navItems">
        <b-tab-item :key="index" :label="item.name">
          <component :is="item.component" :data="data" :teams="teams"></component>
        </b-tab-item>
      </template>
    </b-tabs>
  </section>
</template>

<script>
import { db } from "@/main";
import Teams from "@/components/activities/Teams.vue";
import Tournament from "@/components/activities/Tournament.vue";
import Details from "@/components/activities/Details.vue";

export default {
  name: "Overview",
  components: {
    Teams,
    Tournament,
    Details
  },
  data() {
    return {
      loading: true,
      activeTab: 2,
      data: null,
      teams: [],
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
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const docData = db.collection("tournament").doc(this.$route.params.id);

      docData.onSnapshot(snapshot => {
        if (!snapshot.exists) return;
        let data = snapshot.data();
        this.data = data;
      });

      docData.collection("teams").onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          const team = doc.data();

          this.teams.push(team);
        });
        this.loading = false;
      });
    }
  }
};
</script>
