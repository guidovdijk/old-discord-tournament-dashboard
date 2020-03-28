<template>
  <div class="columns is-multiline">
    <div class="column is-4">
      <charts
        v-if="this.loaded"
        :data="this.data"
        :chart="'line-chart'"
        :title="'Discord user growth'"
      />
    </div>
    <div class="column is-4">
      <charts
        v-if="this.loaded"
        :data="this.data2"
        :chart="'bar-chart'"
        :title="'Gender distribution'"
      />
    </div>
    <div class="column is-4">
      <charts
        v-if="this.loaded"
        :data="this.data"
        :chart="'line-chart'"
        :title="'Discord user growth'"
      />
    </div>
    <div class="column is-4">
      <charts
        v-if="this.loaded"
        :data="this.data"
        :chart="'bar-chart'"
        :title="'Discord user growth'"
      />
    </div>
  </div>
</template>

<script>
import Charts from "@/components/charts/Charts";

export default {
  components: {
    Charts
  },
  name: "Dashboard",
  data() {
    return {
      loaded: false,
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Discord users per month",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      data2: {
        labels: ["Man", "Woman", "Rather not say"],
        datasets: [
          {
            label: "Gender distribution",
            data: [20, 12, 5]
          }
        ]
      }
    };
  },
  mounted() {
    this.loaded = true;
  }
};
</script>