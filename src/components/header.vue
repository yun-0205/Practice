<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <a-layout-header class="header">
    <div class="logo" @click="goHome">
    <img src="../assets/icons/logo.svg" alt="Logo">
    <h1>Keyper</h1>
    </div>
  </a-layout-header>
</template>

<style lang="scss">
@import "../assets/style.scss";

.header {
  background-color: $primary-500;
  box-shadow: 0px 1px 6px #00000015;
  z-index: 10;
}

.logo {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.logo h1 {
  margin-left: 8px;
  font-size: 32px;
}
</style>