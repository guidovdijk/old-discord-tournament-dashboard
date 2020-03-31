<template>
  <div>
    <detail-table />
  </div>
</template>

<script>
import DetailTable from "../../elements/DetailTable";

export default {
  name: "Teams",
  props: ["data", "teams"],
  components: {
    "detail-table": DetailTable
  },
  methods: {}
};
</script>