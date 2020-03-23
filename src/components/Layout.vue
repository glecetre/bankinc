<template>
  <div>
    <slot name="header"/>

    <div class="w-full px-4 py-8 bg-primary-700 text-white">
      <slot name="hero-content"/>
    </div>

    <slot name="content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Layout extends Vue {}
</script>

<style>
body {
  @apply text-darkGray;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-display;
}

.text-shadow {
  color: transparent;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}
</style>
