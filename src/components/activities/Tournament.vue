<template>
  <!-- <bracket :rounds="rounds">
    <template #player="{ player }">{{ player.name }}</template>
  </bracket> -->
  <div></div>
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
        // rounds: this.$store.state.tournament.rounds
      };
    }
  };
</script>
