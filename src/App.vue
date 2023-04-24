
<template>
  <Navigation v-if="currentRoute !== 'login'" />
  <RouterView />
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Navigation from '@/components/Navigation.vue'

const currentRoute = computed(() => {
  return useRoute().name
})

</script>

<style scoped>


</style>
