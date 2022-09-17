const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Shwet Shikha",
          phone: "011-24567",
          email: "shwet@shorthillstech.com",
        },
        {
          id: "julie",
          name: "Manvi Kapoor",
          phone: "011-24567",
          email: "kapoor@tech.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `  
  <li >
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email}}</li>
    </ul>
  </li>
`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Shwet Shikha",
        phone: "011-24567",
        email: "shwet@shorthillstech.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
