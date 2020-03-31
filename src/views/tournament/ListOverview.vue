<template>
  <div>
    <div
      class="box is-space-between is-flex is-flex-end"
      v-for="(t, index) in tournaments"
      :key="index"
    >
      <div>
        <p class="title is-5">
          <strong>{{t.name}}</strong>
        </p>
        <p class="subtitle is-6">{{t.type}}</p>
        <p>
          Start date: {{t.startDate}}
          <br />
          Sign up end date: {{t.signupDate}}
        </p>
      </div>
      <div>
        <b-button type="is-primary" @click="goToDetailPage(t.id)">play along</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/main";

export default {
  name: "ListOverview",
  data() {
    return {
      tournaments: []
    };
  },
  beforeMount() {
    this.getAllTournaments();
  },
  methods: {
    goToDetailPage(id) {
      this.$router.push({ name: "Details", params: { id: id } });
    },
    getAllTournaments() {
      db.collection("tournament")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const data = doc.data();
            data.startDate = new Date(
              data.startDate.seconds * 1000
            ).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour12: false,
              hour: "2-digit",
              minute: "2-digit"
            });

            data.signupDate = new Date(
              data.signupDate.seconds * 1000
            ).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour12: false,
              hour: "2-digit",
              minute: "2-digit"
            });

            data.id = doc.id;
            this.tournaments.push(data);
            console.log(data);
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    }
  }
};
</script>
