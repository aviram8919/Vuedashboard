<template>
  <nav>
    <v-toolbar>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="ext-uppercase grey--text">
        <span>IPL</span>
        <span class="font-weight-light">Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
        { icon: 'Home', text:'Home', route:'/'},
        { icon: 'Account', text:'Account', route:'/Account'}

    ]
  }),
};
</script>