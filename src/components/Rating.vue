<template>
  <div class="rating">
    <ul class="rating__list">
      <li class="list__item" :class="index < rating ? 'active' : '' "  v-for="(rate, index) in maxRating" @click="onClick(index)">
        <icon class="list__icon" :name="index >= rating ? 'star-o' : 'star'"></icon>
      </li>
    </ul>
    <span>{{ getStarCount }}</span>
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
        maxRating: 5
      }
    },
    components: { Icon },
    methods: {
      onClick: function(index) {
        this.rating = index + 1;
      }
    },
    computed: {
      getStarCount() {
        return `${this.initialRating} of ${this.maxRating}`
      }
    }
  }
</script>

<style scoped>
  .rating__list {
    display: flex;
    list-style: none;
    color: #a7a8a8;
  }
  .rating__list:hover .list__item{
    color: #f3d23e;
  }
  .list__item:hover ~ .list__item:not(.active) {
    color: inherit;
  }

  .list__item {
    padding-right: 15px;
    cursor: pointer;

  }
  .active {
    color: #f3d23e;
  }
</style>
