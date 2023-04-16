<template>
  <section class="py-12">
    <div class="container mx-auto">
      <div class="">
        {{ route.params.city }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()


definePageMeta({
  layout: 'car'
})

</script>