<template>
    <bracket :rounds="rounds">
        <template #player="{ player }">
            {{ player.name }}
        </template>
    </bracket>
</template>

<script>
    import Bracket from "./tournament/Bracket";
 
    export default {
        name: "Tournament",
        components: {
            Bracket
        },
        data() {
            return {
                rounds: this.$store.state.tournament.rounds
            };
        }
    };
</script>