<template>
  <div class="goods">
    <div
      class="goods-item"
      v-for="item in goods"
      :key="item.id"
      @click="imgClick(item.id)"
    >
      <img :src="item.img" alt="" @load="imgLoad" />
      <div class="goods-detail">
        <p class="desc">{{ item.desc }}</p>
        <div class="info">
          <span class="price">{{ item.price }}</span>
          <span class="title">{{ item.title }}</span>
          <span class="save"><img src="~@/assets/icon/save.png" alt="" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {},
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
    imgClick(id) {
      console.log(id);
      this.$router.push(`/goods/${id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  .goods-item {
    width: 47%;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    margin: 0.1rem;
    img {
      width: 100%;
      height: 80%;
    }
    .goods-detail {
      padding: 0 10px 0 15px;
      margin-top: 5px;
      .desc {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .info {
        margin-top: 5px;
        display: flex;
        align-items: center;
        .title {
          margin: 0 10px;
        }
        .price {
          color: orange;
        }
        .save {
          img {
            width: 0.4rem;
            height: 0.4rem;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
