<template>
  <b-steps
    :animated="true"
    :has-navigation="true"
    size="is-small"
    icon-prev="chevron-left"
    icon-next="chevron-right"
  >
    <b-step-item label="General Information">
      <div class="box">
        <b-field label="Tournament name">
          <b-input placeholder="Tournament name.."></b-input>
        </b-field>
        <b-field label="Tournament Type">
          <b-select :placeholder="this.tournmamentType[0]">
            <option
              v-for="(data, index) in this.tournmamentType"
              :value="data"
              :key="index"
            >{{ data }}</option>
          </b-select>
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
      </div>
    </b-step-item>

    <b-step-item label="Dates">
      <div class="box">
        <b-field label="Tournament sign-up end date">
          <b-datetimepicker
            placeholder="Date until people can sign up..."
            icon="calendar-today"
            editable
          ></b-datetimepicker>
        </b-field>
        <b-field label="Tournament start date">
          <b-datetimepicker
            placeholder="Tournament starting date..."
            icon="calendar-today"
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
            <strong></strong>
          </li>
          <li>
            Number of teams:
            <strong></strong>
          </li>
          <li>
            Number of players per team:
            <strong></strong>
          </li>
          <li>
            Sign-up end date:
            <strong></strong>
          </li>
          <li>
            Tournament starting date:
            <strong></strong>
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
            @click.prevent="next.action"
          >Next</b-button>
        </template>
        <template v-else>
          <b-button type="is-primary" icon-right="arrow-right" :disabled="false">Create</b-button>
        </template>
      </div>
    </template>
  </b-steps>
</template>
<script>
export default {
  name: "Create",
  data() {
    return {
      tournmamentType: [
        "Single Elimination",
        "Double Elimination",
        "Round Robin"
      ],
      numberOfTeams: {
        value: [1, 18],
        max: 30,
        min: 3
      },
      numberOfPlayer: {
        value: [1, 4],
        max: 10,
        min: 1
      }
    };
  },
  computed: {}
};
</script>