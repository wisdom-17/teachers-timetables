<template>
  <div class="card bg-blue-100 w-auto h-screen flex justify-content-center align-items-center">
      <form>
        <div class="field grid">
          <label for="employeeID" class="col-8 col-offset-2 text-2xl xl:col-6 lg:col-offset-0 xl:text-4xl">Employee ID</label>
          <div class="col-8 col-offset-2 lg:col-6 lg:col-offset-0">
            <InputText id="employeeID" v-model="employeeID" class="p-inputtext-lg w-full" />
          </div>
        </div>
        <div class="field grid">
          <div class="col-8 col-offset-2 xl:col-6 xl:col-offset-6">
            <Button class="w-full" label="Show Timetable" size="large" :loading="isLoading" @click="getEmployeeTimetable"/>
          </div>
        </div>
        
    </form>
  </div>

    
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const employeeID = ref('')
const isLoading = ref(false)

const getEmployeeTimetable = async () => {
  console.log('todo: getEmployeeTimetable')
  // const payload = {
  //   employeeID: employeeID.value,
  // }

  try {
    isLoading.value = true

    isLoading.value = false

  } catch (error) {
    isLoading.value = false

    // showErrorMessage.value = true
  }
}

</script>