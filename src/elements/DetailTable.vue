<template>
  <section>
    <b-field grouped group-multiline>
      <div
        v-for="(column, index) in columnsVisible"
        :key="index"
        class="control"
      >
        <b-checkbox v-model="column.display">
          {{ column.title }}
        </b-checkbox>
      </div>
    </b-field>

    <b-table
      :data="data"
      ref="table"
      detailed
      striped
      custom-detail-row
      detail-key="name"
      :show-detail-icon="true"
    >
      <template slot-scope="props">
        <b-table-column
          field="name"
          :visible="columnsVisible['name'].display"
          :label="columnsVisible['name'].title"
          sortable
        >
          {{ props.row.name }}
        </b-table-column>

        <b-table-column
          field="wins"
          :visible="columnsVisible['wins'].display"
          :label="columnsVisible['wins'].title"
          sortable
        >
          {{ props.row.wins }}
        </b-table-column>

        <b-table-column
          field="losses"
          :visible="columnsVisible['losses'].display"
          :label="columnsVisible['losses'].title"
          sortable
        >
          {{ props.row.losses }}
        </b-table-column>

        <b-table-column
          :visible="columnsVisible['percentage'].display"
          :label="columnsVisible['percentage'].title"
        >
          <span
            :class="[
              'tag',
              { 'is-danger': props.row.wins / props.row.losses <= 0.45 },
              { 'is-success': props.row.wins / props.row.losses > 0.45 }
            ]"
          >
            {{ Math.round((props.row.wins / props.row.losses) * 100) }}%
          </span>
        </b-table-column>
        <b-table-column :label="' '" />
      </template>

      <template slot="detail" slot-scope="props">
        <tr
          v-for="item in props.row.items"
          :key="item.name"
          class="table--detail__child"
        >
          <td></td>

          <td v-show="columnsVisible['name'].display">{{ item.name }}</td>
          <td v-show="columnsVisible['wins'].display">{{ item.wins }}</td>
          <td v-show="columnsVisible['losses'].display">{{ item.losses }}</td>
          <td v-show="columnsVisible['percentage'].display">
            <span
              :class="[
                'tag',
                { 'is-danger': item.wins / item.losses <= 0.45 },
                { 'is-success': item.wins / item.losses > 0.45 }
              ]"
            >
              {{ Math.round((item.wins / item.losses) * 100) }}%
            </span>
          </td>
          <td align="right">
            <div class="buttons is-right">
              <b-button
                @click="updateModalData(item)"
                size="is-small"
                label=""
                type="is-grey-light"
                icon-right="settings"
              ></b-button>
              <b-button
                size="is-small"
                label=""
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
  import ModalForm from "./ModalForm";
  export default {
    name: "DetailTable",
    components: {
      ModalForm
    },
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
            name: "Board Games",
            wins: 131,
            losses: 301,
            items: [
              {
                name: "Monopoly",
                wins: 57,
                losses: 100
              },
              {
                name: "Scrabble",
                wins: 23,
                losses: 84
              },
              {
                name: "Chess",
                wins: 37,
                losses: 61
              },
              {
                name: "Battleships",
                wins: 14,
                losses: 56
              }
            ]
          },
          {
            name: "Jigsaws & Puzzles",
            wins: 88,
            losses: 167,
            items: [
              {
                name: "World Map",
                wins: 31,
                losses: 38
              },
              {
                name: "London",
                wins: 23,
                losses: 29
              },
              {
                name: "Sharks",
                wins: 20,
                losses: 44
              },
              {
                name: "Disney",
                wins: 14,
                losses: 56
              }
            ]
          },
          {
            name: "Books",
            wins: 434,
            losses: 721,
            items: [
              {
                name: "Hamlet",
                wins: 101,
                losses: 187
              },
              {
                name: "The Lord Of The Rings",
                wins: 85,
                losses: 156
              },
              {
                name: "To Kill a Mockingbird",
                wins: 78,
                losses: 131
              },
              {
                name: "Catch-22",
                wins: 73,
                losses: 98
              },
              {
                name: "Frankenstein",
                wins: 51,
                losses: 81
              },
              {
                name: "Alice's Adventures In winsderland",
                wins: 46,
                losses: 68
              }
            ]
          }
        ],
        columnsVisible: {
          name: { title: "Team Name", display: true },
          wins: { title: "Rounds Won", display: true },
          losses: { title: "Rounds Lost", display: true },
          percentage: { title: "Win Percentage", display: true }
        },
        columnsPlayer: [
          {
            field: "name",
            label: "Player Name"
          },
          {
            field: "wins",
            label: "Total Wins"
          },
          {
            field: "losses",
            label: "Total Losses"
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
    }
  };
</script>
