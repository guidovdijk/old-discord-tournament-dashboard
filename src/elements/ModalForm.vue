<template>
    <form action="">
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title"><strong>{{modal.title}}</strong></p>
            </header>
            <section class="modal-card-body">
                <b-field :label="modal.detail">
                    <b-select placeholder="Select a player" v-model="activeSearchedPlayerIndex">
                        <option
                            v-for="(option, index) in searchedPlayerData"
                            :value="index"
                            :key="index"
                        >
                            {{ option.name }}
                        </option>
                    </b-select>
                </b-field>

                <div class="field">
                    <b-field label="Active Player:">
                        <b-table narrowed :data="activePlayerData" :columns="activeColumns"></b-table>
                    </b-field>
                </div>

                <div class="field" v-show="activeSearchedPlayerIndex !== null">
                    <b-field label="Searched Player:">
                        <b-table narrowed :data="activeSearchedPlayer" :columns="activeColumns"></b-table>
                    </b-field>
                </div>
            </section>
            <footer class="modal-card-foot is-even">
                <p class="is-size-6">
                    <span v-if="activeSearchedPlayerIndex !== null">
                        Do you want to change <br/>player: "<strong>{{this.activePlayerData[0].name}}</strong>" with player: "<strong>{{activeSearchedPlayer[0].name}}</strong>"?
                    </span>
                </p>
                <div class="buttons">
                    <b-button label="Cancel" outlined inverted type="is-grey-light" @click="$parent.close()"></b-button>
                    <b-button label="Change Player" type="is-primary"></b-button>
                </div>
            </footer>
        </div>
    </form>
</template>
<script>
export default {
    name: 'ModalForm',
    props: {
        activeColumns: { type: Array },
        modal: {
            active: { type: Object },
            title: {
                type: String
            }, 
            detail: {
                type: String
            },
        }
    },
    data(){
        return {
            activePlayerData: [],
            columns: [],
            activeSearchedPlayerIndex: null,
            searchedPlayerData: [
                {
                    name: 'Test',
                    wins: 12,
                    losses: 7
                },
                {
                    name: 'Test 2',
                    wins: 16,
                    losses: 9
                },
                {
                    name: 'Test 3',
                    wins: 5,
                    losses: 9
                },
            ]
        }
    },
    mounted() {
        this.activePlayerData = Object.values(this.modal.active);
        this.columns = Object.keys(Object.assign({}, ...this.activeColumns));
    },
    computed: {
        activeSearchedPlayer(){
            return [this.searchedPlayerData[this.activeSearchedPlayerIndex]];
        }
    }
}
</script>