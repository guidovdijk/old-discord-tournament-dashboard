<template>
    <bracket :rounds="rounds">
        <template #player="{ player }">
            {{ player.name }}
        </template>
    </bracket>
</template>

<script>
    import Bracket from "./tournament/Bracket";
    const rounds = [
        //Quarter
        {
            games: [
                {
                    player1: { id: "1", name: "Competitor 1", winner: null },
                    player2: { id: "2", name: "Competitor 2", winner: null }
                },
                {
                    player1: { id: "3", name: "Competitor 3", winner: null },
                    player2: { id: "4", name: "Competitor 4", winner: null }
                },
                {
                    player1: { id: "5", name: "Competitor 5", winner: null },
                    player2: { id: "6", name: "Competitor 6", winner: null }
                },
                {
                    player1: { id: "7", name: "Competitor 7", winner: null },
                    player2: { id: "8", name: "Competitor 8", winner: null }
                }
            ]
        },
        //Semi
        {
            games: [
                {
                    player1: { id: "", name: "", winner: null },
                    player2: { id: "", name: "", winner: null }
                },
                {
                    player1: { id: "", name: "", winner: null },
                    player2: { id: "", name: "", winner: null }
                }
            ]
        },
        //Final
        {
            games: [
                {
                    player1: { id: "", name: "", winner: null },
                    player2: { id: "", name: "", winner: null }
                }
            ]
        }
    ];
    export default {
        name: "Tournament",
        components: {
            Bracket
        },
        data() {
            return {
                rounds: rounds
            };
        }
    };
</script>