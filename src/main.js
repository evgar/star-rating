import Vue from 'vue';
import Rating from './components/Rating.vue'


new Vue({
  el: "#app",
  components: { Rating },
  template: '<rating :grade="0" :maxGrade="5" />'
});
