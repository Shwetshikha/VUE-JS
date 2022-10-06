<template>
    <the-header>
        <router-view></router-view>
    </the-header>
    <router-view></router-view>

    <!-- <base-button></base-button> -->
</template>





<script>

import TheHeader from './components/layout/TheHeader.vue'

export default {
    components: {

        TheHeader,
    },

    data() {

    }

}
</script>
<style>
#app {
    /* background-image: url(https://sc04.alicdn.com/kf/H7e6e6611c8984edeb210a6ce1c806b2a2.jpg); */
    background-color: rgb(206 230 250);
    object-fit: fill;
    white-space: wrap;
    background-repeat: repeat-y;
}

html {
    background-color: rgb(206 230 250);
}
</style>