<template>
  <div id="app">
    <Layout>
      <template v-slot:header>
        <Header :navigation="navigation" :activeNavigationItem="page" />
      </template>

      <template v-slot:hero-content>
        <h2 class="mb-2 text-2xl font-bold text-white">Bonjour, Georges</h2>
        <p>
          Vous pouvez consulter vos comptes personnels, vos dernières opérations
           et gérer votre budget.
        </p>
      </template>

      <template v-slot:content>
        <div class="m-4">
          <template v-if="page === 'accounts'">
            <Accounts />
          </template>
          <template v-else-if="page === 'budget'">
            <Budget :plannedOperations="budgetOperations" />
          </template>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Accounts from "./components/Accounts.vue";
import Budget from "./components/Budget.vue";

import { Navigation } from './models/Navigation';
import { BudgetizedOperation } from './models/BudgetizedOperation';

@Component({
  components: {
    Header,
    Layout,
    Accounts,
    Budget,
  }
})
export default class App extends Vue {
  page: string = window.location.hash?.split("#")?.[1] || "accounts";

  budgetOperations: BudgetizedOperation[] = [
    {
      label: "Salaire",
      date: undefined,
      amount: 2430,
    },
    {
      label: "Avance Thibaud",
      date: new Date(2020, 2, 5),
      amount: 1200,
    },
    {
      label: "Loyer",
      date: new Date(2020, 2, 6),
      amount: -675,
    },
    {
      label: "Voiture",
      date: new Date(2020, 2, 5),
      amount: -260,
    },
    {
      label: "Autoroute",
      date: undefined,
      amount: -50,
    },
    {
      label: "Essence",
      date: undefined,
      amount: -60,
    },
    {
      label: "Assurance voiture",
      date: new Date(2020, 2, 5),
      amount: -70,
    },
    {
      label: "Assurance habitation",
      date: new Date(2020, 2, 4),
      amount: -10,
    },
    {
      label: "LLD",
      date: undefined,
      isSavings: true,
      amount: -25,
    },
    {
      label: "Assurance vie",
      date: undefined,
      isSavings: true,
      amount: -50,
    },
    {
      label: "Remboursement Thibaud",
      date: undefined,
      amount: -1200,
    },
  ]

  navigation: Navigation[] = [
    {
      displayName: "Comptes",
      url: "accounts",
    },
    {
      displayName: "Budget",
      url: "budget",
    },
    {
      displayName: "Paramètres",
      url: "settings",
    }
  ];

  mounted() {
    window.addEventListener("hashchange", this.updatePage);
  }

  destroyed() {
    window.removeEventListener("hashchange", this.updatePage);
  }

  private updatePage() {
    this.page = window.location.hash?.split("#")?.[1] || "accounts";
  }
}
</script>
