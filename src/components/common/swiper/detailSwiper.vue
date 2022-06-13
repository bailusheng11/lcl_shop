<template>
  <div class="swiper-container" id="rotation">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in imgs" :key="item.img">
        <img :src="item" alt="" />
      </div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";

export default {
  props: {
    imgs: {},
  },
  methods: {
    load() {
      console.log(1);
      this.$emit("load");
    },
  },
  mounted() {
    Swiper.use([Autoplay, Navigation, Pagination]);
    //实现按钮点击切换以及轮播的效果
    new Swiper("#rotation", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        loop: true,
      },
      navigation: {
        // 如果需要前进后退按钮
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style  scoped lang="less">
@import url("../../../../node_modules/swiper/swiper-bundle.css");
.swiper-container {
  position: relative;
  overflow: hidden;
  width: 15rem;
}
.swiper-slide {
  cursor: pointer;
  border: 1px solid #ccc;
  height: 9rem;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
