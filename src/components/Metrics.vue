<template>
    <Card>
        <div class="mb-6 text-darkGray">
            {{ title }}
        </div>
        <div
            v-for="(value, index) in values"
            :key="index"
            class="mt-6"
        >
            <div class="text-2xl text-primary-500 leading-none text-right">
                <i
                    v-if="value.actionIconClass"
                    class="fas mr-1 text-darkGray text-xs cursor-pointer"
                    :class="value.actionIconClass"
                    :title="value.actionIconHint"
                    @click="value.onClick"
                >
                </i>
                <span :title="value.hint">{{ value.value }}</span>
            </div>
            <div v-if="value.caption" class="text-darkGray text-xs text-right">{{ value.caption }}</div>
        </div>
    </Card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import Card from "./Card.vue";

import { MetricsValue } from "../models/MetricsValue";

@Component({
    components: {
        Card,
    }
})
export default class Metrics extends Vue {
    @Prop(String) title!: string;
    @Prop({ type: Array }) values!: MetricsValue[];
}
</script>
