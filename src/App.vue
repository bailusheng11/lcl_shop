<template>
  <div id="app">
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="isActive"></main-tab-bar>
  </div>
</template>
<script>
import mainTabBar from "./components/common/tabbar/main.vue";
export default {
  name: "App",
  data() {
    return {
      active: "",
    };
  },
  components: {
    mainTabBar,
  },
  computed: {
    isActive() {
      const path = this.$route.path;
      if (
        path === "/home" ||
        path === "/category" ||
        path === "/cart" ||
        path === "/mine"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {},
};
</script>
<style lang="less">
body {
  background-color: rgba(247, 247, 247);
}
@import url("./assets/css/media");
</style>
