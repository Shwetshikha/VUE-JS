const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText;
    },
  },
  // Vue App lifecycle practice//
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMounted()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");
setTimeout(function () {
  app.unmount();
}, 3000);

//Built in reactivity is the core feature of VUE //
//Vue turns data object into reactive data objects by essentially wrapping your properties with "proxy"
//LECTURE 61 - VUE REACTIVITY: A DEEP DIVE//
// let message = "Hello";

// let longMessage = message + "World";
// console.log(longMessage);
// message = "hello!!!";
// console.log(longMessage);

const data = {
  message: "Hello!",
};
const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
  },
};
const proxy = new Proxy(data, handler);

//LECTURE 62 ONE APP VS MULTIPLE APP//
const app2 = Vue.createApp({
  template: `<p>{{ favouriteMeal }}</p>`,
  data() {
    return {
      favouriteMeal: "Pasta",
    };
  },
});

app2.mount("#app2");

// app and app2 has no connection so we cannot use one part of one app in another//
//
//LECTURE-63 UNDERSTANDING THE TEMPLATE//
//by mounting we make templates to be used by HTML//
// Even if we have used template still we need to mount the app so as to make it visible//

//LECTURE 64 WORKING WITH REF//
// line 21 instead of @input="saveInput"  we can use ref with any html elements//
//vue detects them and stores internally//

//LECTURE 65 HOW VUE UPDATES DOM//
// vue instances and browser DOM//
//Possible Solution: compare old DOM values with new and update accordingly//
// but the case is not so -- Vue uses a concept called as Virtual DOM //
// updates are made to the Virtual DOM first, only the difference are then rendered to the real DOM//
//
// LECTURE 66 VUE APP LIFECYCLE//
//CreateApp({..}) beforeCreate() created() beforeMount() mounted()

//LECTURE 67 VUE APP LIFECYCLE PRACTICE//
