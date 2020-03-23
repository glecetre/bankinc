<template>
    <Card>
        <table class="w-full">
            <thead>
                <tr>
                    <th>Jour</th>
                    <th colspan="2">Dépenses</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="day in daysInMonth" :key="day">
                    <td>{{ day }}</td>
                    <td>0,00 €</td>
                    <td>5,20 + 3,80</td>
                </tr>
            </tbody>
        </table>
    </Card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import Card from "./Card.vue";
import { Spending } from "../models/Spending";

@Component({
    components: {
        Card,
    }
})
export default class VerticalCalendar extends Vue {
    // @Prop({ type: Array, required: true }) spendings!: Spending[];

    get daysInMonth() {
        return 29;
    }
}
</script>