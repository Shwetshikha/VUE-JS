<template>
    <header>
    </header>
    <section class="modal-content left">
        <p>SORT YOUR WORK</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum tempora quas eligendi! Atque non minus illo
            eveniet voluptatum exercitationem culpa!</p>
    </section>

    <section class="modal-content right">

        <ul>
            <li>Hassel Free day</li>
            <li>Plan</li>
            <hr>
            <hr>
            <h1>Use TO-DO-APP</h1>
            <hr>
            <hr>
            <li>Work</li>
            <li>Play</li>
            <li>Repeat</li>
        </ul>

    </section>

    <!-- <section class="modal-content down">
        <p>GET YOUR WORK SORTED</p>
    </section> -->


</template>
<script>



export default {

    data() { },

    mounted() {
        let user = localStorage.getItem('login-info');
        console.log(user);
        if (!user) {
            this.$router.push({ name: 'landingpage' })
        }
        // window.location.reload()


    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900&display=swap');

section {
    /* background-image: url(https://cdn.dribbble.com/users/1770290/screenshots/6142201/bg_73.gif); */
    background-repeat: round;
    color: rgb(13, 22, 104);
    font-size: 40px;
    text-align: center;
    background-color: blue;
}

section p {
    color: rgb(18, 17, 20)
}

section li {
    text-align: center;
    text-decoration: none;
    list-style: none;


}

section.left {
    float: left;
    width: 48%;
    border-radius: 0 100px 0 100px;
    /* height: fit-content;
    background-image: url(https://exalate.com/wp-content/uploads/2022/02/Jira-ADO-1300x731.png); */
}

section.down {
    border-radius: 100px 0 100px 0;
    float: left;
    width: 48%;
}

.section.in {
    border-radius: 0 100px 0 100px;
    float: left;
    width: 48%;
}

.modal-content {
    background-color: #aebce0;
}

/* .right {
    float: right;
    width: 48%;
    /* height: 50vw; */
/* footer {
    align-items: flex-end;
}

footer .right {
    display: flex;
    flex-direction: row-reverse;
} */
</style>

