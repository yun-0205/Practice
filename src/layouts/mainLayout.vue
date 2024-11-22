<script setup>
import Header from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';
</script>

<template>
  <a-layout class="layout">
    <Header />
    <a-layout style="display: flex; flex-direction: row;">
        <SideBar />
        <div class="container">
          <div class="content">
            <h1>Welcome To License Management System</h1>
            <img src="../assets/icons/mainImg.png" alt="Main Img" />
          </div>
        </div>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $background-white;
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
  justify-content: center;
  width: 100%;
  background-color: $background-white;
  margin: 32px;
}
</style>