import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy'
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebase/firebaseConfig';
import './assets/styles/main.scss';

Vue.config.productionTip = false;

Vue.use(Buefy);


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');