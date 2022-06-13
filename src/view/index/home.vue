<template>
  <div id="home">
    <div class="header">
      <div class="category">
        <img src="~@/assets/icon/category.png" alt="" />
      </div>
      <el-input
        class="search"
        prefix-icon="el-icon-search"
        placeholder="请输入要查找的"
      ></el-input>
      <div class="login">登录</div>
    </div>
    <better-scroll
      class="wrapper"
      ref="scroll"
      :pullup="true"
      @position="Position"
      @scrollToEnd="scrollToEnd"
    >
      <home-swiper :imgs="imgs"></home-swiper>
      <div class="go">
        <div class="go-item">
          <h4>限时秒杀</h4>
          <p>人气好货限时抢</p>
          <div class="goods">
            <div class="goods1">
              <img src="~@/assets/goods/goods1.jpg" alt="" />
              <p style="color: #ff9b00">￥9.8</p>
            </div>
            <div class="goods2">
              <img src="~@/assets/goods/goods2.jpg" alt="" />
              <p style="color: #ff9b00">￥9.8</p>
            </div>
          </div>
        </div>
        <div class="go-item">
          <h4>大聚惠</h4>
          <p>聚优品 · 惠生活</p>
          <div class="goods">
            <div class="goods1">
              <img src="~@/assets/goods/goods3.jpg" alt="" />
              <div class="title">百草味</div>
            </div>
            <div class="goods2">
              <img src="~@/assets/goods/goods4.jpg" alt="" />
              <div class="title">干脆面</div>
            </div>
          </div>
        </div>
        <div class="go-item">
          <h4>新品首发</h4>
          <p>大牌新机0元试</p>
          <div class="goods">
            <div class="goods1">
              <img src="~@/assets/goods/goods5.jpg" alt="" />
            </div>
            <div class="goods2">
              <img src="~@/assets/goods/goods6.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="go-item">
          <h4>苏宁拼购</h4>
          <p>2人拼更实惠 全场包邮</p>
          <div class="goods">
            <div class="goods1">
              <img src="~@/assets/goods/goods7.jpg" alt="" />
              <div class="title">2人拼28.9</div>
            </div>
            <div class="goods2">
              <img src="~@/assets/goods/goods8.jpg" alt="" />
              <div class="title">2人拼6.9</div>
            </div>
          </div>
        </div>
      </div>
      <icon-swiper></icon-swiper>
      <div class="nav">
        <span
          v-for="(item, index) in goods"
          :key="index"
          @click="selectTab(index)"
          :class="{ active: TabIndex === index }"
        >
          {{ item }}
          <div class="line" v-if="index === TabIndex"></div>
        </span>
      </div>
      <goods :goods="goodsInfo"></goods>
    </better-scroll>
    <back-top v-if="positionY > 1000" @click.native="backTop"> 1000"></back-top>
  </div>
</template>

<script>
import homeSwiper from "@/components/common/swiper/swiper";
import goods from "@/components/common/goods/goods";

import backTop from "@/mixin/backTop";
import betterScroll from "@/mixin/betterScroll";

import iconSwiper from "@/view/mine/user/homeIconSwiper";
import { getAllGoods } from "@/network";
export default {
  mixins: [backTop, betterScroll],
  name: "home",
  components: {
    homeSwiper,
    iconSwiper,
    goods,
  },
  created() {
    this.getAllGoods();
  },
  mounted() {
    //监听图片加载完成
    this.$bus.$on("imgLoad", () => {
      if (this.$refs.scroll) {
        this.$refs.scroll.refresh();
        this.$refs.scroll.scrollTo(0, -this.positionY, 0);
      }
    });
  },
  data() {
    return {
      imgs: [
        {
          img: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/222955/9/7649/147448/61cc0324E3bdc21ec/5eb7195fed600cc1.jpg!cr_1053x420_4_0!q70.jpg.dpg",
        },
        {
          img: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/158448/4/22738/119968/61b6c60eE8bc90892/debeb83e53e402b2.jpg!cr_1053x420_4_0!q70.jpg.dpg",
        },
        {
          img: "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/213405/39/4938/157338/61954293E2f8ae54d/9a76613fc0d61feb.jpg!cr_1125x449_0_166!q70.jpg.dpg",
        },
      ],
      goods: ["手机", "衣服", "玩偶"],
      goodsInfo: "",
      TabIndex: 0,
      brand: "phone",
      offset: 0,
      limit: 6,
      num: 0,
    };
  },
  methods: {
    //获取商品数据
    async getAllGoods() {
      const res = await getAllGoods({
        url: `/${this.brand}?offset=${this.offset}&limit=${this.limit}`,
      });
      this.goodsInfo = res.data;
      this.$refs.scroll.refresh();
    },
    selectTab(index) {
      this.TabIndex = index;
      if (index === 0) {
        this.brand = "phone";
        this.getAllGoods();
      }
      if (index === 1) {
        this.brand = "clothes";
        this.getAllGoods();
      }
      if (index === 2) {
        this.brand = "doll";
        this.getAllGoods();
      }
    },
  },
  activated() {
    this.$nextTick(() => {
      console.log("chufa");
      if (this.positionY > 200) {
        console.log(this.positionY);
        this.$refs.scroll.scrollTo(0, -this.positionY, 0);
      }
    });
  },
  deactivated() {
    console.log(this.positionY);
  },
};
</script>

<style lang="less" scoped>
#home {
  height: 100vh;
  position: relative;
  font-size: 0.45rem;
  .wrapper {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
  .header {
    font-size: 16px;
    padding: 0 3px;
    display: flex;
    height: 49px;
    width: 15rem;
    line-height: 49px;
    z-index: 9999;
    background-color: skyblue;
    .category,
    .login {
      color: #fff;
      width: 36px;
      text-align: center;
      img {
        width: 25px;
        height: 25px;
        vertical-align: middle;
      }
    }
    .search {
      flex: 1;
      margin: 0 5px;
    }
  }
  .go {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: space-between;
    background-color: #fff;
    .go-item {
      width: 50%;
      overflow: hidden;
      padding: 10px 15px;
      .goods {
        display: flex;
        .goods1,
        .goods2 {
          text-align: center;
          width: 48%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .go-item:nth-child(2n-1) {
    border-right: 1px solid #f2f2f2;
  }

  .nav {
    margin-top: 10px;
    width: 90%;
    display: flex;
    cursor: pointer;
    text-align: center;
    // background-color: #fff;
    align-items: center;
    padding: 5px;
    margin-left: 3%;
    border-radius: 7px;
    span {
      flex: 1;
      height: 35px;
      line-height: 35px;
      position: relative;
      .line {
        width: 50px;
        height: 3px;
        background: orange;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .active {
    color: orange;
  }
}
</style>
