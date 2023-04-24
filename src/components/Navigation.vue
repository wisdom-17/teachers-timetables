<template>
  <Menubar>
    <template v-slot:end>
      <Logout />
    </template>
  </Menubar>
</template>

<script setup>
import Menubar from 'primevue/menubar'
import Logout from '@/components/Logout.vue'

</script>
