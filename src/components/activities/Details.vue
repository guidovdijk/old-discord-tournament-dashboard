<template>
  <section>
    <div class="columns is-multiline">
      <div class="column is-8">
        <div class="column-header is-space-between">
          <p class="title is-4">Participants ({{ this.participants.length }})</p>
          <b-input v-model="searchPlayer" placeholder="Search for player..." icon="magnify"></b-input>
        </div>
        <b-table :data="filterByTerm" :columns="columns" striped class></b-table>
      </div>
      <div class="column">
        <p class="title is-4">Tournament Details</p>
        <div class="box has-background-dark" v-if="this.details">
          <form @submit.prevent="changeDetails">
            <b-field label="Tournament name">
              <b-input placeholder="Tournament name..." v-model="details.name"></b-input>
            </b-field>
            <b-field label="Tournament Type">
              <b-select v-model="details.type">
                <option
                  v-for="(data, index) in this.tournmamentType"
                  :value="data"
                  :key="index"
                >{{ data }}</option>
              </b-select>
            </b-field>
            <b-field label="Tournament sign-up end date">
              <b-datetimepicker
                placeholder="22/04/2020 18:00:00"
                v-model="details.signupDate"
                :datetime-formatter="this.dateFormatter"
                icon="calendar-today"
                :focusable="false"
              ></b-datetimepicker>
            </b-field>
            <b-field label="Tournament start date">
              <b-datetimepicker
                placeholder="22/04/2020 18:00:00"
                icon="calendar-today"
                v-model="details.startDate"
                :datetime-formatter="this.dateFormatter"
                :focusable="false"
              ></b-datetimepicker>
            </b-field>
            <b-field label="Number of teams">
              <b-slider
                :min="numberOfTeams.min"
                :max="numberOfTeams.max"
                :step="1"
                v-model="details.numberOfTeams"
                ticks
              ></b-slider>
            </b-field>
            <b-field label="Number of players per team">
              <b-slider
                :min="numberOfPlayers.min"
                :max="numberOfPlayers.max"
                :step="1"
                v-model="details.numberOfPlayers"
                ticks
              ></b-slider>
            </b-field>

            <div class="steps-navigation">
              <div class="buttons">
                <b-button tag="input" type="is-primary" native-type="submit" value="Save changes" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from "@/main";

export default {
  name: "Details",
  props: ["data", "teams"],
  data() {
    return {
      maxTeamSize: 5,
      numberOfTeams: {
        value: [0, 0],
        max: 15,
        min: 3
      },
      numberOfPlayers: {
        value: [0, 0],
        max: 15,
        min: 1
      },
      details: this.data,
      searchPlayer: "",
      tournmamentType: [
        "Single Elimination",
        "Double Elimination",
        "Round Robin"
      ],
      participants: [],
      columns: [
        {
          field: "name",
          label: "Name",
          sortable: true
        },
        {
          field: "team",
          label: "Team Name",
          sortable: true
        },
        {
          field: "teamSize",
          label: "Team Size",
          sortable: true
        }
      ]
    };
  },
  computed: {
    filterByTerm() {
      return this.participants.filter(participant => {
        return participant.name.toLowerCase().includes(this.searchPlayer);
      });
    }
  },
  mounted() {
    this.createParticipantsList();
    this.createTournamentDetails();
  },
  methods: {
    createParticipantsList() {
      const allParticipants = [];

      this.teams.map(team => {
        team.players.map(player => {
          allParticipants.push({
            name: player,
            team: team.teamName,
            teamSize: team.players.length
          });
        });
      });
      this.participants = allParticipants;
    },

    createTournamentDetails() {
      this.numberOfTeams.value = this.data.numberOfTeams;
      this.numberOfPlayers.value = this.data.numberOfPlayers;
    },
    dateFormatter(dt) {
      return dt.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
      });
    },
    changeDetails() {
      const tournamentData = db
        .collection("tournament")
        .doc(this.$route.params.id);

      tournamentData.update(this.details);
    }
  }
};
</script>
