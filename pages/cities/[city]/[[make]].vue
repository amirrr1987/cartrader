<template>
  <section class="py-12">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-4">
        <template v-for="item in 4">
          <div class="border border-black rounded-lg border-solid p-4">
            <h4>item</h4>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "car",
});
const route = useRoute()

const city = computed(() => {
  return route.params.city
})
const make = computed(() => {
  return route.params.make
})

console.log(make);


useHead({
  title: `ExpressCar | Cars in ${city.value}`
})
</script>

<style lang="scss"></style>