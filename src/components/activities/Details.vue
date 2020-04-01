<template>
  <section>
    <div class="columns is-multiline">
      <div class="column is-8">
        <div class="column-header is-space-between">
          <p class="title is-4">
            Participants ({{ this.participants.length }})
          </p>
          <b-input
            v-model="searchPlayer"
            placeholder="Search for player..."
            icon="magnify"
          ></b-input>
        </div>
        <b-table
          :data="filterByTerm"
          :columns="columns"
          striped
          class
        ></b-table>
      </div>
      <div class="column">
        <p class="title is-4">Tournament Details</p>
        <div class="box has-background-dark">
          <form>
            <b-field label="Tournament name">
              <b-input placeholder="Tournament1"></b-input>
            </b-field>
            <b-field label="Tournament Type">
              <b-select :placeholder="this.tournmamentType[0]">
                <option
                  v-for="(data, index) in this.tournmamentType"
                  :value="data"
                  :key="index"
                  >{{ data }}</option
                >
              </b-select>
            </b-field>
            <b-field label="Tournament sign-up end date">
              <b-datetimepicker
                placeholder="22/04/2020 18:00:00"
                icon="calendar-today"
                :focusable="false"
              ></b-datetimepicker>
            </b-field>
            <b-field label="Tournament start date">
              <b-datetimepicker
                placeholder="22/04/2020 18:00:00"
                icon="calendar-today"
                :focusable="false"
              ></b-datetimepicker>
            </b-field>
            <b-field label="Number of teams">
              <b-slider
                v-model="numberOfTeams.value"
                :min="numberOfTeams.min"
                :max="numberOfTeams.max"
                :step="1"
                ticks
              ></b-slider>
            </b-field>
            <b-field label="Number of players per team">
              <b-slider
                v-model="numberOfPlayer.value"
                :min="numberOfPlayer.min"
                :max="numberOfPlayer.max"
                :step="1"
                ticks
              ></b-slider>
            </b-field>

            <div class="steps-navigation">
              <b-button type="is-primary">Save changes</b-button>
              <b-button
                label="Reset"
                outlined
                inverted
                type="is-grey-light"
              ></b-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Details",
    props: ["data", "teams"],
    data() {
      return {
        maxTeamSize: 5,
        numberOfTeams: {
          value: [1, 18],
          max: 30,
          min: 3
        },
        numberOfPlayer: {
          value: [1, 4],
          max: 10,
          min: 1
        },
        searchPlayer: "",
        tournmamentType: [
          "Single Elimination",
          "Double Elimination",
          "Round Robin"
        ],
        participants: [],
        // data: [
        //   {
        //     league_name: "Jesse",
        //     discord_name: "Simmons",
        //     team_name: "Team 1",
        //     team_size: 4
        //   },
        //   {
        //     league_name: "John",
        //     discord_name: "Jacobs",
        //     team_name: "Team 2",
        //     team_size: 5
        //   },
        //   {
        //     league_name: "Tina",
        //     discord_name: "Gilbert",
        //     team_name: "Team 3",
        //     team_size: 2
        //   },
        //   {
        //     league_name: "Clarence",
        //     discord_name: "Flores",
        //     team_name: "Team 4",
        //     team_size: 1
        //   },
        //   {
        //     league_name: "Anne",
        //     discord_name: "Lee",
        //     team_name: "Team 5",
        //     team_size: 2
        //   }
        // ],
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
      this.getTeamSize();
      this.createParticipantsList();
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
      getTeamSize() {
        // console.log(this.teams);
        // this.data.forEach(data => {
        //   data.team_size = `${data.team_size}/${this.maxTeamSize}`;
        // });
      }
    }
  };
</script>
