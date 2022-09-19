<template>
    <ul>
        <li :class="{active: activeOption === 'poor'}"><button type="button" @click="activate('poor')">Poor</button>
        </li>
        <li :class="{active: activeOption === 'average'}"><button type="button"
                @click="activate('average')">Average</button></li>
        <li :class="{active: activeOption === 'great'}"><button type="button" @click="activate('great')">Great</button>
        </li>
    </ul>
</template>



<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    data() {
        return {
            activeOption: this.modelValue,

        };
    },
    methods: {
        activate(option) {
            this.activeOption = option;
            this.$emit('update:modelValue', option);

        }
    }
}
</script>
<style scoped>
.active {
    border-color: blue;
}

.active button {
    border-color: blue;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;

}

li {
    margin: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

}

button {
    border: none;
    background-color: turquoise;
    cursor: pointer;
}
</style>