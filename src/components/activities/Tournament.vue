<template>
    <div class="tournament-wrapper">
        <div class="tournament-item" v-for="(round, index) in rounds" v-bind:key="index">
            <div class="matches">
                <div class="match" v-for="(game, i) in round.games" v-bind:key="i">
                    <p>
                        <span @click="updateBracket(game.player1, index, i)">
                            {{game.player1.name}}
                        </span>
                        vs
                        <span @click="updateBracket(game.player2, index, i)">
                            {{game.player2.name}}
                        </span>


                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bracket from "./tournament/Bracket";
 
    export default {
        name: "Tournament",
        components: {
            Bracket
        },
        methods: {
            getRoundNumber(round, game, index){
                if(game.player1.name){
                    const playerNumber = (index % 2) + 1;
                    console.log({round, game, playerNumber })
                    this.getNextRound(round);
                    
                    console.log(this.nextRound);
                }
            },
            getNextRound(round){
                return round + 1;
            },
            updateBracket(player, round, index){
                const nextRound = this.getNextRound(round);
                const playerNumber = (index % 2) + 1;
                const nextTarget = playerNumber - 1;
                const gameBracket = Math.floor(index / 2);
                const targetPlayer = this.rounds[nextRound].games[gameBracket]['player' + playerNumber];
                console.log(targetPlayer);
                targetPlayer.name = player.name;
            }
        },
        computed: {

        },
        data() {
            return {
                currentRound: 1,
                nextRound: 0,
                rounds: [
                    //Quarter
                    {
                        games: [
                            {
                                player1: { id: 1, name: "Competitor 1", winner: null },
                                player2: { id: 2, name: "Competitor 2", winner: null }
                            },
                            {
                                player1: { id: 3, name: "Competitor 3", winner: null },
                                player2: { id: 4, name: "Competitor 4", winner: null }
                            },
                            {
                                player1: { id: 5, name: "Competitor 5", winner: null },
                                player2: { id: 6, name: "Competitor 6", winner: null }
                            },
                            {
                                player1: { id: 7, name: "Competitor 7", winner: null },
                                player2: { id: 8, name: "Competitor 8", winner: null }
                            }
                        ]
                    },
                    {
                        games: [
                            {
                                player1: { id: 1, name: "semifinalist 1", winner: null },
                                player2: { id: 2, name: "semifinalist 2", winner: null }
                            },
                            {
                                player1: { id: 3, name: "semifinalist 3", winner: null },
                                player2: { id: 4, name: "semifinalist 4", winner: null }
                            }
                        ]
                    },
                    {
                        games: [
                            {
                                player1: { id: 1, name: "finalist 1", winner: null },
                                player2: { id: 2, name: "finalist 2", winner: null }
                            },
                        ]
                    },
                ]
            };
        }
    };
</script>