<template>
  <div class="rating">
    <ul class="rating__list">
      <li class="list__item" v-for="rate in maxRating">
        <icon class="list__icon" name="star"></icon>
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
        rating: 3,
        maxRating: 5
      }
    },
    components: { Icon }
  }
</script>

<style scoped>
  .rating {
    
  }
  .rating__list {

  }
  .list__item {

  }
  .list__icon {

  }
</style>
