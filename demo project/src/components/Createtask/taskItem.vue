<template>
    <li>
        <h3>{{ title }}</h3>
        <h4>{{ remark }}</h4>
        <h4>{{ date }}</h4>
        <h4>{{ category }}</h4>
        <div>
            <span v-for="category in category" :key="category">{{ date }}</span>
        </div>
        <div class="actions">
            <router-link :to="tasklistLink">Action</router-link>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'title', 'remark', 'date', 'category', 'status'],
    computed: {
        addtasktitle() {
            return this.title;
        },
        addtaskremark() {
            return this.remark;

        },
        addtaskid() {
            return this.id;
        },
        addtaskcategory() {
            return this.category
        },
        addtaskstatus() {
            return this.status
        }
    },
}
</script>