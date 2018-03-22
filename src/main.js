import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: "#app",
  components: { App },
  template: '<App />',
});


// import inputRating from './components/InputRating.vue'
//
// var star = new Vue({
//   el: "#starRating",
//   components: { starRating },
//   template: '<star-rating :grade="0" :maxGrade="5" />',
//   data: store
// });
//
// var input = new Vue({
//   el: "#inputRating",
//   components: { inputRating },
//   template: '<input-rating :max="5"/>',
//   data: store
// });

