<template>
  <div class="swiper-container" id="rotation">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="mask">
          <img src="~@/assets/icon/icon1.jpg" alt="" />
          <p>京东国际</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon2.jpg" alt="" />
          <p>京东拍卖</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon3.jpg" alt="" />
          <p>看病购药</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon4.jpg" alt="" />
          <p>玩3C</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon5.jpg" alt="" />
          <p>沃尔玛</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon6.jpg" alt="" />
          <p>美妆馆</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon7.jpg" alt="" />
          <p>京东旅行</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon8.jpg" alt="" />
          <p>拍拍二手</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon10.jpg" alt="" />
          <p>9.9元拼</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon9.jpg" alt="" />
          <p>拍拍二手</p>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="mask">
          <img src="~@/assets/icon/icon11.jpg" alt="" />
          <p>京东国际</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon12.jpg" alt="" />
          <p>京东拍卖</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon13.jpg" alt="" />
          <p>看病购药</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon14.jpg" alt="" />
          <p>玩3C</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon15.jpg" alt="" />
          <p>沃尔玛</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon16.jpg" alt="" />
          <p>美妆馆</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon17.jpg" alt="" />
          <p>京东旅行</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon18.jpg" alt="" />
          <p>拍拍二手</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon19.jpg" alt="" />
          <p>9.9元拼</p>
        </div>
        <div class="mask">
          <img src="~@/assets/icon/icon20.jpg" alt="" />
          <p>拍拍二手</p>
        </div>
        <div class="iss"></div>
      </div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'

export default {
  props: {
    homeIcon: {
      type: Array
    }
  },
  mounted() {
    Swiper.use([Autoplay, Navigation, Pagination])
    //实现按钮点击切换以及轮播的效果
    new Swiper('#rotation', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '#rotation_next',
        prevEl: '#rotation_prev'
      },
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style  scoped>
@import url('../../../../node_modules/swiper/swiper-bundle.css');

.swiper-container {
  position: relative;
  width: 90% !important;
  margin: .3rem auto !important;
  overflow: hidden;
  border-radius: 7px;
  background-color: #fff !important;
}
.swiper-wrapper {
  width: 15rem;
  border-radius: 10px;
}
.swiper-slide {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.swiper-pagination{
    bottom:0;
}
.mask {
  flex: 20%;
  cursor: pointer;
  margin: 15px 0;
}
.mask img {
  width: 30px;
  height: 30px;
}
.mask p {
  font-size: 0.45rem;
  color: #666;
}
</style>
