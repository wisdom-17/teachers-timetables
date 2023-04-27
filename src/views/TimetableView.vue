<template>
  <Card v-if="storeTimetable.timetable !== null && storeTimetable.timetable.length === 0" class="mt-4">
    <template #title> You have no classes scheduled.</template>
  </Card>
  <template v-for="(dailyLessons, index) in storeTimetable.timetable" :key="index">
    <DailyTimetable :lessonDate="index" :lessons="dailyLessons"/>  
    <Divider />
  </template>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTimetableStore } from '@/stores/timetable'
import router from '@/router';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import DailyTimetable from '@/components/DailyTimetable.vue'

const storeTimetable = useTimetableStore()

onMounted(() => {
  if (storeTimetable.timetable === null) {
    router.push({ name: 'home' })
  }
})

</script>