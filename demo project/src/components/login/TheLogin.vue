<template>

    <div class="modal-content">
        <div class="container">
            <div>
                <h1>LOGIN {{ name }}</h1>
                <p>Please fill in details to login to your account.</p>
            </div>
            <div :class="{invalid: emailValidity === 'invalid'}">
                <label for="email"><b>Email</b></label>
                <input v-model="email" type="text" placeholder="Enter Email" name="email" @blur="validateEmail"
                    required>
                <h3 v-if="emailValidity === 'invalid'"><b>Please Enter valid Email-Id</b></h3>
            </div>
            <div :class="{invalid: passwordValidity === 'invalid'}">
                <label for="psw"><b>Password</b></label>
                <input v-model="password" type="password" placeholder="Enter Password" name="psw"
                    @blur="validatePassword" required>
                <h3 v-if="passwordValidity === 'invalid'"><b>Please Enter valid password</b></h3>
            </div>

            <base-button @click="login">Login</base-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'TheLogin',

    data() {
        return {
            email: '',
            password: '',
            emailValidity: 'pending',
            passwordValidity: 'pending',
            loggingAccount: false

        }
    },
    methods: {

        async login() {

            console.log("logged in succesfully")
            const result = await axios.post("https://to-do-list-4512824.herokuapp.com/api/login", {

                email: this.email,

                password: this.password,
                // name: this.name,
                // gender: this.gender

            })
            console.log(result)
            this.loggingAccount = false;

            localStorage.setItem("result", result.data);

            localStorage.setItem("token", result.data.token);

            localStorage.setItem("userId", result.data.userId);

            localStorage.setItem("id", result.data.id);

            this.$router.push("/dashboard"
            );
            // window.location.reload()

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
                this.emailValidity = 'valid'
            }
        }
    }
}

</script>
<style scoped>
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
</style>