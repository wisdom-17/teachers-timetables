<template>
  <div class="card bg-blue-100 w-auto h-screen flex justify-content-center align-items-center">
      <form>
        <div class="field grid">
          <label for="employeeID" class="col-8 col-offset-2 text-2xl xl:col-6 lg:col-offset-0 xl:text-4xl">Employee ID</label>
          <div class="col-8 col-offset-2 lg:col-6 lg:col-offset-0">
            <InputText id="employeeID" v-model="storeTimetable.employeeID" class="p-inputtext-lg w-full" />
          </div>
        </div>
        <div class="field grid">
          <div class="col-8 col-offset-2 xl:col-6 xl:col-offset-6">
            <Button class="w-full" label="Show Timetable" size="large" :loading="storeTimetable.isLoading" @click="onClickShowTimetable"/>
          </div>
        </div>
        
    </form>
  </div>    
</template>

<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { useTimetableStore } from '@/stores/timetable'

const storeTimetable = useTimetableStore()

const onClickShowTimetable = () => {
  storeTimetable.getTimetable()
}

</script>