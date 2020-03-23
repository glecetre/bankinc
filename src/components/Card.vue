<template>
    <div class="m-8 p-6 rounded-lg bg-white shadow-neumorphism">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {}
</script>
