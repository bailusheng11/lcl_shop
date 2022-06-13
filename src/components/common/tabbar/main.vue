<template>
  <div class="main">
    <tabbar>
      <tabbar-item path="/home">
        <template #active_img>
          <img src="~@/assets/images/tabbar/home_active.png" alt="" />
        </template>
        <template #deActive_img>
          <img src="~@/assets/images/tabbar/home.png" alt="" />
        </template>
      </tabbar-item>
      <tabbar-item path="/category">
        <template #active_img>
          <img src="~@/assets/images/tabbar/category_active.png" alt="" />
        </template>
        <template #deActive_img>
          <img src="~@/assets/images/tabbar/category.png" alt="" />
        </template>
      </tabbar-item>
      <tabbar-item path="/cart">
        <template #active_img>
          <img src="~@/assets/images/tabbar/cart_active.png" alt="" />
        </template>
        <template #deActive_img>
          <img src="~@/assets/images/tabbar/cart.png" alt="" />
        </template>
      </tabbar-item>
      <tabbar-item path="/mine">
        <template #active_img>
          <img src="~@/assets/images/tabbar/mine_active.png" alt="" />
        </template>
        <template #deActive_img>
          <img src="~@/assets/images/tabbar/mine.png" alt="" />
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "./tab-bar.vue";
import tabbarItem from "./tab-bar-item.vue";
export default {
  components: {
    tabbar,
    tabbarItem,
  },
};
</script>

<style>
.tab-bar-item img {
  margin-top: 5px;
  width: 74px;
  height: 44px;
}
</style>