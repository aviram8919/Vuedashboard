import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import "chart.js";
import "hchs-vue-charts";
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//importing routing
import VueRouter from 'vue-router'
import About from './views/About'
import Team from './components/Team'
import ChennaiData from './components/ChennaiData'
import Hometab from './components/Hometab'
import Quiz from './components/Quiz'
import Facts from './components/Facts'
import TeamChennai from './components/TeamChennai'
import TeamMumbai from './components/TeamMumbai'
import TeamPunjab from './components/TeamPunjab'
import TeamBanglore from './components/TeamBanglore'
import TeamKolkata from './components/TeamKolkata'
import TeamRajasthan from './components/TeamRajasthan'
import TeamDelhi from './components/TeamDelhi'
import TeamHyderabad from './components/TeamHyderabad'




import '../public/registerServiceWorker'
import VueApexCharts from 'vue-apexcharts'

Vue.use(window.VueCharts);
Vue.component('apexchart', VueApexCharts);

Vue.use(VueRouter);
const routes = [
  {path:'/',component:Hometab},
  {path:'/about',component:About},
  {path:'/team',component:Team},
  {path:'/teamdata',component:ChennaiData},
  {path:'/quiz',component:Quiz},
  {path: '/facts',component:Facts},
  {path: '/chennai', component:TeamChennai},
  {path: '/mumbai', component:TeamMumbai},
  {path: '/punjab', component:TeamPunjab},
  {path: '/banglore', component:TeamBanglore},
  {path: '/kolkata', component:TeamKolkata},
  {path: '/delhi', component:TeamDelhi},
  {path: '/hyderabad', component:TeamHyderabad},
  {path: '/rajasthan', component:TeamRajasthan}

]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  vuetify,
  router:router,
  render: h => h(App)
}).$mount('#app')
