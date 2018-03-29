<template>
  <div id="app">
    <v-star-rating :grade="grade" @changed="setGrade"></v-star-rating>
    <v-input-rating :grade="grade" @setRating="setGrade" @click.native=""></v-input-rating>
  </div>
</template>

<script>
  import Vue from 'vue';
  import vStarRating from './components/StarRating.vue'
  import vInputRating from './components/InputRating.vue'


export default {
    name: 'app',
    components: {vStarRating, vInputRating},
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
