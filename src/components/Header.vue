<template>
  <header class="header">
    <h1>Header</h1>
    <p>
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/list">Go to List</router-link>
    <router-link to="/about">Go to About</router-link>
    </p>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
</style>
