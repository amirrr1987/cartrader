<template>
  <div>
    <TheNavbar />
    <main class="py-12">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-4">
            <div class="tabs">
              <div class="tab">
                <input type="radio" id="location" name="item">
                <label class="tab-label" for="location">Location</label>
                <div class="tab-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                </div>
              </div>
              <div class="tab">
                <input type="radio" id="make" name="item">
                <label class="tab-label" for="make">Make</label>
                <div class="tab-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                </div>
              </div>
              <div class="tab">
                <input type="radio" id="price" name="item">
                <label class="tab-label" for="price">Price</label>
                <div class="tab-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-8 grid gap-8">
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from '~/components/layout/TheNavbar.vue';


</script>

<style>
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}

.tab {
  width: 100%;
  color: white;
  overflow: hidden;
}

.tab-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: #2c3e50;
  font-weight: bold;
  cursor: pointer;
  /* Icon */
}

.tab-label:hover {
  background: #1a252f;
}

.tab-label::after {
  content: "❯";
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.35s;
}

.tab-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background: white;
  transition: all 0.35s;
}



.tab-close:hover {
  background: #1a252f;
}

input:checked+.tab-label {
  background: #1a252f;
}

input:checked+.tab-label::after {
  transform: rotate(90deg);
}

input:checked~.tab-content {
  max-height: 100vh;
  padding: 1em;
}
</style>