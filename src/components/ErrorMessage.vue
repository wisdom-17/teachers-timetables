<template>
  <Message severity="error">{{ message }}</Message>
</template>

<script setup>
import Message from 'primevue/message'

defineProps({ message: String })
</script>
