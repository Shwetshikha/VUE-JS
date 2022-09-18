<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? '(favorite)' : ''}}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name', 
  //   'phoneNumber', 
  //   'emailAddress',
  //   'isFavorite'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: 
    {type: String,
    required: true},

    phoneNumber: {
      type: String,
    required: true},

    emailAddress: {
      type: String,
      required: true},

    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    // validator: function(value) {
    //   return value === '1' || value === '0'

    // }
  },

  },
  emits: ['toggle-favorite', 'delete'],
  // emits: ['toggle-favorite'],
  // emits: {
  //   'toggle-favorite': function(id) {
  //     if(id) {
  //       return true;
  //     } else {
  //       console.warning('Id is Missing')
  //       return false;
  //     }
  //   },
  // }
  


  data() {
    return {
      detailsAreVisible: false,
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "0123 45678 90",
      //   email: "manuel@localhost.com",
      // },
      friendIsFavorite: this.isFavourite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;  // this one is example of parent to child communication// 
      this.$emit('toggle-favorite', this.id);   // this is child to parent communication

      // if (this.friendIsFavorite === '1'){
      //   this.friendIsFavorite = '0';
      // } else {
      //   this.friendIsFavorite = '1';
      // }
    },
    // deleteFriend(){
    //   // this.$emit('delete')
    // }
  }
};
</script>