<template>
  <v-app class="grey-lighten-4">
     
    <v-main>
     <router-view></router-view>
    </v-main>

    <Footer /> 
    
  </v-app>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {Footer}

 
};
</script>
