<template>
  <div class="toast">
    <div class="img">
      <slot name="tips">
        <img src="~@/assets/icon/succ.png" alt="" class="tips" />
      </slot>
    </div>
    <div class="text">
      <slot name="title"> 加入购物车 </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.toast {
  font-size: 0.45rem;
  width: 25%;
  height: 4rem;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99999999;
  color: #fff;
  transform: translate(-50%, -50%);
  text-align: center;
//   line-height: 3.6rem;
  border-radius: 7px;
  background: rgba(0, 0, 0, 0.7);
  .img {
    width: 100%;
    height: 75%;
    text-align: center;
    padding: 1rem 1rem 0 1rem;
    .tips {
      width: 70%;
      height: 70%;
      img {
        width: 70%;
        height: 70%;
      }
    }
  }
  .text {
    position: relative;
    width: 100%;
    height:1.5rem;
    text-align:center;
    // line-height: 50px;
  }
}
</style>