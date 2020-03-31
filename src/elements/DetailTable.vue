<template>
  <section>
    <b-field grouped group-multiline>
      <div v-for="(column, index) in columnsVisible" :key="index" class="control">
        <b-checkbox v-model="column.display">{{ column.title }}</b-checkbox>
      </div>
    </b-field>

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
        <b-table-column
          field="teamName"
          :visible="columnsVisible['teamName'].display"
          :label="columnsVisible['teamName'].title"
          sortable
        >{{ props.row.teamName }}</b-table-column>

        <b-table-column
          field="won"
          :visible="columnsVisible['won'].display"
          :label="columnsVisible['won'].title"
          sortable
        >{{ props.row.won }}</b-table-column>

        <b-table-column
          field="lost"
          :visible="columnsVisible['lost'].display"
          :label="columnsVisible['lost'].title"
          sortable
        >{{ props.row.lost }}</b-table-column>

        <b-table-column
          :visible="columnsVisible['percentage'].display"
          :label="columnsVisible['percentage'].title"
        >
          <span
            :class="[
              'tag',
              { 'is-danger': props.row.won / props.row.lost <= 0.45 },
              { 'is-success': props.row.won / props.row.lost > 0.45 }
            ]"
          >{{ Math.round((props.row.won / props.row.lost) * 100) }}%</span>
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <tr v-for="item in props.row.players" :key="item.teamName" class="table--detail__child">
          <td></td>

          <td v-show="columnsVisible['teamName'].display">{{ item }}</td>
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
              <b-button size="is-small" label outlined type="is-danger" icon-right="delete"></b-button>
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
import ModalForm from "./ModalForm";
export default {
  name: "DetailTable",
  components: {
    ModalForm
  },
  props: ["teams", "loaded"],
  data() {
    return {
      modal: {
        title: String,
        detail: "Change player with another available player",
        active: {
          player: Object
        }
      },
      isComponentModalActive: false,
      data: [
        {
          name: "Books",
          won: 434,
          loss: 721,
          items: [
            {
              name: "Hamlet",
              win: 101,
              loss: 187
            },
            {
              name: "The Lord Of The Rings",
              wins: 85,
              loss: 156
            }
          ]
        }
      ],
      columnsVisible: {
        teamName: { title: "Team Name", display: true },
        won: { title: "Rounds Won", display: true },
        lost: { title: "Rounds Lost", display: true },
        percentage: { title: "Win Percentage", display: true }
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
      showDetailIcon: true
    };
  },
  methods: {
    updateModalData(item) {
      this.isComponentModalActive = true;
      this.modal.title = "Selected player: " + item.name;
      this.modal.active.player = item;
    }
  },
  mounted() {
    console.log(this.teams);
  }
};
</script>
