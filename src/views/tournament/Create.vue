<template>
  <b-steps
    :animated="true"
    :has-navigation="true"
    size="is-small"
    icon-prev="chevron-left"
    icon-next="chevron-right"
    v-model="activeStep"
  >
    <b-step-item label="General Information">
      <div class="box">
        <b-field label="Tournament name">
          <b-input v-model="tournament[0].name" placeholder="Tournament name.."></b-input>
        </b-field>
        <b-field label="Tournament Type">
          <b-select v-model="tournament[0].selectedIndex" :placeholder="tournamentList[0]">
            <option v-for="(data, index) in tournamentList" :value="index" :key="index">{{ data }}</option>
          </b-select>
        </b-field>
        <b-field label="Number of teams">
          <b-slider
            v-model="tournament[0].numberOfTeams"
            :min="numberOfTeams.min"
            :max="numberOfTeams.max"
            :step="1"
            ticks
          ></b-slider>
        </b-field>
        <b-field label="Number of players per team">
          <b-slider
            v-model="tournament[0].numberOfPlayers"
            :min="numberOfPlayers.min"
            :max="numberOfPlayers.max"
            :step="1"
            ticks
          ></b-slider>
        </b-field>
      </div>
    </b-step-item>

    <b-step-item label="Dates">
      <div class="box">
        <b-field label="Tournament sign-up end date">
          <b-datetimepicker
            placeholder="Date until people can sign up..."
            icon="calendar-today"
            v-model="tournament[1].signupDate"
            editable
          ></b-datetimepicker>
        </b-field>
        <b-field label="Tournament start date">
          <b-datetimepicker
            placeholder="Tournament starting date..."
            icon="calendar-today"
            v-model="tournament[1].startDate"
            editable
          ></b-datetimepicker>
        </b-field>
      </div>
    </b-step-item>

    <b-step-item label="Finish">
      <div class="box">
        <ul class>
          <li>
            Tournament Name:
            <strong>{{tournament[0].name}}</strong>
          </li>
          <li>
            Number of teams (min, max):
            <strong>{{tournament[0].numberOfTeams}}</strong>
          </li>
          <li>
            Number of players per team (min, max):
            <strong>{{tournament[0].numberOfPlayers}}</strong>
          </li>
          <li>
            Sign-up end date:
            <strong>{{tournament[1].signupDate}}</strong>
          </li>
          <li>
            Tournament starting date:
            <strong>{{tournament[1].startDate}}</strong>
          </li>
        </ul>
      </div>
    </b-step-item>

    <template slot="navigation" slot-scope="{previous, next}">
      <div class="steps-navigation box has-background-transparent">
        <b-button
          type="is-grey-light"
          icon-left="arrow-left"
          :disabled="previous.disabled"
          @click.prevent="previous.action"
        >Previous</b-button>
        <template v-if="!next.disabled">
          <b-button
            type="is-primary"
            icon-right="arrow-right"
            :disabled="false"
            @click.prevent="validate(next)"
          >Next</b-button>
        </template>
        <template v-else>
          <b-button type="is-primary" icon-right="arrow-right" :disabled="false">Create</b-button>
        </template>
      </div>
    </template>
    <p class="has-text-danger" v-show="showErrorMessage">Please fill in all the inputs</p>
  </b-steps>
</template>
<script>
import { db } from "@/main";

export default {
  name: "Create",
  data() {
    return {
      activeStep: 0,
      showErrorMessage: false,
      tournament: [
        {
          name: null,
          selectedIndex: 0,
          numberOfTeams: [1, 18],
          numberOfPlayers: [1, 4]
        },
        {
          signupDate: null,
          startDate: null
        }
      ],
      tournamentList: [
        "Single Elimination",
        "Double Elimination",
        "Round Robin"
      ],
      numberOfTeams: {
        max: 30,
        min: 3
      },
      numberOfPlayers: {
        max: 10,
        min: 1
      }
    };
  },
  mounted() {
    // this.test();
  },
  methods: {
    test() {
      const teamsCollection = db.collection("teams");
      teamsCollection.get().then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();

          console.log(data);
        });
      });
    },
    validate(next) {
      const inputIsNull = Object.values(this.tournament[this.activeStep]).some(
        o => o === null
      );

      if (inputIsNull) {
        this.showErrorMessage = true;
      } else {
        this.showErrorMessage = false;
        next.action();
      }
    }
  }
};
</script>