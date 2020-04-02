<template>
  <div>
    <b-table :data="tournaments" hoverable class="has-border-spacing no-header-background">
      <template slot-scope="props">
        <b-table-column field="name" label="Tournament name">
          {{
          props.row.name
          }}
        </b-table-column>

        <b-table-column field="type" label="Type">
          {{
          props.row.type
          }}
        </b-table-column>

        <b-table-column field="startDate" label="Start Date">
          {{
          props.row.startDate
          }}
        </b-table-column>

        <b-table-column field="status" label="Status" class="is-v-centered" centered>
          <b-tooltip
            :label="props.row.status ? 'Tournament is open' : 'Tournament is closed'"
            position="is-right"
            class="is-center has-tag"
            animated
            type="is-dark"
          >
            <b-tag :class="getTournamentStatusStyle(props.row.status)" class="is-circle" rounded></b-tag>
          </b-tooltip>
        </b-table-column>

        <b-table-column field="startDate" label=" ">
          <b-button
            type="is-primary"
            size="is-small"
            :disabled="!props.row.status"
            @click="goToDetailPage(props.row.id)"
          >play along</b-button>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import { db } from "@/main";

export default {
  name: "ListOverview",
  data() {
    return {
      tournaments: []
    };
  },
  beforeMount() {
    this.getAllTournaments();
  },
  computed: {},
  methods: {
    getTournamentStatusStyle(status) {
      return status ? "is-primary" : "is-danger";
    },
    goToDetailPage(id) {
      this.$router.push({ name: "Details", params: { id: id } });
    },
    getAllTournaments() {
      const currentDate = new Date().valueOf();

      db.collection("tournament")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const data = doc.data();

            const date = new Date(data.startDate.seconds * 1000);
            data.status = currentDate < date;

            data.startDate = this.dateFormatter(date);

            data.signupDate = this.dateFormatter(
              new Date(data.signupDate.seconds * 1000)
            );
            data.id = doc.id;
            this.tournaments.push(data);
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
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
    }
  }
};
</script>
