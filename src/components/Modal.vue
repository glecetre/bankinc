<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-transparentWhite">
        <div class="w-1/2 m-auto">
            <Card>
                <h2 class="text-darkGray text-2xl font-bold">
                    <slot name="header"></slot>
                </h2>
                <div>
                    <slot name="content"></slot>
                </div>
                <div class="mt-8 text-right grid gap-2 grid-flow-col">
                    <slot name="actions"></slot>
                </div>
            </Card>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "./Card.vue";

@Component({
    components: {
        Card,
    }
})
export default class Modal extends Vue {}
</script>
