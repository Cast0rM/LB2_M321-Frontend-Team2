<template>
    <div class="q-mb-md row q-gutter-x-sm">
        <q-input filled v-model="newTask" placeholder="Add a new task" @keyup.enter="submitTask" class="col" />
        <q-btn label="Add Task" icon="add" @click="submitTask" color="primary" class="col-auto" />
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