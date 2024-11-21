<script setup>
import Header from '../components/header.vue';
import SideBar from '../components/sideBar.vue';
</script>

<template>
  <a-layout class="layout">
    <Header />
    <a-layout>
        <SideBar />
        <div class="container">
          <div class="content">
            <h1>Welcome To License Management System</h1>
            <img src="../assets/icons/mainImg.png" alt="Main Img">
          </div>
        </div>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content h1 {
  font-size: 36px;
  text-align: center;
}

.content img {
  width: 600px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
</style>