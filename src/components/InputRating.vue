<template>
  <div class="input">
    <input class="input__range" type="range" min="1" :max="maxGrade" step="1"  :value="grade">
    <span>{{ grade }}</span>
  </div>
</template>

<script>

  export default  {
    props: {
      max: {
        type: Number,
      },
      grade: {
        type: Number,
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
//        console.log(event);
//        this.rating = event.target.value;
      }
    }
  }
</script>

<style scoped>

  .input__range {
    -webkit-appearance: none;
    width: 20%;
    margin: 7.3px 0;
  }
  .input__range:focus {
    outline: none;
  }
  .input__range::-webkit-slider-runnable-track {
    width: 100%;
    height: 11.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #f3d23e;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  .input__range::-webkit-slider-thumb {
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
  .input__range:focus::-webkit-slider-runnable-track {
    background: #f3d23e;
  }
  .input__range::-moz-range-track {
    width: 100%;
    height: 11.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: rgba(48, 113, 169, 0.78);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  .input__range::-moz-range-thumb {
    box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
    border: 1.8px solid #00001e;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
  }
  .input__range::-ms-track {
    width: 100%;
    height: 11.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  .input__range::-ms-fill-lower {
    background: rgba(42, 100, 149, 0.78);
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  .input__range::-ms-fill-upper {
    background: rgba(48, 113, 169, 0.78);
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  .input__range::-ms-thumb {
    box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
    border: 1.8px solid #00001e;
    height: 26px;
    width: 26px;
    border-radius: 15px;
    background: #ffffff;
    cursor: pointer;
    height: 11.4px;
  }
  .input__range:focus::-ms-fill-lower {
    background: rgba(48, 113, 169, 0.78);
  }
  .input__range:focus::-ms-fill-upper {
    background: rgba(54, 126, 189, 0.78);
  }
</style>
