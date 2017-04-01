<template>
  <div>
    <v-carousel>
      <v-carousel-item v-for="item in items"
                       v-bind:src="item.src"
                       :key="item.src" />
    </v-carousel>
  </div>
</template>


<script>
export default {
  data(context) {
    // called every time before loading the component
    return { name: 'World', items: [{ src: '/img/hero-01.png' }] }
  },
  fetch() {
    // The fetch method is used to fill the store before rendering the page
  }
  // and more functionality to discover
  // ...
}
</script>



<style scoped>
nav {
  margin-top: 50px;
}
</style>
