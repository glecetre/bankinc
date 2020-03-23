<template>
    <button
        @click="click"
        class="
            px-4 py-2
            rounded-full
            uppercase font-semibold tracking-wide font-display"
        :class="{
            'text-primary-700 bg-transparent hover:bg-primary-50': isSecondary,
            'text-white bg-primary-700': !isSecondary
        }"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
    @Prop(Boolean) isSecondary?: boolean;
    
    @Emit()
    click() {
        return;
    }
}
</script>
