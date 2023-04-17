<template>
  <section class="py-12">
    <div class="container mx-auto">
      <div class="text-6xl">
        {{ brand }} <span>in</span> {{ city }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { spawn } from 'child_process';

const route = useRoute()
const city = computed(() => {
  return route.params.city
})
const brand = computed(() => {
  return route.params.brand
})
</script>

<style lang="ts">

</style>