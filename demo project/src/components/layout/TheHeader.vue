<template>
    <header>
        <nav>
            <h1>
                <router-link to="/"><img class="image"
                        src="https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"
                        style="border-radius: 10px">
                </router-link>
            </h1>
            <ul>
                <li v-if="!login">
                    <router-link to="/login">LOGIN</router-link>
                </li>
                <li v-if="!login">
                    <router-link to="/signup">SIGN UP</router-link>
                </li>
                <li>
                    <a v-if="login" @click="logout">LOGOUT</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

export default {

    name: 'TheHeader',

    data() {
        return {
            login: localStorage.getItem('token')
        }
    },

    methods: {
        logout() {
            localStorage.clear();
            console.log("Logged Out Please Login to continue")
            this.$router.push({ name: 'login' })

        },

    }

}

</script>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 5rem;
    /* background-color: #095674; */
    background-color: #0f2a6c;

    justify-content: center;
    align-items: center;
}

/* header a {
    text-decoration: none;
    color: #f391e3;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
} */

header a {
    text-decoration: none;
    color: #f391e3 !important;
    display: inline-block;
    padding: 0;
    border: 12px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
    border: 1px solid #f391e3;
    text-decoration: none;
    color: #f391e3;
    display: inline-block;
    padding: 0;
    border: 12px solid transparent;
}

h1 {
    margin: 0;
}

h1 a {
    color: white;
    margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
    border-color: transparent;
}

header nav {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 0.5rem;
}

.image {

    width: 4vw;
    height: 4vw;
    margin: 0px;
    padding: 0px;
    align-items: center;
    display: flex;
    justify-content: center;

}

/* // src="https://i.pinimg.com/originals/1a/af/16/1aaf162ed448874e6fe411356d029675.gif" */
</style>