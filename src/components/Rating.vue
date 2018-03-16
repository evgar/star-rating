<template>
  <div class="rating">
    <ul class="rating__list">
      <li class="list__item" v-for="(rate, index) in maxRating" @click="onClick(index)" @mouseover="onHover(index)" @mouseleave="onMouseLeave">
        <icon class="list__icon" :name="index >= rating ? 'star-o' : 'star'"></icon>
      </li>
    </ul>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  import 'vue-awesome/icons/star'
  import 'vue-awesome/icons/star-o'

  export default {
    data() {
      return {
        rating: 0,
        maxRating: 5,
        initialRating: 0
      }
    },
    components: { Icon },
    methods: {
      onClick: function(index) {
        this.rating = index + 1;
        this.initialRating = this.rating;
      },
      onHover: function(index) {
        this.rating = index + 1;
      },
      onMouseLeave: function() {
        this.rating = this.initialRating;
      }
    }
  }
</script>

<style scoped>
  .rating {

  }
  .rating__list {
    display: flex;
    list-style: none;
  }
  .list__item {
    padding-right: 15px;
    cursor: pointer;

  }
  .list__icon {
    color: gold;
  }

</style>
