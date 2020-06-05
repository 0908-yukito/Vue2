import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
const config = {
  apiKey:'AIzaSyAgRHX9htGL-9B3OXqoH3dxnPhXTQ2Fn1U',
  projectId:'text-4f266',
  authDomain:'text-4f266.firebaseapp.com',
  databaseURL:'https://text-4f266.firebaseio.com',
  storageBucket:'text-4f266.appspot.com'
}




firebase.initializeApp(config);

export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
