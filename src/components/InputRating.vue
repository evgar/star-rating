<template>
  <div class="input">
    <input class="input-range" type="range" min="1" :max="maxGrade" step="1"  :value="grade" @change="onChange">
    <span>{{ grade }}</span>
  </div>
</template>

<script>

  export default  {
    name: 'v-input-rating',
    props: {
      max: {
        type: Number,
        default: 5
      },
      grade: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        maxGrade: this.max,
        rating: this.grade
      }
    },
    methods: {
      onChange: function(event) {
       this.rating = +event.target.value;
       this.$emit('setRating', this.rating);
      }
    }
  }
</script>

<style scoped>

  .input-range {
    -webkit-appearance: none;
    width: 20%;
    margin: 7.3px 0;
  }
  .input-range:focus {
    outline: none;
  }
  .input-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 11.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #f3d23e;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  .input-range::-webkit-slider-thumb {
    box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
    border: 1.8px solid #00001e;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7.5px;
  }
  .input-range:focus::-webkit-slider-runnable-track {
    background: #f3d23e;
  }
  .input-range::-moz-range-track {
    width: 100%;
    height: 11.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: rgba(48, 113, 169, 0.78);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  .input-range::-moz-range-thumb {
    box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
    border: 1.8px solid #00001e;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
  }
  .input-range::-ms-track {
    width: 100%;
    height: 11.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  .input-range::-ms-fill-lower {
    background: rgba(42, 100, 149, 0.78);
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  .input-range::-ms-fill-upper {
    background: rgba(48, 113, 169, 0.78);
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  .input-range::-ms-thumb {
    box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
    border: 1.8px solid #00001e;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
    height: 11.4px;
  }
  .input-range:focus::-ms-fill-lower {
    background: rgba(48, 113, 169, 0.78);
  }
  .input-range:focus::-ms-fill-upper {
    background: rgba(54, 126, 189, 0.78);
  }
</style>
