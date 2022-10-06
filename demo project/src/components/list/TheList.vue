<template>
    <div class="list">

        <div class="button-list">
            <button>
                <router-link to="/dashboard">Go To Dashboard</router-link>
            </button>
            <button>
                <router-link to="/createtask">Create a task</router-link>
            </button>
        </div>
        <!--THE LIST TABLE-->
        <div>
            <table class="table table-bordered">
                <thead class="table table-bordered">
                    <tr>
                        <th>S.No.</th>
                        <th style="width:70%">TITLE</th>
                        <!-- <th>REMARK</th> -->
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody class="table table-bordered">
                    <tr v-for="item in list" :key="item.id" :class="previousDate(item.date) ? 'overdue' : ''">
                        <td>{{ item.id }}</td>
                        <td>{{ item.title }}</td>

                        <td>
                            <div>

                                <div class="button-list">
                                    <button v-if="item.status==0">
                                        <router-link :to="{ name: 'Update', params: { taskId: item.id }}">
                                            <span class="glyphicon glyphicon-edit"></span>Edit
                                        </router-link>
                                    </button>
                                    <button v-if="item.status==0" v-on:click="updateStatus(1,item.id)">Complete</button>
                                    <button v-else-if="item.status==1">Completed</button>
                                    <button v-if="item.status==0" v-on:click="updateStatus(2,item.id)"><span
                                            class="glyphicon glyphicon-trash"></span>Delete</button>
                                    <button v-else-if="item.status==2">Deleted</button>
                                </div>
                            </div>

                        </td>
                    </tr>
                </tbody>

            </table>
        </div>

    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'TheList',


    data() {
        return {
            name: '',
            list: [],

        }

    },

    async mounted() {
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('userId');
        this.name = JSON.parse(user).name;
        let result = await axios.get("https://to-do-list-4512824.herokuapp.com/api/tasks/" + user, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.warn(result)
        this.list = result.data;
    },

    methods: {

        async updateStatus(status, taskId) {
            await axios.patch("https://to-do-list-4512824.herokuapp.com/api/update-status", {
                status: status,
                id: taskId
            },
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(response => {
                    if (response.data.code == 400) {
                        alert('Oops ! There was something wrong.. Please try Again')
                    } else {
                        alert('Task status has been updated successfully.')
                        window.location.reload()
                    }
                });

        },
        previousDate(taskDate) {
            var selectedDate = new Date(taskDate);
            var dateNow = new Date();
            if (selectedDate > dateNow) {
                console.log(taskDate);
                return false;
            }
            return true;
        },



    },


}


</script>

<style scoped>
* {
    margin: 5px;
    padding: 5px;
}

table,
th,
td {
    border: 1px solid black;
}

table {
    border: 5px;
    width: 100%
}

table tr {
    border: slateblue;


}


table tb {
    border: #ddd
}

a {
    color: #fff;
    text-decoration: none;
}

.form-inline {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}

.form-inline button {
    padding: 10px 20px;
    background-color: dodgerblue;
    border: 1px solid #ddd;
    color: white;
}

.form-inline label {
    margin: 5px 10px 5px 0;
}

.listbutton {
    display: inline-block;
    border-radius: 30px;
    width: 25vw;
    background-color: blueviolet;
    color: azure;
    font-size: 10px;
}

.list {
    background-color: rgb(206 230 250);
}

.button-list button {
    text-decoration: none;
    border-radius: 20px;
    width: 25vw;
}

.router-link button {
    text-decoration: none;
    border-radius: 20px;
    width: 25vw;
    color: aliceblue;
}

.overdue {
    /* background-color: red; */
    color: red;
}
</style>