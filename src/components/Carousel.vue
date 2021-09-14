<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- navigation -->
    <div class="navigate">
      <div @click="prevSlide" class="toggle-page left">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- pagination -->
    <!-- <div class="pagination">
      <span
        @click="goToSlide"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div> -->
  </div>
</template>

<script>
  import { ref, onMounted } from "vue";
  export default {
    setup() {
      let currentSlide = ref(1);
      const getSlideCount = ref(null);
      const autoPlayEnabled = ref(true);
      const timeOutDuration = ref(10000);

      // method for next slide
      const nextSlide = () => {
        // checking if the currentslide value is equal to the length of the arrays
        if (currentSlide.value === getSlideCount.value) {
          currentSlide.value = 1;
          return;
        }
        currentSlide.value += 1;
      };

      // The prev slide
      const prevSlide = () => {
        // checking the value of the currentSlide if its 1. if so, that means cannot go back since its the first slide
        if (currentSlide.value === 1) {
          currentSlide = 1;
          return;
        }
        currentSlide.value -= 1;
      };

      // Pagination fucntion to go the chosen slide
      const goToSlide = (index) => {
        currentSlide.value = index + 1;
      };

      // Function for autoPlay
      const autoPlay = () => {
        setInterval(() => {
          // Calling our nextSlide Function
          nextSlide();
        }, timeOutDuration.value);
      };

      if (autoPlayEnabled.value) {
        autoPlay();
      }

      onMounted(() => {
        getSlideCount.value = document.querySelectorAll(".slide").length;
      });

      return { currentSlide, nextSlide, prevSlide, goToSlide };
    },
  };
</script>

<style scoped>
  .navigate {
    padding: 0 1rem;
    /* height: 50%; */
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .toggle-page {
    display: flex;
    flex: 1;
  }
  .right {
    justify-content: flex-end;
    /* margin-bottom: -50%; */
  }

  i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: blue;
    color: #fff;
  }

  .pagination {
    position: absolute;
    /* bottom: 50px; */
    top: 50%;
    left: 50%;
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
  span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .active {
    background-color: #6347c7;
  }
</style>