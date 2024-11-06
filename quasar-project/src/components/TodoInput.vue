<template>
    <div class="q-mb-md row q-gutter-x-sm">
      <!-- Input field for new task -->
      <q-input filled v-model="newTask" placeholder="Add a new task" @keyup.enter="submitTask" class="col" />
      <!-- Button to add task -->
      <q-btn label="Add Task" icon="add" @click="submitTask" color="primary" class="col-auto" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'; // Import ref for reactive data
  import moment from 'moment'; // Import moment.js for date manipulation
  
  export default {
    name: 'TaskInput', // Naming the component
    setup(props, { emit }) {
      // Declare a reactive reference for the new task input
      const newTask = ref('');
      
      // Method to handle the task submission
      const submitTask = () => {
        if (newTask.value.trim() !== '') {
          const task = {
            title: newTask.value,
            description: `${newTask.value} "description"`,
            due_date: moment().add(1, 'week'),
            category_id: 3
          };
  
          emit('addTask', task);
  
          newTask.value = '';
        }
      };
      return {
        newTask,
        submitTask
      };
    }
  };
  </script>
  