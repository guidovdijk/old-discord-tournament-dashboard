<template>
    <div class="tournament-wrapper" v-if="recursiveBracket">
        <bracket-node
            :bracket-node="recursiveBracket"
        >
            <template #player="{ player }">
                <slot name="player" :player="player"/>
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

            };
        },
        computed: {
            recursiveBracket() {
                return recursiveBracket.transform(this.rounds);
            }
        },
        methods: {
        }
    };
</script>
