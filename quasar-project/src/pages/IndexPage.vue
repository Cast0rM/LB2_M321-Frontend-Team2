<template>
  <q-page class="q-pa-md">
    <div class="row q-gutter-md" style="width: 100%">
      <div class="col-12" :span="12">
        <h1 class="text-h4 q-mb-md">ToDo List</h1>
        <TodoInput @addTask="addTask" />
      </div>

      <div class="col-12 q-pa-none">
        <TodoList 
          :tasks="tasks" 
          @removeTask="removeTask" 
          @editTask="editTask" 
          class="q-pa-none" 
        />
      </div>
    </div>

  </q-page>
</template>

<script>
import TodoInput from 'src/components/TodoInput.vue';
import TodoList from 'src/components/TodoList.vue';
import { api } from 'src/services/api.ts'

export default {
  name: 'IndexPage',
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      tasks: [],
      token: sessionStorage.getItem('token') || '',
    };
  },
  methods: {
    async fetchTasks() {
        let config = {
          headers: { Authorization: `Bearer ${this.token}` },
        }
        const response = await api.get('/tasks/',config);
        if(response.status == 200)
        {
          this.tasks = response.data;
        }
        else
        {
          console.log('dsnt work')
        }
    },
    async addTask(task) {
    try {
    const config = {
      headers: { Authorization: `Bearer ${this.token}` }
    };

    const res = await api.post('/tasks', task, config);

      if (res.status === 200) {
        this.tasks.push(res.data);
        await this.fetchTasks();
        
      }
    } catch (error) {
    console.error("Error adding task:", error);
  }
},

    async removeTask(index) {
      let config = {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      try {
        const task = this.tasks[index];
        await api.delete(`/tasks/${task.task_id}`, config);
        this.tasks.splice(index, 1);
      } catch (error) {
        console.error('Error removing task:', error);
      }
    },
    async editTask(index) {
      let config = {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      const task = this.tasks[index];
      const newTitle = prompt('Edit task title:', task.title); 
      const newDescription = prompt('Edit task description:', task.description)
      if (newTitle && newTitle !== task.title && newDescription && newDescription !== task.description) {
        try {
          await api.put(`/tasks/${task.task_id}`, { title: newTitle, category_id: task.category_id, description: newDescription }, config);
          this.tasks[index].title = newTitle;
          this.tasks[index].description = newDescription;
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
