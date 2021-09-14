<template>
  <div class="home">
    <Header />
    <Estore />
    <Navbar />

    <Carousel class="carousel" v-slot="{ currentSlide }">
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`../assets/images xd/${slide}.jpg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
    <ProductNav />
    <Products />
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Estore from "@/components/Estore";
  import Navbar from "@/components/Navbar";
  import Carousel from "@/components/Carousel";
  import Slide from "@/components/Slide";
  import ProductNav from "@/components/ProductNav";
  import Products from "@/components/Products";

  export default {
    name: "Home",
    components: { Header, Estore, Navbar, Carousel, Slide, ProductNav, Products },

    // using the composition api
    setup() {
      const carouselSlides = ["slide-3", "hero1", "hero2", "hero3", "hero4"];

      return { carouselSlides };
    },
  };
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .carousel {
    position: relative;
    max-height: 70vh;
    height: 70vh;
  }

  /* .slide-info {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 50vh;
        height: 50vh;
      } */

  img {
    min-width: 100%;
    height: 70vh;
    object-position: center;
    object-fit: cover;
  }
</style>
