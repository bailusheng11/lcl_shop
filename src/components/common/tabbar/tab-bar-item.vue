<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="tab" v-if="isActive"><slot name="active_img"></slot></div>
    <div class="tab" v-else><slot name="deActive_img"></slot></div>
  </div>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  props: {
    path: {
      type: String,
      default: "/home",
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped lang="less">
.tab-bar-item {
  flex: 1;
  cursor: pointer;
  .tab {
    height: 1rem;
  }
}
</style>
