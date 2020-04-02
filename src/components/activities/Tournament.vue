<template>
  <section class="tournament has-min-height">
    <div class="content" v-if="!tournamentStarted">
      <p>
        Tournament has not yet started
        <br />
        Start date: {{this.dateFormatter(data.startDate)}}
      </p>
      <div class="buttons" v-if="isAdmin">
        <b-button type="is-primary">Start now!</b-button>
        <b-button @click="changeActiveTab(2)" type="is-light">Change Date</b-button>
      </div>
    </div>
    <div v-else>
      <!-- <bracket :rounds="rounds">
        <template #player="{ player }">{{ player.name }}</template>
      </bracket>-->
    </div>
  </section>
</template>

<script>
// import Bracket from "./tournament/Bracket";

export default {
  name: "Tournament",
  props: ["data", "teams"],
  components: {
    // Bracket
  },
  data() {
    return {
      tournamentStarted: false,
      isAdmin: true
      // rounds: this.$store.state.tournament.rounds
    };
  },
  methods: {
    dateFormatter(dt) {
      return dt.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
      });
    },
    changeActiveTab(tabIndex) {
      this.$emit("changeActiveTab", tabIndex);
    }
  }
};
</script>
