<template>
    <table class="table is-striped is-fullwidth">
        <thead>
            <tr>
                <th>Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th class="table__details">Details</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="n" v-for="n in 50">
                <td>Curry Crew</td>
                <td>5</td>
                <td>2</td>
                <td>
                    details
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'Teams',
}
</script>