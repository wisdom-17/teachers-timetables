<template>
  <h2 class="mt-4">{{ formattedDate }}</h2>
  <DataTable class="mt-4" :value="rowObj">
    <Column 
      v-for="(lesson, index) in lessons" 
      :key="index" 
      :header="`${(new Date(index*1000)).toLocaleTimeString('en-GB', { timeZone: 'UTC' })} - ${(new Date(lesson.end_at*1000)).toLocaleTimeString('en-GB', { timeZone: 'UTC' })}`" 
      :field="index"
      >
      <template #body="slotProps">
        <Button @click="showStudentsList(index)" :label="`View students (${slotProps.data[index].studentCount})`" size="small" text />
      </template>
    </Column>
  </DataTable>
  <Dialog v-model:visible="isStudentsListVisible" modal header="Students in Lesson"  :style="{ width: '35vw' }">
    <StudentsList :selectedLessonIndex="selectedLessonIndex" :selectedClassStartDate="props.lessonDate"/>
  </Dialog>

</template>

<script setup>
import { computed, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import StudentsList from '@/components/StudentsList.vue'

const isStudentsListVisible = ref(false)
const selectedLessonIndex = ref(null)

const props = defineProps({
  lessonDate: {
    type: String,
    required: true
  },
  lessons : {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => {
  const date = new Date(props.lessonDate)
  return date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
})

const rowObj = computed(() => {
  const rowData = [{}]
  for (const lesson in props.lessons) {
    rowData[0][lesson] = { studentCount: props.lessons[lesson].students.length, students: props.lessons[lesson].students }
  }
  return rowData
})

const showStudentsList = (index) => {
  isStudentsListVisible.value = true
  selectedLessonIndex.value = index
}

</script>
