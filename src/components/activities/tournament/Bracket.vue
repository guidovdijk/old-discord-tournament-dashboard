<template>
    <div class="tournament-wrapper" v-if="recursiveBracket">
        <bracket-node
            :bracket-node="recursiveBracket"
            @onSelectedPlayer="highlightPlayer"
            @onDeselectedPlayer="unhighlightPlayer"
            :highlighted-player-id="highlightedPlayerId"
        >
            <template #player="{ player }">
                <slot name="player" :player="player" />
            </template>
            <template #player-extension-bottom="{ match }">
                <slot name="player-extension-bottom" :match="match" />
            </template>
        </bracket-node>
    </div>
</template>

<script>
    import BracketNode from "./BracketNode";
    import recursiveBracket from "./RecursiveBracket.js";
    export default {
        name: "bracket",
        components: {
            "bracket-node": BracketNode
        },
        props: ["rounds"],
        data() {
            return {
                highlightedPlayerId: null
            };
        },
        computed: {
            recursiveBracket() {
                return recursiveBracket.transform(this.rounds);
            }
        },
        methods: {
            highlightPlayer(id) {
                this.highlightedPlayerId = id;
            },
            unhighlightPlayer() {
                this.highlightedPlayerId = null;
            }
        }
    };
</script>
