<template>
    <div class="tournament-item-players" :nextNode="nextNode" >
        <div>
            <div
                :class="['tournament-player', 'tournament-player1', getPlayerClass(bracketNode.player1)]" @click="getPlayer(bracketNode.player1)"
            >
                <slot :player="bracketNode.player1" name="player" />
            </div>

            <div
                :class="['tournament-player', 'tournament-player2', getPlayerClass(bracketNode.player2)]" @click="getPlayer(bracketNode.player2)"
            >
                <slot :player="bracketNode.player2" name="player" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "game-players",
        props: ["bracketNode", "nextNode"],
        computed: {

        },
        data(){
            return {
                matchValue: 0,
            }
        },
        mounted() {
            console.log(this.bracketNode);
        },
        methods: {
            getPlayerClass(player) {
                if (player.winner === null || player.winner === undefined) {
                    return "";
                }
                let clazz = player.winner ? "winner" : "defeated";
                if (this.highlightedPlayerId === player.id) {
                    clazz += " highlight";
                }
                return clazz;
            },
            getPlayer(player, round){

                // this.$store.dispatch("changeTournamentRoundWinner", {
                //     rounds: {
                //         round: round,
                //         game: game,
                //         player: player
                //     }
                // });
                // console.log(this.nextNode);

                // {
                //     player1: { id: "", name: "", winner: null },
                //     player2: { id: "", name: "", winner: null }
                // },
                // {
                //     player1: { id: "", name: "", winner: null },
                //     player2: { id: "", name: "", winner: null }
                // }

                const game = Math.round(player.id / 2) - 1;
                const winners = this.$store.state.tournament.roundWinners;
                // console.log(this.$store.state.tournament.roundWinners, player, game);

                winners[game] = player;

                console.log(game);
                // console.log(this.$store.state.tournament.rounds[this.bracketNode.round].games[game]['player' + (game + 1)]);


                // this.$store.state.tournament.rounds[this.bracketNode.round].games[0]['player' + (game + 1)] = player;
                // this.$store.state.tournament.rounds[this.bracketNode.round].games = winners;
                // this.$store.state.tournament.rounds[this.bracketNode.round].games[game].player1.id = player.id;

                this.$emit("getPlayer", player);
            }
        }
    };
</script>