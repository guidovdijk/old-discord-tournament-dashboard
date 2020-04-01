<template>
  <section>
    <b-table
      :data="teams"
      ref="table"
      detailed
      striped
      custom-detail-row
      detail-key="teamName"
      :show-detail-icon="true"
    >
      <template slot-scope="props">
        <b-table-column field="teamName" label="Team name" sortable>{{
          props.row.teamName
        }}</b-table-column>

        <b-table-column field="won" label="Wins" sortable>{{
          props.row.won
        }}</b-table-column>

        <b-table-column field="lost" label="Lost" sortable>{{
          props.row.lost
        }}</b-table-column>

        <b-table-column label="win percentage">
          <span
            :class="[
              'tag',
              {
                'is-danger':
                  props.row.won / (props.row.lost + props.row.lost) <= 0.5
              },
              {
                'is-primary':
                  props.row.won / (props.row.lost + props.row.lost) > 0.5
              }
            ]"
            >{{
              Math.round(
                (props.row.won / (props.row.lost + props.row.lost)) * 100
              )
            }}%</span
          >
        </b-table-column>
        <b-table-column>
          <b-button
            v-if="!isInTeam(props) || teamIsFull(props)"
            label="Join Team"
            type="is-primary"
            size="is-small"
            @click="updateTeams(props)"
          ></b-button>
          <p v-else>You are in this team</p>
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <tr
          v-for="item in props.row.players"
          :key="item.teamName"
          class="table--detail__child"
        >
          <td></td>

          <td>{{ item }}</td>
          <td></td>
          <td></td>
          <td align="right">
            <div class="buttons is-right">
              <b-button
                @click="updateModalData(item)"
                size="is-small"
                label
                type="is-grey-light"
                icon-right="settings"
              ></b-button>
              <b-button
                size="is-small"
                label
                outlined
                type="is-danger"
                icon-right="delete"
              ></b-button>
            </div>
          </td>
        </tr>
      </template>
    </b-table>

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <ModalForm :modal="modal" :activeColumns="columnsPlayer" />
    </b-modal>
  </section>
</template>

<script>
  import { db, test } from "@/main";
  import ModalForm from "@/elements/ModalForm";

  export default {
    name: "Teams",
    props: ["data", "teams"],
    data() {
      return {
        placeholderName: "greater_virginia 8",
        ref: null,
        modal: {
          title: String,
          detail: "Change player with another available player",
          active: {
            player: Object
          }
        },
        columnsPlayer: [
          {
            field: "name",
            label: "Player Name"
          },
          {
            field: "won",
            label: "Total Wins"
          },
          {
            field: "lost",
            label: "Total lost"
          }
        ],
        isComponentModalActive: false
      };
    },
    components: {
      ModalForm
    },
    mounted() {
      this.ref = db
        .collection("tournament")
        .doc(this.$route.params.id)
        .collection("teams");
    },
    methods: {
      isInTeam(props) {
        // console.log(props.row.players.includes(this.placeholderName));
        return props.row.players.includes(this.placeholderName);
      },
      teamIsFull(props) {
        // console.log(props);
      },
      updateTeams(props) {
        this.removeplayerFromTeam(props);
      },
      removeplayerFromTeam(props) {
        this.ref
          .where("players", "array-contains", this.placeholderName)
          .limit(1)
          .get()
          .then(query => {
            if (query.empty) {
              return;
            }
            const teamDoc = query.docs[0];
            const teamRef = teamDoc.ref;
            teamRef.update({
              players: test.arrayRemove(this.placeholderName)
            });
          })
          .then(() => {
            this.joinTeam(props);
          });
      },
      joinTeam(props) {
        console.log({
          props: props,
          data: this.data,
          param: this.$route.params.id
        });

        const docData = this.ref.doc(props.row.id);

        const playersRef = docData.update({
          players: test.arrayUnion("greater_virginia 8")
        });
      },
      updateModalData(item) {
        this.isComponentModalActive = true;
        this.modal.title = "Selected player: " + item.name;
        this.modal.active.player = item;
      }
    }
  };
</script>
