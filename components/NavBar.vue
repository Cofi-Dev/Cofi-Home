<template>
  <div class="nam-navbar">
    <div class="nam-navbar__container">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/about">
        About
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NamNavBar'
})
</script>

<style>
/*  */
</style>
