<template>
  <section class="py-12">
    <div class="container mx-auto">
      <div class="">
        {{ city }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()

const city = computed(() => {
  return route.params.city
})
definePageMeta({
  layout: 'car'
})


</script>