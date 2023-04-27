<template>
  <ul>
    <li v-for="student in students" :key="student">
      {{ student }}
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useTimetableStore } from '@/stores/timetable'

const storeTimetable = useTimetableStore()

const students = computed(() => {
  return storeTimetable.timetable[props.selectedClassStartDate][props.selectedLessonIndex]['students'].map(studentObj => {
    return studentObj.forename + ' ' + studentObj.surname
  }).sort()
})

const props = defineProps({
  selectedClassStartDate : {
    type: String,
    required: true
  },
  selectedLessonIndex : {
    type: String,
    required: true
  }
})

</script>