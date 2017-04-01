<template>
<div> 
  <nav>
    <nuxt-link class="button" to="/">
      Home
    </nuxt-link>
    <nuxt-link class="button" to="/about">
      About page 
      <icon name="camera"></icon>
    </nuxt-link>
    <nuxt-link class="button" to="/guias/diccionario-del-vapeador">
      Diccionario del vapeador
    </nuxt-link>
    <nuxt-link class="button" to="/guias/mantenimiento-y-limpieza">
      Mantenimiento y limpieza
    </nuxt-link>
    <nuxt-link class="button" to="/guias/guia-basica-del-cigarrillo-electronico">
      Guia basica del cigarrillo electronico
    </nuxt-link>

  </nav>
  <!--<h1 class="red">Hello {{ name }}!</h1>

<v-carousel>
  <v-carousel-item src="../assets/img/logo.png" />
</v-carousel>-->


</div>
</template>


<script>
export default {
  data (context) {
    // called every time before loading the component
    return { name: 'World', items: [{src: '~assets/img/home/hero-01.png'}] }
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  }
  // and more functionality to discover
  // ...
}
</script>



<style scoped>
nav
{
  margin-top: 50px;
}

</style>
