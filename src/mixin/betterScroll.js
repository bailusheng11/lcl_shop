import betterScroll from "@/components/common/betterScroll/betterScroll";
const scroll = {
    components: {
        betterScroll
    },
    methods: {
        Position(y) {
            this.positionY = -y;
        },
        //加载更多
        async scrollToEnd() {
            this.limit += 2;
            this.getAllGoods();
            this.$refs.scroll.finishPullUp();
        },
    }
}

export default scroll