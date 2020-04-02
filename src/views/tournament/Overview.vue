<template>
  <section class="activities">
    <div class="activities__add-ons" v-if="!loading">
      <p class="title is-5 is-marginless">
        <strong>{{ data.name }}</strong>
      </p>
    </div>

    <b-tabs position="is-centered" v-model="activeTab" v-if="!loading">
      <b-tab-item label="Brackets">
        <tournament :data="data" :teams="teams" @changeActiveTab="this.changeActiveTab" />
      </b-tab-item>
      <b-tab-item label="Teams">
        <teams :data="data" :teams="teams" />
      </b-tab-item>
      <b-tab-item label="Details">
        <tournament-details :data="data" :teams="teams" />
      </b-tab-item>
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
    "tournament-details": Details
  },
  data() {
    return {
      loading: true,
      activeTab: 1,
      data: null,
      teams: []
    };
  },
  mounted() {
    this.getData();
  },
  computed: {},
  methods: {
    getData() {
      const docData = db.collection("tournament").doc(this.$route.params.id);

      docData.onSnapshot(snapshot => {
        if (!snapshot.exists) return;
        let data = snapshot.data();
        data.startDate = this.formatDates(data.startDate);
        data.signupDate = this.formatDates(data.signupDate);
        this.data = data;
      });

      docData.collection("teams").onSnapshot(snapshot => {
        this.teams = [];
        snapshot.forEach(doc => {
          const team = doc.data();
          team.id = doc.id;
          this.teams.push(team);
        });
        this.loading = false;
      });
    },
    formatDates(timestamp) {
      return new Date(timestamp.seconds * 1000);
    },
    changeActiveTab(index) {
      this.activeTab = index;
    }
  }
};
</script>
