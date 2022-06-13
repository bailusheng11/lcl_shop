<template>
  <div ref="wrapper">
    <ul class="content">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import throttle from "@/utils/throttle";
export default {
  props: {
    probeType: {
      type: Number, // 非实时派发scroll事件和位置参数, 类型由0,1,2,3,
      default: 3,
    },
    scrollX: {
      type: Boolean, // 是否横向滚动
      default: false,
    },
    scrollY: {
      type: Boolean, // 是否纵向滚动
      default: true,
    },
    click: {
      type: Boolean, // 是否派发点击事件
      default: true,
    },
    listenScroll: {
      type: Boolean, // 监听滚动
      default: false,
    },
    data: {
      type: Array, // 组件数据,可用于重新刷新scroll组件
      default: null,
    },
    pullup: {
      type: Boolean, // 上拉加载更多,请求接口
      default: false,
    },
    refreshDelay: {
      type: Number, // scroll刷新时间
      default: 20,
    },
    eventPassthrough: {
      type: String, // 支持原生滚动
      default: "",
    },
  },
  mounted() {
    // 也可以使用nextTick来初始化
    setTimeout(() => {
      this.initScroll();
    }, 20);
  },
  methods: {
    // 初始化
    initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      // 根据自己的需求传入配置项
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        pullUpLoad: true,
      });
      //监听滚动的位置
      if (this.$refs.wrapper) {
        this.scroll.on("scroll", (pos) => {
          this.$emit("position", pos.y);
        });
      }
      //上拉加载更多
      if (this.$refs.wrapper) {
        const fn = () => {
          this.$emit("scrollToEnd");
          this.finishPullUp();
        };
        this.scroll.on("pullingUp", throttle(fn, 500));
      }
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    finishPullUp() {
      console.log("我被触发");
      this.scroll && this.scroll.finishPullUp();
    },
  },
  watch: {
    // 这个可以设置data来刷新scroll组件
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
