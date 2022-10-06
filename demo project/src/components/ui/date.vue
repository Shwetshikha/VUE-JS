<template>
    <div id="date">
        <datepicker v-model="model.date" :format="DatePickerFormat" :disabledDates="disabledDates">
        </datepicker>
    </div>
</template>
  
<script>
import Datepicker from "vuejs-datepicker";

export default {
    components: {
        Datepicker
    },

    data() {
        return {
            model: {
                date: ""
            },
            DatePickerFormat: "dd/MM/yyyy",
            disabledDates: {
                to: new Date(Date.now() - 8640000)
            }
        };
    }
};
</script>
  
<style>

</style>
  