<template>
    <div class="w-full">
        <h1 class="text-darkGray text-2xl font-bold">
            Mes comptes
        </h1>
        <div class="-mx-4 grid grid-cols-4 gap-4">
            <div
                class="relative inline-block h-32 w-48 m-4 rounded-lg bg-white shadow-neumorphism"
            >
                <div class="p-6 text-darkGray leading-none">
                    Compte courant
                </div>
                <div
                    class="absolute bottom-0 right-0 p-6 text-2xl text-primary-500 leading-none"
                >
                    2 435,07
                </div>
            </div>
            <div
                class="relative inline-block h-32 w-48 m-4 rounded-lg bg-white shadow-neumorphism"
            >
                <div class="p-6 text-darkGray leading-none">
                    Livret A
                </div>
                <div
                    class="absolute bottom-0 right-0 p-6 text-2xl text-primary-500 leading-none"
                >
                    1 257,00
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Accounts extends Vue {}
</script>