<template>
  <div class="user-info">
    <div class="mask" v-show="isMask" @click="showMask"></div>
    <navbar>
      <template #title>个人资料</template>
    </navbar>
    <div class="info">
      <div class="info-detail" @click="handleAvatar(userInfo.userAvatar_url)">
        <span class="name">头像</span>
        <div class="avatarInfo">
          <span class="avatar">
            <img :src="userInfo.avatar" alt="" v-if="userInfo.avatar" />
            <img src="~@/assets/icon/avatar.jpg" alt="" v-else />
          </span>
          <span class="right">
            <img src="~@/assets/icon/right.png" alt="" />
          </span>
        </div>
      </div>
      <div class="info-detail" @click="changeUsername">
        <span class="name">昵称</span>
        <div class="avatarInfo">
          <span v-if="userInfo.username"> {{ userInfo.username }}</span>
          <span v-else>--未填写--</span>
          <span class="right">
            <img src="~@/assets/icon/right.png" alt="" />
          </span>
        </div>
      </div>
      <div class="info-detail" @click="changeSex">
        <span class="name">性别</span>
        <div class="avatarInfo">
          <span v-if="userInfo.sex"> {{ userInfo.sex }} </span>
          <span v-else>--未填写--</span>
          <span class="right">
            <img src="~@/assets/icon/right.png" alt="" />
          </span>
        </div>
      </div>
      <div class="info-detail" @click="changeAge">
        <span class="name">年龄</span>
        <div class="avatarInfo">
          <span v-if="userInfo.age">{{ userInfo.age }}</span>
          <span v-else>--未填写--</span>
          <span class="right">
            <img src="~@/assets/icon/right.png" alt="" />
          </span>
        </div>
      </div>
      <div class="info-detail" @click="changeAddress">
        <span class="name">地区</span>
        <div class="avatarInfo">
          <span v-if="showAddress">
            {{ userInfo.address ? userInfo.address : "--未填写--" }}
            <span class="right">
              <img src="~@/assets/icon/right.png" alt="" />
            </span>
          </span>

          <span v-else>
            <el-cascader
              size="large"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange"
            >
            </el-cascader>
          </span>
        </div>
      </div>
      <div class="info-detail">
        <span class="name">个签签名</span>
        <div class="avatarInfo">
          <span class="signature" v-if="userInfo.signature"> {{ userInfo.signature}} </span>
          <span v-else>--未填写--</span>
          <span class="right">
            <img src="~@/assets/icon/right.png" alt="" />
          </span>
        </div>
      </div>
      <div class="info-detail">
        <span class="name">加好友介绍</span>
        <div class="avatarInfo">
          <span v-if="userInfo.introduce"> {{ userInfo.introduce }}</span>
          <span>--未填写--</span>
          <span class="right">
            <img src="~@/assets/icon/right.png" alt="" />
          </span>
        </div>
      </div>
    </div>
    <div class="loading" v-show="isShow">
      <template v-if="dialogText">
        <div class="preview" @click="preView">大图预览</div>
        <el-upload
          class="avatar-uploader"
          :action="upload"
          :headers="headers"
          :show-file-list="false"
          name="avatar"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <div class="changeAvatar">
            <span>更换头像</span>
          </div>
        </el-upload>
      </template>
      <template v-else>
        <div class="selectMan" @click="changeUserSex('男')">男</div>
        <div class="selectWoman" @click="changeUserSex('女')">女</div>
      </template>
    </div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="70%" destroy-on-close>
      <img :src="imgUrl" alt="" class="preImg" v-if="imgUrl" />
      <div v-else>
        <el-form >
          <el-form-item>
            <el-input autofocus  v-model="userInfo.username"></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="changeUname">确定</el-button>
            <el-button type="info" @click="cancel"
              >取消</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>

    <el-dialog title="修改年龄" :visible.sync="ageDialogVisible" width="70%">
      <el-form>
        <el-form-item>
          <el-input v-model="userInfo.age" autofocus></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submit">确定</el-button>
          <el-button type="info" @click="ageDialogVisible = false"
            >取消</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar";
import localStorage from "@/utils/localStorage";
import {
  getUserInfo,
  changeUserName,
  changeSex,
  changeAddress,
  changeAge,
} from "@/network";
import { regionData, CodeToText } from "element-china-area-data";
import Vue from "vue";
export default {
  components: {
    navbar,
  },
  mounted() {
    const res = localStorage.getToken("token");
    this.token = res.token;
    this.id = res.id;
    this.getUserInfo();
    this.headers.Authorization = `Bearer ${this.token}`;
  },
  data() {
    return {
      isShow: false,
      userInfo: "",
      dialogVisible: false,
      ageDialogVisible: false,
      imgUrl: "",
      title: "预览图片",
      name:"",
      showAddress: true,
      dialogText: true,
      token: "",
      id: "",
      isMask: false,
      upload: "http://localhost:8080/upload/avatar",
      headers: {
        Authorization: "",
      },
      options: regionData,
      selectedOptions: [],
    };
  },
  methods: {
    handleAvatar() {
      this.isShow = true;
      this.isMask = true;
      this.dialogText = true;
    },
    preView() {
      this.dialogVisible = true;
      this.imgUrl = this.userInfo.avatar;
      this.isShow = false;
      this.isMask = false;
    },
    getUserInfo() {
      getUserInfo({ url: `/user/${this.id}` }).then((res) => {
        const result = res.data[0];
        this.isShow = false;
        this.userInfo = result;
      });
    },
    handleAvatarSuccess() {
      this.getUserInfo();
      this.isShow = false;
      this.isMask = false;
      location.reload();
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    //遮罩层
    showMask() {
      this.isMask = false;
      this.isShow = false;
      this.showAddress = true;
    },
    //修改用户名
    changeUsername() {
      this.imgUrl = "";
      this.title = "修改用户名";
      this.dialogVisible = true;
      this.dialogText = true;
    },
    async changeUname() {
      const result = await changeUserName(`/user/${this.id}`, {
        username: this.userInfo.username,
      });
      this.dialogVisible = false;
      if (result.data.status === 200) {
        this.$message({
          type: "success",
          message: result.data.message,
        });
      }
    Vue.set(this.userInfo,'username',this.userInfo.username);
    },
    //修改性别
    changeSex() {
      this.isShow = true;
      this.dialogText = false;
      this.isMask = true;
    },
    async changeUserSex(sex) {
      const res = await changeSex(`/sex/${this.id}`, { sex });
      if (res.status === 200) {
        Vue.set(this.userInfo, "sex", sex);
      }
      this.isShow = false;
      this.isMask = false;
    },
    //修改地址
    changeAddress() {
      this.showAddress = false;
      this.isShow = false;
      this.isMask = true;
    },
    async handleChange() {
      let loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]] + "-";
      }
      const res = await changeAddress(`/address/${this.id}`, { address: loc });
      if (res.data.status === 200) {
        Vue.set(this.userInfo, "address", loc);
      }
      this.showAddress = true;
      this.isMask = false;
    },
    //修改年龄
     changeAge() {
      this.ageDialogVisible = true;
    },
    async submit() {
      const res = await changeAge(`/age/${this.id}`, {
        age: this.userInfo.age,
      });
      if (res.data.status === 200) {
        this.ageDialogVisible = false;
      }
    },
    cancel() {
      console.log('我来大');
      this.getUserInfo()
      Vue.set(this.userInfo,'username',this.userInfo.username)
      this.dialogVisible = false;
    }
  },
};
</script>

<style lang="less">
.user-info {
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 15rem;
    background-color: #fff;
    opacity: 0.5;
  }
  .info {
    .info-detail {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      margin: 15px 15px;
      font-size: 0.4rem;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      .name {
        display: inline-block;
        width: 20% !important;
      }
      .avatarInfo {
        width: 80%;
        display: flex;
        justify-content: flex-end;
        text-align: center;
        .signature {
          width: 30%;
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .avatar {
          width: 45px;
          height: 45px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .right {
          width: 30px;
          height: 30px;
          img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .loading {
    width: 15rem;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ccc;
    color: #fff;
    text-align: center;
    font-size: 15px;
    // margin: 0 auto;
    z-index: 999;
    .preview,
    .changeAvatar,
    .selectWoman,
    .selectMan {
      height: 50px;
      border-bottom: 1px solid #fff;
      line-height: 50px;
    }
  }
  .preImg {
    width: 100%;
    height: 100%;
  }
  .btn {
    display: flex;
    justify-content: center;
  }
  .cascader {
    width: 15rem;
  }
}
</style>
