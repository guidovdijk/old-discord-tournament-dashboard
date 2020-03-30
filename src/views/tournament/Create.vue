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
          <b-select v-model="tournament[0].type" placeholder="Pick a tournament type">
            <option v-for="(data, index) in tournamentList" :value="index" :key="index">{{ data }}</option>
          </b-select>
        </b-field>
        <b-field label="Number of teams (min, max)">
          <b-slider
            v-model="tournament[0].numberOfTeams"
            :min="numberOfTeams.min"
            :max="numberOfTeams.max"
            :step="1"
            ticks
          ></b-slider>
        </b-field>
        <b-field label="Number of players per team (min, max)">
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
            :datetime-formatter="this.dateFormatter"
            :datetime-parser="this.dateFormatter"
            v-model="tournament[1].signupDate"
          ></b-datetimepicker>
        </b-field>
        <b-field label="Tournament start date">
          <b-datetimepicker
            placeholder="Tournament starting date..."
            :datetime-formatter="this.dateFormatter"
            :datetime-parser="this.dateFormatter"
            icon="calendar-today"
            v-model="tournament[1].startDate"
          ></b-datetimepicker>
        </b-field>
      </div>
    </b-step-item>

    <b-step-item label="Finish">
      <div class="box" v-if="activeStep == 2">
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
            <strong>{{this.dateFormatter(tournament[1].signupDate)}}</strong>
          </li>
          <li>
            Tournament starting date:
            <strong>{{this.dateFormatter(tournament[1].startDate)}}</strong>
          </li>
        </ul>
      </div>
    </b-step-item>

    <template slot="navigation" slot-scope="{previous, next}">
      <div class="steps-navigation box has-background-transparent">
        <p class="has-text-danger">
          <span v-show="showErrorMessage">Please fill in all the inputs</span>
        </p>
        <div class="buttons">
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
            <b-button
              type="is-primary"
              icon-right="arrow-right"
              :disabled="false"
              @click="createTournament"
            >Create</b-button>
          </template>
        </div>
      </div>
    </template>
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
          type: null,
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

  methods: {
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
    createTournament() {
      const td = Object.assign(this.tournament[0], this.tournament[1]);

      db.collection("tournament")
        .doc()
        .set({
          name: td.name,
          type: td.type,
          numberOfTeams: td.numberOfTeams,
          numberOfPlayers: td.numberOfPlayers,
          signupDate: td.signupDate,
          startDate: td.startDate
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