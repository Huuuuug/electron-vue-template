<script lang="ts" setup>
import Logo from './components/Logo.vue'
</script>

<template>
  <div class="app-container">
    <Logo class="logo" />
  </div>
</template>

<style>
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 300px;
  height: 300px;
}
</style>
