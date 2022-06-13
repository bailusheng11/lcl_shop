<template>
  <div class="main">
    <betterScroll class="wrapper">
    <div class="userInfo">
      <div class="titles">
        <div class="name">个人中心</div>
        <div class="setting">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img
                src="~@/assets/icon/set.png"
                alt=""
                class="el-icon-arrow-down"
              />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="goBack">
                <span>
                  <img
                    src="~@/assets/icon/loginout.png"
                    alt=""
                    style="width: 15px; height: 15px; vertical-align: middle"
                  />
                </span>
                退出登录</el-dropdown-item
              >
              <el-dropdown-item divided @click.native="updatePwd">
                <img
                  src="~@/assets/icon/password.png"
                  alt=""
                  style="width: 15px; height: 15px; vertical-align: middle"
                />
                修改密码</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="avatarInfo">
        <div class="avatar" @click="goUserInfo">
          <img :src="userInfo.avatar" alt="" v-if="userInfo.avatar" />
          <img src="~@/assets/icon/avatar.jpg" alt="" v-else>
        </div>
        <div class="info">
          <div class="name" v-if="userInfo">
            <span>{{ userInfo.username }}</span>
          </div>
          <div class="go-login" v-else>
            <div @click="goLogin">登录/注册</div>
          </div>
        </div>
      </div>
      <div class="collect_list">
        <div class="card">
          <span>0</span>
          <p>优惠券</p>
        </div>
        <div class="collect" @click="collectDetail">
          <span v-if="userInfo">{{userInfo.collect.length}}</span>
          <p>收藏</p>
        </div>
        <div class="step">
          <span>0</span>
          <p>足迹</p>
        </div>
        <div class="attention">
          <span>0</span>
          <p>我的关注</p>
        </div>
      </div>
    </div>
    <div class="my-order">
      <div class="tips">
        <h3>我的订单</h3>
        <span>全部</span>
      </div>
      <div class="loading">
        <div class="loading-item">
          <div class="icon">
            <img src="~@/assets/icon/pay.png" alt="" />
          </div>
          <span>待付款</span>
        </div>
        <div class="loading-item">
          <div class="icon">
            <img src="~@/assets/icon/get.png" alt="" />
          </div>
          <span>待发货</span>
        </div>
        <div class="loading-item">
          <div class="icon">
            <img src="~@/assets/icon/goods.png" alt="" />
          </div>
          <span>待收货</span>
        </div>
        <div class="loading-item">
          <div class="icon">
            <img src="~@/assets/icon/edit.png" alt="" />
          </div>
          <span>待评价</span>
        </div>
        <div class="loading-item">
          <div class="icon">
            <img src="~@/assets/icon/money.png" alt="" />
          </div>
          <span>退款/售后</span>
        </div>
      </div>
    </div>
    <div class="utils">
      <div class="tips">
        <h3>常用工具</h3>
      </div>
      <div class="util">
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/red.png" alt="" />
          </div>
          <span>红包</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/store.png" alt="" />
          </div>
          <span>关注</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/yuyue.png" alt="" />
          </div>
          <span>预约</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/kefu.png" alt="" />
          </div>
          <span>客服</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/list.png" alt="" />
          </div>
          <span>必抢清单</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/buy.png" alt="" />
          </div>
          <span>拼购</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/vip.png" alt="" />
          </div>
          <span>专属vip</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/free.png" alt="" />
          </div>
          <span>我的试用</span>
        </div>
      </div>
    </div>
    <icon-swiper></icon-swiper>
    <div class="utils">
      <div class="tips">
        <h3>常用工具</h3>
      </div>
      <div class="util">
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/red.png" alt="" />
          </div>
          <span>红包</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/store.png" alt="" />
          </div>
          <span>关注</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/yuyue.png" alt="" />
          </div>
          <span>预约</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/kefu.png" alt="" />
          </div>
          <span>客服</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/list.png" alt="" />
          </div>
          <span>必抢清单</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/buy.png" alt="" />
          </div>
          <span>拼购</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/vip.png" alt="" />
          </div>
          <span>专属vip</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/free.png" alt="" />
          </div>
          <span>我的试用</span>
        </div>
      </div>
    </div>
    <div class="utils">
      <div class="tips">
        <h3>常用工具</h3>
      </div>
      <div class="util">
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/red.png" alt="" />
          </div>
          <span>红包</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/store.png" alt="" />
          </div>
          <span>关注</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/yuyue.png" alt="" />
          </div>
          <span>预约</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/kefu.png" alt="" />
          </div>
          <span>客服</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/list.png" alt="" />
          </div>
          <span>必抢清单</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/buy.png" alt="" />
          </div>
          <span>拼购</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/vip.png" alt="" />
          </div>
          <span>专属vip</span>
        </div>
        <div class="util-item">
          <div class="icon">
            <img src="~@/assets/icon/free.png" alt="" />
          </div>
          <span>我的试用</span>
        </div>
      </div>
    </div>
    </betterScroll>
  </div>
</template>

<script>
import localStorage from "@/utils/localStorage";
import iconSwiper from './user/homeIconSwiper'
import { getUserInfo } from "@/network";
import betterScroll from '@/components/common/betterScroll/betterScroll'
export default {
  components: {
    iconSwiper,
    betterScroll
  },
  mounted() {
    const res = localStorage.getToken("token");
    if (res) {
      this.token = res.token;
      this.id = res.id;
    }
    this.getUserInfo();
  },
  data() {
    return {
      username: "",
      isLogin: false,
      userInfo: "",
      token:"",
      id:""
    };
  },
  methods: {
    //登录
    goLogin() {
      this.$router.push("/login");
    },
    //用户信息页面
    goUserInfo() {
      this.$router.push("/userinfo");
    },
    //获取用户信息
    getUserInfo() {
      if(this.token) {
        console.log(this.token);
        getUserInfo({url:`/user/${this.id}`}).then((res) => {
          console.log(res);
        this.userInfo = res.data[0];
      });
      }
    },
    //退出登录
    goBack() {
      localStorage.clearToken("token");
      location.reload();
    },
    //修改密码
    updatePwd() {
      if(!this.token) {
        this.$message({
          message:"请先登录~",
          type: "info",
          duration:1500
        })
        return 
      }
      this.$router.push("/update");
    },
    //去收藏
    collectDetail() {
      this.$router.push('/collect')
    }
  },
};
</script>

<style lang="less" scoped>
.main {
  font-size: 0.45rem;
  height: 100vh;
  overflow: -moz-scrollbars-none;
  .wrapper{
    height: calc(100vh - 50px);
    overflow: hidden;
  }
  .userInfo {
    height: 6.3rem;
    width: 15rem;
    background-color: skyblue;
    overflow: hidden;
    padding: 0 20px 0 35px;
    .titles {
      display: flex;
      justify-content: flex-end;
      margin-top: 15px;
      .setting {
        width: 25px;
        height: 25px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        flex: 1;
        text-align: center;
      }
    }
    .avatarInfo {
      display: flex;
      .avatar {
        width: 2rem;
        height: 2rem;
        margin-right: 20px;

        img {
          cursor: pointer;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .info {
        font-size: 0.4rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        cursor: pointer;
      }
    }
    .collect_list {
      display: flex;
      text-align: center;
      margin-top: 10px;
      cursor: pointer;
      .card,
      .collect,
      .step,
      .attention {
        flex: 1;
      }
    }
  }
  .my-order {
    margin: -1rem auto 0 auto;
    padding: 0 15px;
    height: 2.9rem;
    width: 90%;
    background-color: #fff;
    border-radius: 7px;
    overflow: hidden;
    .tips {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      h3 {
        color: black;
      }
      span {
        color: #ccc;
      }
    }
    .loading {
      display: flex;
      text-align: center;
      margin-top: 8px;
      .loading-item {
        flex: 1;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .utils{
    width: 90%;
    margin: 15px auto 0 auto;
    padding: 0 15px;
    background-color: #fff;
    border-radius: 7px;
    overflow: hidden;
    .tips{
      margin-top: 8px;
    }
    .util{
      display: flex;
      flex-wrap: wrap;
      text-align: center;

    }
    .util-item{
      width:25%;
      margin: 8px 0;
      img {
          width: 20px;
          height: 20px;
        }
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
