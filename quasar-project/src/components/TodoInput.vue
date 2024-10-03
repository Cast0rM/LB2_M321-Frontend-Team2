<template>
    <div class="q-mb-md">
        <q-input filled v-model="newTask" placeholder="Add a new task" @keyup.enter="submitTask" class="q-mr-sm" />
        <q-btn label="Add Task" @click="submitTask" color="primary" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: '',
        };
    },
    methods: {
        submitTask() {
            if (this.newTask.trim() !== '') {
                this.$emit('addTask', this.newTask);
                this.newTask = '';
            }
        },
    },
};
</script>