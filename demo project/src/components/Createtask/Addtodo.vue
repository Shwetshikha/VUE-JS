<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>


    <form @submit.prevent="submitData" class="modal-content">

        <h1>ADD-TO-DO</h1>
        <h2>Create Task by filling the details</h2>
        <div>
            <label for="title"><b>TITLE</b></label>
            <input id="title" v-model.trim="title" type="text" placeholder="Enter Title" name="title" ref="titleInput">
        </div>

        <div>
            <label id="remark" for="remark"><b>REMARK</b></label>
            <input v-model.trim="remark" id="remark" type="text" placeholder="Enter Remark" name="remark"
                ref="remarkInput">
        </div>



        <div id="datepicker" class="md-form md-outline input-with-post-icon datepicker" inline="true">
            <label for="date"><b>DATE</b></label>
            <input onchange="checkDate()" v-model="date" type="date" ref="dateInput">
        </div>
        <div>
            <label for="category"><b>CATEGORY</b></label>
            <select id="category" name="category" ref="categoryInput">
                <option value=office>OFFICE</option>
                <option value=home>HOME</option>
                <option value=market>MARKET</option>
            </select>
        </div>

        <div>
            <base-button @click="add">Create Task</base-button>
        </div>

        <div>
            <base-button @click="view">View Your Task</base-button>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
import Datepicker from '../ui/date.vue'

export default {
    emits: ['save-data'],
    component: {

        // inject: ['showtask'],
        // name: 'CreateTask',
        Datepicker,

    },
    data() {
        return {
            title: '',
            remark: '',
            date: '',
            category: '',
            userId: localStorage.getItem('userId'),
            status: '',
            titleValidity: 'pending',
            remarkValidity: 'pending',
            inputIsInvalid: false,

        }
    },
    async mounted() {
        await axios.get("https://to-do-list-4512824.herokuapp.com/api/category-list",
            { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
            .then(response => {
                let str = '';
                for (let i = 0; i < response.data.length; i++) {
                    str += "<option value='" + response.data[i].id + "'>" + response.data[i].category + "</option>";
                }
                console.log(str)
                document.getElementById('category').innerHTML = str;

            });
        console.log('mounted');

    },
    methods: {
        async add() {
            console.log('createtask', this.title, this.remark, this.date, this.status, this.userId)
            let token = localStorage.getItem('token')
            console.log(token)
            let userId = localStorage.getItem('userId')
            console.log(userId)

            let result = await axios.post("https://to-do-list-4512824.herokuapp.com/api/add-task",

                {
                    title: this.title,
                    remark: this.remark,
                    date: this.date,
                    category: this.category,
                    userId: this.userId,
                    status: 0


                }, { headers: { "Authorization": `Bearer ${token}` } });
            console.log(result);
            console.log(token);
            console.log(userId);

            console.log("Task Created Successfully");
            if (result.data.code == 201) {
                alert("Task has been Created")
                document.getElementById('title').value = ''

            }

            // window.location.reload()
            // this.$router.push('/showtask');

            // if (result.userId == this.userId) {
            //     alert("task created successfully")
            // }
        },
        checkDate() {
            var selectedDate = document.getElementById('datepicker').value;
            var now = new Date();
            if (selectedDate < now) {
                alert("Date must be in the future");
            }

        },

        submitData() {
            const enteredTitle = this.$refs.titleInput.value;
            const enteredRemark = this.$refs.remarkInput.value;
            const enteredDate = this.$refs.dateInput.value;
            const enteredCategory = this.$refscategoryInput.value;
            if (
                enteredTitle.trim() === '' ||
                enteredRemark.trim() === '' ||
                enteredDate.trim() === '' ||
                enteredCategory.trim() === ''
            ) {
                this.inputIsInvalid = true;
                return;
            }
            this.submitData(enteredTitle, enteredRemark, enteredDate, enteredCategory);
        },
        confirmError() {
            this.inputIsInvalid = false;
        },

        view() {
            this.$router.push('/list');

            // window.location.reload()
        }


    }
}


</script>

<style scoped>
body {
    font-family: Arial, Helvetica, sans-serif;
}

* {
    box-sizing: border-box;


}

h1 {
    font-size: 50px;
    text-align: center;
    justify-content: center;
    color: #0a3f88;

}

h2 {
    font-size: 30px;
    text-align: left;
    justify-content: center;
    color: #041d41;
}

label {
    font-size: 30px;
    text-align: center;
    justify-content: center;
    color: #0a3f88;
}

div.input.invalid input {
    border-color: red;
    font-size: large;
}

div.input.invalid label {
    color: red;
}

div.input.invalid label p {
    color: red;
}

h1 h2 {
    text-align: center;
    align-items: center;
}



/* Full-width input fields */
input[type=text],
input[type=password],
input[type=number],
input[type=date] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
    font-size: larger;
}


#category {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;

}

#category .options {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;

}

.signuplogo img {
    justify-content: center;
    width: 5vw;
    height: 5vw;
    align-items: center;
    margin: 1rem;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus,
input[type=password]:focus {
    background-color: rgb(227, 233, 239);
    outline: none;
}

/* Set a style for all buttons */
button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

button:hover {
    opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
    float: left;
    width: 40%;
    border-radius: 2rem;
    align-items: center;
    margin: 20px;
    padding: 20px;
}

/* Add padding to container elements */
.container {
    padding: 16px;
}

/* The Modal (background) */
.modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: #1543a6;
    padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
    /* background-image: url(https://i.pinimg.com/originals/15/44/d9/1544d9b4f6e992d83053c955d50f868b.jpg); */
    /* background-color: #1643be; */
    margin: 5% auto 15% auto;
    padding: 10px;
    /* 5% from the top, 15% from the bottom and centered */
    /* border: 5px solid rgb(31, 80, 214); */
    width: 50%;

    /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 35px;
    top: 15px;
    font-size: 40px;
    font-weight: bold;
    color: #f1f1f1;
}

.close:hover,
.close:focus {
    color: #f44336;
    cursor: pointer;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {

    .cancelbtn,
    .signupbtn {
        width: 100%;
    }
}
</style>
        
    