<script setup lang="ts">
// Components
import Header from "@/components/Header/Header.vue";
</script>

<template>
  <div class="bg-gradient-to-b from-black to-rose-950 h-screen">
    <Header />
    <slot />
  </div>
</template>
