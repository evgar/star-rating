<template>
  <div class="rating">
    <ul class="rating-list">
      <li class="list-item" :class="index < grade ? 'active' : '' " v-for="(rate, index) in maxRating"
          @click="setRating(index)">
        <icon class="list-icon" :name="index >= grade ? 'star-o' : 'star'"></icon>
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
    name: 'v-star-rating',
    components: {
      Icon
    },
    props: {
      grade: {
        type: Number,
        default: 0
      },
      maxGrade: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        rating: this.grade,
        maxRating: this.maxGrade
      }
    },

    methods: {
      setRating(index) {
        this.rating = this.rating === index + 1 ? this.rating - 1 : index + 1;
        this.$emit('changed', this.rating);
      }
    },
    computed: {
      getStarCount() {
        return `${this.rating} of ${this.maxRating}`
      }
    }
  }
</script>

<style scoped>
  .rating-list {
    display: flex;
    list-style: none;
    color: #a7a8a8;
  }

  .rating-list:hover .list-item {
    color: #f3d23e;
  }

  .list-item:hover ~ .list-item:not(.active) {
    color: inherit;
  }

  .list-item {
    padding-right: 15px;
    cursor: pointer;
  }

  .active {
    color: #f3d23e;
  }
</style>
