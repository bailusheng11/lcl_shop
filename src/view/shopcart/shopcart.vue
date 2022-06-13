<template>
  <div class="shop-cart">
    <navbar>
      <template #title>购物车</template>
    </navbar>
    <better-scroll class="wrapper" ref="scroll">
      <div class="goods">
        <div
          class="goods-item"
          v-for="(item, index) in goods.shopCart"
          :key="item.username"
        >
          <div class="button" @click="handleCheck(item, index)">
            <img
              src="~@/assets/icon/unSelected.png"
              alt=""
              @load="imgLoad"
              v-if="!item.checked"
            />
            <img src="~@/assets/icon/selected.png" alt="" v-else />
          </div>
          <img :src="item.img" alt="" @click="goodsClick(item.goodsId)" />
          <div class="goods-info">
            <div class="goods-desc" @click="goodsClick(item.goodsId)">
              {{ item.goodsDesc }}
            </div>
            <div class="goods-price">{{ item.price }}</div>
            <div class="goods-count">
              <div class="btn" @click="add(item)">+</div>
              <span class="count">{{ item.count }}</span>
              <div class="btn" @click="sub(item)">-</div>
            </div>
          </div>
        </div>
      </div>
    </better-scroll>
    <div class="allChecked">
      <div class="all">
        <div class="all-checked" @click="AllChecked">
          <img src="~@/assets/icon/selected.png" alt="" v-if="allChecked" />
          <img v-else src="~@/assets/icon/unSelected.png" alt="" />
          <span>全选</span>
        </div>
      </div>
      <div class="allPrice">
        <span>合计:</span>
        <span class="countPrice">￥{{ total }}</span>
        <span class="goPay" @click="goPay">去结算</span>
      </div>
    </div>
    <toast v-if="show">
      <template #title> 购买成功~ </template>
    </toast>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar";
import toast from "@/components/common/toast/toast";

import localStorage from "@/mixin/localStorage";
import betterScroll from "@/mixin/betterScroll";

import { showShopCart, ShopCartChangeNumber,DelShopCartGoods } from "@/network";
export default {
  mixins: [localStorage, betterScroll],
  components: {
    navbar,
    toast,
  },
  data() {
    return {
      goods: "",
      selectIndex: 999,
      allChecked: false,
      total: 0,
      show: false,
    };
  },
  created() {
    this.showShopCart();
  },
  methods: {
    //商品数据
    async showShopCart() {
      const res = await showShopCart();
      this.goods = res.data[0];
      this.goods.shopCart.forEach((item) => {
        this.$set(item, "checked", false);
      });
    },
    //监听图片加载好重新渲染高度
    imgLoad() {
      this.$refs.scroll.refresh();
    },
    //点击跳到商品详情
    goodsClick(id) {
      console.log(id);
      this.$router.push(`/goods/${id}`);
    },
    //按钮选中
    handleCheck(item) {
      this.goods.shopCart.forEach((items) => {
        if (items.goodsId === item.goodsId) {
          item.checked = !item.checked;
        }
        if (item.checked === false) {
          this.allChecked = false;
        }
      });
      const res = this.goods.shopCart.find((item) => item.checked === false);
      if (!res) {
        this.allChecked = true;
      }
      this.CountPrice();
    },
    //全选按钮
    AllChecked() {
      this.allChecked = !this.allChecked;
      if (this.allChecked) {
        this.goods.shopCart.forEach((item) => {
          item.checked = true;
        });
      } else {
        this.goods.shopCart.forEach((item) => {
          item.checked = false;
        });
      }
      this.CountPrice();
      this.$set(this.goods, "shopCart", this.goods.shopCart);
    },
    //计算选中的商品的价格
    CountPrice() {
      const plist = [];
      this.goods.shopCart.forEach((item) => {
        if (item.checked) {
          plist.push(item);
        }
      });
      this.total = plist.reduce((pre, value) => {
        const price = value.price.slice(1);
        console.log(price);
        return value.count * price + pre;
      }, 0);
    },
    //去购买
    goPay() {
      const res = this.goods.shopCart.find((item) => item.checked === true);
      if (!res) {
        this.$message({
          type: "error",
          message: "请先选择商品~",
          duration: 1500,
        });
        return;
      }
      console.log(res);
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
    //购物车数量+1
    async add(item) {
      const res = await ShopCartChangeNumber({
        goodsId: item.goodsId,
        type: "add",
      });
      this.$set(item, "count", res.data.count);
    },
    //购物车数量-100
    async sub(item) {
      if (item.count <= 1) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            DelShopCartGoods({goodsId:item.goodsId})
            this.showShopCart()
          })
          .catch(() => {
            return;
          });
      }else{
        const res = await ShopCartChangeNumber({
          goodsId: item.goodsId,
          type: "sub",
        });
        this.$set(item, "count", res.data.count);
      }

    },
  },
};
</script>

<style lang="less">
.shop-cart {
  font-size: 0.35rem;
  height: 100vh;
  .wrapper {
    height: calc(100vh - 143px);
    overflow: hidden;
  }
  .goods-item {
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
  .allChecked {
    display: flex;
    // align-items:space-between;
    justify-content: space-between;
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: 15rem;
    height: 50px;
    line-height: 50px;
    transform: translateX(-50%);
    padding: 0 20px;
    background-color: black;
    opacity: 0.6;
    color: #fff;
    .all-checked {
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
        vertical-align: middle;
      }
    }
    .allPrice {
      .countPrice {
        color: orange;
        font-size: 0.45rem;
        margin: 0 0.1rem;
      }
      .goPay {
        background-color: red;
        padding: 5px 10px;
        color: #fff;
        border-radius: 15px;
        cursor: pointer;
      }
    }
  }
}
</style>