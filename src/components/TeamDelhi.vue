<template>
  <v-card>
    <v-toolbar
      color="yellow"
      flat
      prominent
    >
      <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-3 basil--text">Delhi Capitals</h1>
      </v-card-title>

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
          grow
        >
        
          <v-tab
             v-for="item in items"
            :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
          <DelhiStats />
      </v-tab-item>
      <v-tab-item class="QuizDiv">
          <Quiz />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>

import DelhiStats from './DelhiStats'
import Quiz from './Quiz'

  export default {
      components:{DelhiStats,Quiz},
    data () {
      return {
        tabs: null,
        items:[
                { tab: 'Stats'},
               
                { tab: 'Quick Quiz' }
            ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>

<style scoped>
.QuizDiv{
  margin-top:2%;
}
</style>