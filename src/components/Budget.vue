<template>
    <div class="">
        <h1 class="text-darkGray text-2xl font-bold">
            Budget
        </h1>

        <Modal v-if="isDailySelfLimitModalDisplayed">
            <template v-slot:header>Limite journalière</template>
            <template v-slot:content>
                Ceci est la limite de dépense quotidienne que vous vous imposez.
            </template>
            <template v-slot:actions>
                <Button @click="toggleDailySelfLimitModal" :isSecondary="true">Annuler</Button>
                <Button @click="toggleDailySelfLimitModal">Valider</Button>
            </template>
        </Modal>

        <div class="flex items-start">
            <Card class="w-5/12 mx-0">
                <table class="table-auto w-full text-darkGray">
                    <thead class="text-left">
                        <tr>
                            <th class="py-2 px-4">Libellé</th>
                            <th class="py-2 px-4 text-center">Date</th>
                            <th class="py-2 px-4"></th>
                            <th class="py-2 px-4 text-right">Somme</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(operation, index) in plannedOperations"
                            :key="index"
                            class="odd:bg-softGray"
                        >
                            <td class="py-2 px-4 rounded-l">{{ operation.label }}</td>
                            <td class="py-2 px-4 text-center">
                                {{ operation.date && shortDateFormatter.format(operation.date) }}
                            </td>
                            <td class="py-2 px-4 text-center">
                                <i
                                    v-if="operation.isSavings"
                                    class="fas fa-piggy-bank"
                                    title="Opération d'épargne"
                                ></i>
                            </td>
                            <td 
                                class="py-2 px-4 rounded-r text-right"
                                :class="operation.amount < 0 ? 'text-red-500' : 'text-green-500'"
                            >
                                {{ currencyFormatter.format(operation.amount) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>

            <div class="w-64">
                <Metrics
                    :title="'Disponibilité'"
                    :values="[{value: currencyFormatter.format(this.balance)}]"
                />

                <Metrics
                    :title="'Budgétisation'"
                    :values="[
                        {
                            caption: 'Pro-rata journalier',
                            value: currencyFormatter.format(this.dailyProRata),
                            hint: 'Votre budget journalier calculé directement depuis le budget mensuel',
                        },
                        {
                            caption: 'Limite journalière',
                            value: currencyFormatter.format(this.dailySelfLimit),
                            hint: 'Limite de dépense journalière imposée par vous-même',
                            onClick: this.toggleDailySelfLimitModal,
                            actionIconClass: 'fa-pen',
                            actionIconHint: 'Modifier la limite journalière',
                        },
                    ]"
                />

                <Metrics
                    :title="'Épargne'"
                    :values="[
                        {
                            caption: 'Surplus mensuel',
                            value: currencyFormatter.format(this.monthlySurplus),
                            hint: 'Prévision d\'épargne minimum selon la limite journalière',
                        },
                        {
                            caption: 'Épargne totale',
                            value: currencyFormatter.format(this.monthlySavings),
                            hint: 'Épargne totale prévue, incluant le surplus et les opérations d\'épargne',
                        },
                    ]"
                />
            </div>

            <VerticalCalendar class="mx-0 flex-grow" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import Button from "./Button.vue";
import Card from "./Card.vue";
import Metrics from "./Metrics.vue";
import Modal from "./Modal.vue";
import VerticalCalendar from "./VerticalCalendar.vue";

import { BudgetizedOperation } from "../models/BudgetizedOperation";

@Component({
    components: {
        Button,
        Card,
        Metrics,
        Modal,
        VerticalCalendar,
    }
})
export default class Budget extends Vue {
    @Prop({ type: Array, required: true }) plannedOperations!: BudgetizedOperation[];

    currencyFormatter = new Intl.NumberFormat("fr-FR", { currency: "EUR", style: "currency" });
    shortDateFormatter = new Intl.DateTimeFormat("fr-FR", {
        month: "long",
        day: "2-digit",
    });

    dailySelfLimit = 0;

    isDailySelfLimitModalDisplayed = false;

    mounted() {
        this.dailySelfLimit = this.dailyProRata;
    }

    get balance() {
        return this.plannedOperations.reduce((balance, operation) => {
            return balance + operation.amount;
        }, 0);
    }

    get dailyProRata() {
        const now = new Date();
        now.setDate(0); // 0 sets the last day of the month
        const daysInCurrentMonth = now.getDate();

        return Math.floor(this.balance / daysInCurrentMonth);
    }

    get monthlySurplus() {
        return this.dailyProRata - this.dailySelfLimit;
    }

    get monthlySavings() {
        // Caution: plannedSavings is a negative amount here
        const plannedSavings = this.plannedOperations.reduce((savings, operation) => {
            if (operation.isSavings) {
                savings += operation.amount
            }

            return savings;
        }, 0);

        return Math.abs(plannedSavings) + this.monthlySurplus;
    }

    toggleDailySelfLimitModal() {
        this.isDailySelfLimitModalDisplayed = !this.isDailySelfLimitModalDisplayed;
    }
}
</script>
