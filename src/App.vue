<template>
    <DefaultLayout>
      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </DefaultLayout>
</template>

<script setup lang="ts">
  import DefaultLayout from './layout/DefaultLayout.vue'
</script>

<style scoped>
 .fade-enter-active,
 .fade-leave-active{
  transition:  opacity 0.5s ;
 }
 .fade-enter-from,
 .fade-leave-to{
  opacity: 0;
 }
</style>