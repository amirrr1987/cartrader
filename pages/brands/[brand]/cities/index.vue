<template>
  <section class="py-12">
    <div class="container mx-auto">

      <div class="grid grid-cols-12 gap-8">

        <div class="col-span-2">
          <CarSideBar />
        </div>

        <div class="col-span-10">

          <div class="text-4xl mb-8">
            {{ brand }} in all cities
          </div>

          <div class="grid grid-cols-4 gap-4">
            <template v-for="item in 10">
              <div class="border border-solid border-gray-100 p-4">
                car
              </div>
            </template>
          </div>
        </div>
      </div>



    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()

const brand = computed(() => {
  return route.params.brand
})


</script>

<style lang="ts">

</style>