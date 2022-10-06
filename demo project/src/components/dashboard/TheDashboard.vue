<template >
    <the-header></the-header>
    <router-view></router-view>

    <!-- <marquee style="color: purple; font-weight:20; font-size: 3vw"> {{ name }} WELCOME TO YOUR DASHBOARD</marquee>
     -->
    <div>
        <base-button v-on:click="dashboard" @click="confirmCreate" type="button" class="signupbtn">Create Task
        </base-button>
        <base-button v-on:click="login" @click="confirmList" type="button" class="signupbtn">Go To List</base-button>
        <base-button @click="show" type="button" class="signupbtn">Total Task</base-button>
        <!-- <base-button @click="todo">Add To Do</base-button> -->

    </div>
    <div>
        <table class="table table-bordered">

            <tbody>
                <tr>
                    <td>
                        <h1>Total Task</h1>
                        <p>{{ totaltask }}</p>
                    </td>
                    <td>
                        <h1>Due Task</h1>
                        <p>{{duetask }}</p>
                    </td>
                    <td>
                        <h1>Completed Task</h1>
                        <p>{{ completedtask }}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

   






<script>
import axios from 'axios'
import createtask from '../Createtask/CreateTask.vue'
import list from '../list/TheList.vue'

export default {
    name: "Thedashboard",
    data() {
        return {
            name: localStorage.getItem('userId'),
            totaltask: '',
            duetask: '',
            completedtask: '',

        }
    },

    component: {
        createtask,
        list,
    },
    inject: ['createtask', 'list'],

    async mounted() {
        let token = localStorage.getItem('token')
        let user = localStorage.getItem('userId');
        this.name = JSON.parse(user).name;
        let result = await axios.post("https://to-do-list-4512824.herokuapp.com/api/dashboard", {
            'userId': user
        },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
        console.warn(result);


        this.totaltask = result.data[0].total_task
        this.duetask = result.data[0].due_task
        this.completedtask = result.data[0].completed

    },
    methods: {
        confirmList() {

            this.$router.push('/list');
        },
        confirmCreate() {
            this.$router.push('/createtask');
        },
        show() {
            this.$router.push('/showtask')
        },
        todo() {
            this.$router.push('/Addtodo')
        }

    }
}



</script>
<style scoped>
.container {
    display: flex;

}

p {
    color: rgb(30, 78, 180);
    text-align: center;
    font-size: 30px;
}



td tr {
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    width: 40vw;
    height: 0vw;
    padding: 35px;
    margin: 25px;
}

table {
    border: 5px;
    border-spacing: 30px;
    margin: 2px;
    text-align: center;
    align-items: center;
    border-radius: 10px;

}

.modal-content {
    display: inline-block;
    background-color: #fefefe;
    /* background-image: url('https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=2000'); */
    margin: 5% auto 15% auto;
    /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%;
    /* Could be more or less, depending on screen size */
    color: #101d94;
    width: 25vw;
    height: 25vw;
}

.modal-content.dashboard {
    display: inline-block;
}

span.a {
    display: inline-block;
    width: 33.33%;
    height: 25vw;
    padding: 3vw;
    border: 1px solid black;
    background-color: rgb(141, 167, 243);
    text-align: center;
    align-items: center;
}

span.b {
    display: inline-block;
    width: 33.33%;
    height: 25vw;
    padding: 3vw;
    border: 1px solid black;
    background-color: rgb(141, 167, 243);
    text-align: center;
    align-items: center;
}

span.c {
    display: inline-block;
    width: 33.33%;
    height: 25vw;
    padding: 3vw;
    border: 1px solid black;
    background-color: rgb(141, 167, 243);
    text-align: center;
    align-items: center;
}



.row {
    display: inline-block;
    flex-direction: column;
    align-content: center;
    text-align: center;
    align-items: center;
    width: 50%
}

.signupbtn {
    display: flex;
    width: 25vw;
    text-align: center;
    align-items: center;
}

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    display: inline-block;
    margin: 1rem;
    align-content: center;
    align-items: center;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: white;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: #0d4062;
    color: white;
    transform: rotateY(180deg);
    text-align: center;
}

.flip {
    display: flex;
}
</style>