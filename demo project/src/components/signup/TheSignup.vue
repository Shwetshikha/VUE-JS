<template>
    <div>
        <div class="modal-content form-control">
            <div class="container">
                <h1>SIGN UP</h1>
                <p>Please fill in this form to create an account.</p>
                <div :class="{invalid: nameValidity === 'invalid'}">
                    <label for="name"><b>Enter Name</b></label>
                    <input type="text" v-model="name" placeholder="Enter Name" required @blur="validateInput">
                    <h3 v-if="nameValidity === 'invalid'"><b>Please enter a Valid Name</b></h3>
                </div>
                <div :class="{invalid: emailValidity === 'invalid'}">
                    <label for="email"><b>Enter Email</b></label>
                    <input type="text" v-model="email" placeholder="Enter Email" required @blur="validateEmail">
                    <h3 v-if="emailValidity === 'invalid'"><b>Please enter a Valid Email</b></h3>
                </div>
                <div>
                    <label class="radio" for="radio" name="gender"><b>Gender</b></label>
                    <input type="radio" v-model="gender" value="male" name="gender" style="margin-bottom:15px">Male
                    <input type="radio" v-model="gender" value="female" name="gender"
                        style="margin-bottom:15px">Female<br>

                </div>
                <div :class="{invalid: passwordValidity === 'invalid'}">
                    <label for="psw"><b>Password</b></label>
                    <input type="password" v-model="password" placeholder="Enter Password" required
                        @blur="validatePassword">
                    <h3 v-if="passwordValidity === 'invalid'"><b>Enter at least 4 characters</b></h3>
                </div>
                <div>
                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" v-model="repeatpassword" placeholder="Repeat Password" required>
                    <h3 v-if="passwordValidity === 'invalid'"><b>Enter the same Password</b></h3>

                </div>

                <div class="clearfix">
                    <base-button v-on:click="signup" :disabled="creatingAccount">Sign-Up
                    </base-button>
                    <h3 v-if="createTaskValidity === 'invalid'"><b>ENTER ALL DATA TO SIGNUP</b></h3>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import login from '../login/TheLogin.vue'

export default {
    component: {
        login,
    },
    inject: ['login'],


    name: 'TheSignup',

    data() {
        return {
            name: '',
            email: '',
            gender: '',
            password: '',
            userId: '',
            repeatpassword: '',
            nameValidity: 'pending',
            passwordValidity: 'pending',
            repeatpasswordValidity: 'pending',
            emailValidity: 'pending',
            creatingAccount: false


        }

    },

    methods: {
        async signup() {
            this.creatingAccount = true;
            console.warn("signup", this.name, this.email, this.password, this.gender)
            let result = await axios.post("https://to-do-list-4512824.herokuapp.com/api/signup",
                {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    gender: this.gender,
                    userId: this.userId,

                });
            console.log(result);
            this.creatingAccount = false;
            if (result.status == 201) {
                alert("signup done Login to continue..")
            }
            localStorage.setItem("user", JSON.stringify(result.data))
        },

        validateInput() {
            if (this.name === '') {
                this.nameValidity = 'invalid';
            } else {
                this.nameValidity = 'valid';
            }
        },

        validatePassword() {
            if (this.password === '') {
                this.passwordValidity = 'invalid';
            } else {
                this.passwordValidity = 'valid';
            }
        },
        validateEmail() {
            if (this.email === '') {
                this.emailValidity = 'invalid';
            } else {
                this.emailValidity = 'valid';
            }
        }
    }
}

</script>
<style>
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
input[type=radio] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

input[type=radio] {
    width: 20%;

}


div.input.invalid input {
    border-color: red;
}

div.input.invalid label {
    color: red;
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


.container {
    padding: 16px;
}


.modal {
    display: none;

    position: fixed;

    z-index: 1;

    left: 0;
    top: 0;
    width: 100%;

    height: 100%;

    overflow: auto;

    /* background-color: #1543a6; */
    padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
    /* background-image: url(https://www.ppt-backgrounds.net/thumbs/light-blue-gradient-claro-templates.jpeg); */
    /* background-color: #1643be; */
    margin: 5% auto 15% auto;
    /* 5% from the top, 15% from the bottom and centered */
    /* border: 5px solid rgb(31, 196, 214); */

    border-radius: 20px;
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
    
