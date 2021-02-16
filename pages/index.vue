<template>
  <div class="nam-home">
    <div class="nam-home__nav">
      <NamNavbar />
    </div>
    <div class="nam-home__container">
      Contenido
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NamNavbar from '@/components/NavBar.vue'

export default Vue.extend({
  components: {
    NamNavbar
  }
})
</script>

<style>
.nam-home {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
