<template>
  <section class="py-12">
    <div class="container mx-auto">
      <div class="text-6xl">
        {{ brand }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const brand = computed(()=>{
  return route.params.brand
})
</script>

<style lang="ts">

</style>