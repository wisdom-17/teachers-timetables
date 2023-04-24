<template>
  <Button
    @click="onClickLogout"
    label="Logout"
    class="p-button-text p-button-plain"
    icon="pi pi-power-off"
  />
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import Button from 'primevue/button'

const storeAuth = useAuthStore()

const onClickLogout = () => {
  storeAuth.logout()
}
</script>
