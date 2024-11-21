<script setup>
import { RouterView } from 'vue-router'
import customTheme from './customTheme.json';
</script>

<template>
  <a-config-provider
  :theme="customTheme">
  
    <router-view />
  </a-config-provider>
</template>

<style lang="scss">

@import '/src/css/custom.scss';

</style>