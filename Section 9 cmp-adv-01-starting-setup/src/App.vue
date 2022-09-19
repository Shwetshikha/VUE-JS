<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader/>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>


    <!-- <badge-list></badge-list> -->
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponents === 'manage-goals'"></manage-goals> -->
    <!-- <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['another-prop'] }}</p>
    
     
    </course-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
      <!--//DYNAMIC COMPONENTS//-->
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  // import BadgeList from './components/BadgeList.vue';
  // import UserInfo from './components/UserInfo.vue';
  // import CourseGoals from './components/CourseGoals.vue';
  import ActiveGoals from './components/ActiveGoals.vue';
  import ManageGoals from './components/ManageGoals.vue';
  


export default {
    components: {              //LOCAL COMPONENT REGISTRATION//
        TheHeader,
        // BadgeList,
        // UserInfo,
        // CourseGoals,
        ActiveGoals,
        ManageGoals
    },
    data() {
        return {
          selectedComponent: 'active-goals',
            activeUser: {
                name: "Maximilian Schwarzmüller",
                description: "Site owner and admin",
                role: "admin",
            },
        };
    },
    methods: {
      setSelectedComponent(cmp) {
        this.selectedComponent = cmp;
      },
    },
    // components: { TheHeader }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>