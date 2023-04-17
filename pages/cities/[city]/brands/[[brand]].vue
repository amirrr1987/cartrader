<template>
  <section class="py-12">
    <div class="container mx-auto">
      <div class="">
        {{ brand }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()

const brand = computed(() => {
  return route.params.brand
})
definePageMeta({
  layout: 'car'
})


</script>