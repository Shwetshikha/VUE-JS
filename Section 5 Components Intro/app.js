// Lecture 69 70- MODULE INTRODUCTION AND UNDERSTANDING THE PROBLEM//
// LECTURE 71 INTRODUCING COMPONENTS
//
const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "011-24555555",
          email: "manuel@123.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "01167687",
          email: "julie1234@n.com",
        },
      ],
    };
  },
  //   methods: {
  //     toggleDetails() {
  //       this.detailsAreVisible = !this.detailsAreVisible;
  //     },
  //   },
});

app.component("friend-contact", {
  template: `<li v-for="friend in friends" :key="friend.id">
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails()">
    {{ detailsAreVisible ? 'Hide' : 'show'}} Details
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{ friend.phone }}</li>
    <li><strong>Email:</strong> {{ friend.email }}</li>
  </ul>
</li>`,
  data() {
    return { detailsAreVisible: false };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
