<template>
  <q-page class="q-pa-md">
    <div class="todo-container">
      <h1 class="text-h4 q-mb-md">ToDo List</h1>

      <TodoInput @addTask="addTask" />
      <TodoList :tasks="tasks" @removeTask="removeTask" @editTask="editTask" />
    </div>
  </q-page>
</template>

<script>
import axios from 'axios';
import TodoInput from 'src/components/TodoInput.vue';
import TodoList from 'src/components/TodoList.vue';

export default {
  name: 'IndexPage',
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get('/api/tasks');
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async addTask(task) {
      try {
        const response = await axios.post('/api/tasks', { task });
        this.tasks.push(response.data); // Assuming your API returns the created task with an id
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },
    async removeTask(index) {
      try {
        const task = this.tasks[index];
        await axios.delete(`/api/tasks/${task.id}`); // Assuming each task has a unique ID
        this.tasks.splice(index, 1);
      } catch (error) {
        console.error('Error removing task:', error);
      }
    },
    async editTask(index) {
      const task = this.tasks[index];
      const newTitle = prompt('Edit task title:', task.name); // Prompt user for new title
      if (newTitle && newTitle !== task.name) { // Proceed if the user entered a new title
        try {
          await axios.put(`/api/tasks/${task.id}`, { name: newTitle }); // Update task on the server
          this.tasks[index].name = newTitle; // Update task in the local state
        } catch (error) {
          console.error('Error updating task:', error);
        }
      }
    },
  },
  mounted() {
    this.fetchTasks();
  },
};
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
