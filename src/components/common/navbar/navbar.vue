<template>
  <div class="title">
    <div class="container">
      <div class="go-back" @click="goBack">
        <img src="~@/assets/icon/back1.png" alt="" />
      </div>
      <div class="login-tip">
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less">
.container {
  display: flex;
  padding: 0 0.4rem 0 0.6rem;
  height: 49px;
  // text-align: center;
  line-height: 49px;
  background-image: linear-gradient(#e0c3fc, #8ec5fc);
  color: #fff;
  .go-back {
    width: 0.8rem;
    height: 0.8rem;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .login-tip {
    flex: 1;
    text-align: center;
    font-size: 0.6rem;
  }
}
</style>
