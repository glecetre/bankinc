<template>
  <header class="mb-8 p-4 flex justify-between">
    <h1 class="text-4xl bg-darkGray font-bold leading-none text-shadow">
      Bank Inc<span class="text-primary-500">.</span>
    </h1>
    <ul v-if="navigation">
      <li
        :key="navigationItem.url"
        v-for="navigationItem in navigation"
        class="group inline-block text-darkGray font-bold mr-4"
      >
        <a :href="`#${navigationItem.url}`">{{ navigationItem.displayName }}</a>
        <div
          class="
            w-8 group-active:w-full
            h-1
            mx-auto mt-1
            rounded-full
            transition-all duration-200"
          :class="activeNavigationItem === navigationItem.url
            ? 'bg-primary-500'
            : 'bg-white group-hover:bg-darkGray'"
        />
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Navigation } from "../models/Navigation";

@Component
export default class Header extends Vue {
  @Prop({ type: Array, required: false }) readonly navigation!: Navigation[];
  @Prop(String) readonly activeNavigationItem!: string;
}
</script>
