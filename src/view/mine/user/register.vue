<template>
  <div class="mine">
    <navbar>
      <template #title>用户注册页面</template>
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
        <el-form-item label="用户名" prop="user">
          <el-input type="text" v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model="ruleForm.checkPassword"></el-input>
        </el-form-item>
        <el-form-item class="go-login">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >注册</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="agree">
        <input
          type="radio"
          name=""
          id=""
          :value="isChecked"
          :checked="isChecked"
          @click="check"
        />
        <span class="read"
          >已阅读并同意以下协议
          <span class="xy">
            淘宝平台服务协议、隐私权政策、法律声明、支付宝及客户端服务协议，</span
          >
          未注册手机号将自动为您创建账号。</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "@/network";
import navbar from "@/components/common/navbar/navbar";
import rules from "./verify";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      isChecked: false,
      ruleForm: {
        password: "",
        checkPassword: "",
        user: "",
      },
      rules: {
        password: rules.password,
        checkPassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            trigger: "blur",
            validator: (rule, value, callback) => {
              console.log(value);
              if (value !== this.ruleForm.password) {
                console.log("我来到这里");
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            },
          },
        ],
        user: rules.user,
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.isChecked) {
            this.$message({
              type: "error",
              message: "请先选中协议~",
            });
            return false;
          }
          const username = this.ruleForm.user;
          const password = this.ruleForm.password;
          register({ username, password }).then((res) => {
            if (res.data.status === 200) {
              this.$message({
                message: res.data.msg,
                type: "success",
              });
              this.$router.push("/login");
            }else {
              this.$message({
                message: res.data.msg,
                type: "error",
              });
              return 
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    check() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style lang="less" scoped>
.mine {
  height: 100vh - 1rem;
  overflow: hidden;
}
.login-box {
  width: 14rem;
  box-sizing: border-box;
  margin: 2rem 0.5rem 0 0.5rem;
  padding: 0.7rem;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.14rem;
  background-color: #fff;
  .demo-ruleForm {
    width: 12rem;
  }
  .go-login {
    margin-top: 0.4rem;
    text-align: center;
    .el-button {
      width: 3rem;
    }
  }
  .agree {
    font-size: 14px;
    margin-top: 0.4rem;
    .read {
      margin-right: 5px;
    }
    .xy {
      color: #ff4400;
    }
  }
}
</style>
