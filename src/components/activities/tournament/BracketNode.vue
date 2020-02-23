<template>
    <div class="tournament-item" :nextNode="nextNode">
        <div :class="getBracketNodeClass(bracketNode)">
            <game-players
                :bracket-node="bracketNode"
                :nextNode="nextNode"
            >
                <template #player="{ player }">
                    <slot name="player" :player="player" />
                </template>
            </game-players>
        </div>

        <div v-if="bracketNode.games[0] || bracketNode.games[1]" class="tournament-item-children">
            <div class="tournament-item-child" v-if="bracketNode.games[0]">
                <bracket-node
                    :bracket-node="bracketNode.games[0]"
                >
                    <template #player="{ player }">
                        <slot name="player" :player="player" :nextNode="0" />
                    </template>
                </bracket-node>
            </div>

            <div class="tournament-item-child" v-if="bracketNode.games[1]">
                <bracket-node
                    :bracket-node="bracketNode.games[1]"
                >
                    <template #player="{ player }">
                        <slot name="player" :player="player" :nextNode="0"/>
                    </template>
                </bracket-node>
            </div>
        </div>
    </div>
</template>

<script>
    import GamePlayers from "./GamePlayers";
    export default {
        name: "bracket-node",
        components: { GamePlayers },
        props: ["bracketNode", "nextNode"],
        created() {
            console.log(this.bracketNode)
        },
        methods: {
            getBracketNodeClass(bracketNode) {
                if (bracketNode.games[0] || bracketNode.games[1]) {
                    return "tournament-item-parent";
                }
                if (bracketNode.hasParent) {
                    return "tournament-item-child";
                }
                return "";
            },
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
        }
    };
</script>
