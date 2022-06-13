<template>
  <div class="collect">
    <navbar>
      <template #title>收藏中心</template>
    </navbar>
    <betterScroll class="wrapper">
      <div class="goods">
        <div
          class="goods-item"
          v-for="item in collectGoods"
          :key="item.username"
          @click="ItemClick(item.collect.goodsId)"
        >
          <img
            :src="item.collect.img"
            alt=""
          />
          <div class="goods-info">
            <div class="goods-desc" @click="goodsClick(item.goodsId)">
              {{ item.collect.goodsDesc }}
            </div>
            <div class="goods-price">{{ item.collect.goodsPrice }}</div>
          </div>
        </div>
      </div>
    </betterScroll>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar";

import betterScroll from "@/mixin/betterScroll";

import { ShowCollectGoods } from "@/network/collect";

export default {
  mixins: [betterScroll],
  components: {
    navbar,
  },
  created() {
    this.showCollectGoods();
  },
  data() {
    return {
      collectGoods: "",
    };
  },
  methods: {
    ItemClick(id) {
      this.$router.push(`/goods/${id}`);
    },
    async showCollectGoods() {
      const res = await ShowCollectGoods();

      this.collectGoods = res.data;
      console.log(this.collectGoods);
    },
  },
};
</script>

<style lang="less" scoped>
.collect {
  height: 100vh;
  .wrapper{
      height: calc(100vh - 49px);
      overflow: hidden;
  }
  .goods-item {
    font-size: 0.45rem;
    display: flex;
    height: 4rem;
    width: 100%;
    margin-top: 10px;
    border-radius: 7px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    align-items: center;
    padding: 0 20px;
    overflow: hidden;
    .button {
      width: 25px;
      height: 25px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    img {
      width: 30%;
      height: 80%;
      border-radius: 15px;
    }
    .goods-info {
      flex: 1;
      margin-left: 20px;
      .goods-price {
        margin-top: 10%;
        color: orange;
      }
      .goods-count {
        display: flex;
        justify-content: flex-end;
        // text-align: right;
        margin: 0 2px;
        .count {
          margin: 0.06rem;
        }
        .btn {
          // padding: 3px 6px;
          height: 20px;
          width: 20px;
          line-height: 20px;
          text-align: center;
          border: 1px solid #ccc;
        }
      }
    }
  }
}
</style>