<template>
    <div>
        <div>Post</div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return
    },
    mounted() {
        axios.get(`https://to-do-list-4512824.herokuapp.com/api/task/2`)
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

div.input.invalid input {
    border-color: red;
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
    background-color: #4e2170;
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
    /* background-color: #1543a6; */
    padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
    /* background-image: url(https://i.pinimg.com/originals/15/44/d9/1544d9b4f6e992d83053c955d50f868b.jpg); */
    /* background-color: #1643be; */
    margin: 5% auto 15% auto;
    /* 5% from the top, 15% from the bottom and centered */
    /* border: 5px solid rgb(31, 80, 214); */
    width: 50%;
    box-shadow: 20px;

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
