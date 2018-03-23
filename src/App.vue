<template>
  <div id="app">
    <StarRating :grade="grade" :maxGrade="5" v-on:setRating="setGrade"></StarRating>
    <InputRating :grade="grade" :max="5" v-on:setRating="setGrade"></InputRating>
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
        msg: 'Welcome to Your Vue.js App',
        grade: 1
      }
    },
    methods: {
      setGrade: function (grade) {
        this.grade = grade;
        console.log(grade);
      }
    }
  }
</script>

<style>

</style>
