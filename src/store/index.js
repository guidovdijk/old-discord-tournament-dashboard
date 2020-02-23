import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activity: 'Teams',
    tournament: {
      roundWinners: new Array(4),
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
      ],
    },
  },
  mutations: {
    changeActivity (state, payload) {
      state.activity = payload.activity;
    },
    changeTournamentRoundWinner(state, payload){
      state.tournament.rounds = payload.rounds;
    }
  },
  actions: {
    changeActivity (context, payload) {
        context.commit("changeActivity", payload);
    },
    changeTournamentRoundWinner (context, payload) {
        context.commit("changeTournamentRoundWinner", payload);
    }
  },
  getters: {
    getActivity: state => {
      return state.activity
    },
    getTournamentRounds: state => {
      return state.tournament.rounds
    },
  }
})
