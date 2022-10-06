<template>
    <form @submit.prevent="taskcreate" class="modal-content">

        <h1>EDIT TO DO</h1>
        <h2>Edit Task by re-filling the details</h2>
        <div>
            <div :class="{invalid: titleValidity === 'invalid'}">
                <label for="title"><b>TITLE</b></label>
                <input id="title" v-model.trim="title" type="text" placeholder="Enter Title" name="title" required
                    @blur="validateTitle">
                <h3 v-if="titleValidity === 'invalid'"><b>Please Enter Suitable Title</b></h3>

            </div>

            <div :class="{invalid: remarkValidity === 'invalid'}">
                <label id="remark" for="remark"><b>REMARK</b></label>

                <input v-model.trim="remark" id="remark" type="text" @blur="validateRemark" placeholder="Enter Remark"
                    name="remark" required>
                <h3 v-if="remarkValidity === 'invalid'"><b>Please Enter valid Remark for the task</b></h3>
            </div>


            <div :class="{invalid: dateValidity === 'invalid'}" id="date-picker-example"
                class="md-form md-outline input-with-post-icon datepicker" inline="true">
                <label for="date"><b>DATE</b></label>
                <input v-model="date" type="date" @blur="validateDate" required>
                <h3 v-if="dateValidity === 'invalid'"><b>Please enter a date</b></h3>
            </div>

            <div :class="{invalid: categoryValidity === 'invalid'}">
                <label for="category"><b>CATEGORY</b></label>
                <select id="category" name="category" v-model="category" @blur="validateCategory">

                </select>
            </div>

            <div :class="{invalid: createTaskValidity === 'invalid'}">
                <base-button @click="updateTask" @blur="validateCreateTask">EDIT TASK</base-button>
                <h3 v-if="createTaskValidity === 'invalid'"><b>ENTER ALL DATA TO CREATE A TASK</b></h3>
            </div>
            <div class="alert alert-success" role="alert" id="msg"></div>


            <div>
                <base-button @click="view">VIEW YOUR TASK</base-button>
            </div>

        </div>


    </form>

</template>
<script>
import axios from 'axios'

export default {
    name: 'Update',

    emits: ['save-data'],
    component: {
        inject: ['showtask'],
        name: 'Update',

    },

    data() {
        return {

            title: '',
            remark: '',
            date: '',
            category: '',
            status: '',
            titleValidity: 'pending',
            remarkValidity: 'pending',
            dateValidity: 'pending',
            createTaskValidity: 'pending'

        }

    },
    async mounted() {
        const token = localStorage.getItem('token')
        await axios.get("https://to-do-list-4512824.herokuapp.com/api/category-list",
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                let str = '';
                for (let i = 0; i < response.data.length; i++) {
                    str += "<option value='" + response.data[i].id + "'>" + response.data[i].category + "</option>";
                }
                console.log(str)
                document.getElementById('category').innerHTML = str;
            });
        await axios.get('https://to-do-list-4512824.herokuapp.com/api/task/' + this.$route.params.taskId, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(result => {
            console.warn(result.data)
            this.title = result.data[0].title
            this.category = result.data[0].category;
            this.remark = result.data[0].remark;
            this.date = result.data[0].date;
            this.status = result.data[0].status;
        });
    },

    methods: {

        async updateTask() {

            await axios.put("https://to-do-list-4512824.herokuapp.com/api/edit/" + this.$route.params.taskId, {
                title: this.title,
                remark: this.remark,
                date: this.date,
                category: this.category,
                status: this.status,
                userId: localStorage.getItem('userId')
            },
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(response => {
                    if (response.data.code === 400) {
                        document.getElementById('msg').innerHTML = 'oops There Was something wrong';

                    } else { document.getElementById('msg').innerHTML = 'Task has been updated Succesfully'; }
                });
            alert('Task Updated succesfully')

        },
        view() {
            this.$router.push('/list');
        },

        validateTitle() {
            if (this.title === '') {
                this.titleValidity = 'invalid';
            } else {
                this.titleValidity = 'valid';
            }
        },
        validateRemark() {
            if (this.remark === '') {
                this.remarkValidity = 'invalid';
            } else {
                this.remarkValidity = 'valid';
            }
        },
        validateDate() {
            if (this.date === '') {
                this.dateValidity = 'invalid';
            } else {
                this.dateValidity = 'valid'
            }
        },
        validateCategory() {
            if (this.category === '') {
                this.categoryValidity = 'invalid';
            } else {
                this.categoryValidity = 'valid'
            }

        },
        validateCreateTask() {
            if (this.title === '' || this.category === '' || this.remark === '' || this.date === '') {
                this.createTaskValidity = 'invalid';
            } else {
                this.createTaskValidity = 'valid'
            }

        }



    },


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

h3 {
    color: #f44336;
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
            
        
            
        