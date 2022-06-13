<template>
  <div class="mine">
    <navbar>
      <template #title>用户登录界面</template>
    </navbar>
    <div class="login-box">
      <el-form
        status-icon
        ref="ruleForm"
        label-width="2.2rem"
        class="demo-ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-position="top"
      >
        <div class="logo">
          <img src="~@/assets/icon/taobao.png" alt="" />
        </div>
        <el-form-item label="用户名" prop="user">
          <el-input type="text" v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <div class="go-login">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
          <div class="go-register">
            <span>没有账号?<a @click="goRegister">立即注册</a></span>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/network";
import rules from "./verify";
import navbar from "@/components/common/navbar/navbar";
import localStorage from "@/utils/localStorage";
export default {
  components: { navbar },
  data() {
    return {
      ruleForm: {
        password: "",
        user: "",
      },
      rules: {
        password: rules.password,
        user: rules.user,
      },
    };
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const username = this.ruleForm.user;
          const password = this.ruleForm.password;
          login({ username, password }).then((res) => {
            console.log(res.data);
            if (res.data.status !== 200) {
              this.$message({
                type: "error",
                message: res.data.message,
                duration: 1500,
              });
              return;
            } else if (res.data.status === 200) {
              console.log(res.data);
              localStorage.saveToken(res.data);
              this.$message({
                type: "success",
                message: "用户登录成功",
                duration: 1500,
              });
              this.$router.push("/mine");
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.mine {
  height: 100vh - 1rem;
  overflow: hidden;
  font-size: 0.4rem;
  .login-box {
    width: 14rem;
    box-sizing: border-box;
    margin: 2rem 0.5rem 0 0.5rem;
    padding: 0.7rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
    border-radius: 0.14rem;
    background-color: #fff;
    .logo {
      width: 1.6rem;
      height: 1.6rem;
      margin: 0 auto;
      margin-top: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .demo-ruleForm {
      width: 12rem;
    }
    .go-login {
      display: flex;
      margin-top: 0.4rem;
      // justify-content: space-between;
      justify-content: flex-end;
      align-items: center;
      .el-button {
        width: 5rem;
        margin: 0 10px;
        // text-align: center;
      }
    }
    .go-register {
      font-size: 16px;
      text-align: right;
      a {
        color: skyblue;
        cursor: pointer;
      }
    }
  }
}
</style>
