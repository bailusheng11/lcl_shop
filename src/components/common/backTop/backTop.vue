<template>
  <div class="back-top">
      <img src="~@/assets/icon/top.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.back-top {
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 28px;
    height: 28px;
    z-index:99999999999;
    
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>