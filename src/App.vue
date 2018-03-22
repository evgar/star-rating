<template>
  <div id="app">
    <StarRating :grade="0" :maxGrade="5"></StarRating>
    <InputRating :max="5"></InputRating>
  </div>
</template>

<script>
  import Vue from 'vue';
  import StarRating from './components/StarRating.vue'
  import InputRating from './components/InputRating.vue'


export default {
    name: 'app',
    components: {StarRating, InputRating},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }


//
//  var input = new Vue({
//    el: "#inputRating",
//    components: { inputRating },
//    template: '<input-rating :max="5"/>'
//  });
</script>

<style>

</style>
