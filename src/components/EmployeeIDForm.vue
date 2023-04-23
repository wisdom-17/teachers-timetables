<template>
  <div class="card bg-blue-100 w-auto h-screen flex justify-content-center align-items-center">
      <form>
        <div class="field grid">
          <label for="employeeID" class="col-6 text-4xl">Employee ID</label>
          <div class="col-6">
            <InputText id="employeeID" v-model="employeeID" class="p-inputtext-lg w-full" />
          </div>
        </div>
        <div class="field grid">
          <div class="col-6 col-offset-6"><Button class="w-full" label="Show Timetable" size="large"/></div></div>
        
    </form>
  </div>

    
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const employeeID = ref('')

</script>