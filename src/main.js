import Vue from 'vue';
import starRating from './components/StarRating.vue'
import inputRating from './components/InputRating.vue'


new Vue({
  el: "#starRating",
  components: { starRating },
  template: '<star-rating :grade="0" :maxGrade="5" />'
});

new Vue({
  el: "#inputRating",
  components: { inputRating },
  template: '<input-rating/>'
});

