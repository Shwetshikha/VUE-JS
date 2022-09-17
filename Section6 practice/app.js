const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
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
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
