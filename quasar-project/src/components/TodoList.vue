<template>
    <q-table :rows="tasks" :columns="columns" row-key="name" flat bordered>
        <template v-slot:body-cell-remove="props">
            <q-td align="right">
                <q-btn icon="edit" color="primary" flat @click="editTask(props.rowIndex)" />
                <q-btn icon="delete" color="negative" flat @click="removeTask(props.rowIndex)" />
            </q-td>
        </template>
    </q-table>
</template>

<script>
export default {
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            columns: [
                { name: "name", label: "Task", align: "left", field: "title" },
                { name: "Description", label: "Description", align: "left", field: "description" },
                { name: "remove", label: "Actions", align: "right" },
            ],
        };
    },
    methods: {
        removeTask(data) {
            this.$emit("removeTask", data);
        },
        editTask(data) {
            this.$emit("editTask", data)
        }
    },
};
</script>