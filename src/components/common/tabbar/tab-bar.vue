<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  text-align: center;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 15rem;
  height:50px;
  line-height: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  z-index: 9999999999;
}
</style>
