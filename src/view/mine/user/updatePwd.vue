<template>
  <div class="update">
    <navbar>
      <template #title>用户修改密码页面</template>
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
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="checkPassword">
          <el-input type="password" v-model="ruleForm.checkPassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="ensurePassword">
          <el-input
            type="password"
            v-model="ruleForm.ensurePassword"
          ></el-input>
        </el-form-item>
        <el-form-item class="go-login">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar";
import rules from "./verify";
import { updatePassword } from "@/network";
import localStorage from "@/utils/localStorage";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      ruleForm: {
        password: "",
        checkPassword: "",
        ensurePassword: "",
      },
      rules: {
        password: rules.password,
        checkPassword: rules.checkPassword,
        ensurePassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            trigger: "blur",
            validator: (rule, value, callback) => {
              console.log(value);
              console.log(this.ruleForm.checkPassword);
              if (value !== this.ruleForm.checkPassword) {
                console.log("我来到这里");
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            },
          },
        ],
      },
    };
  },
  methods: {
    async submitForm() {
      const { password, checkPassword, ensurePassword } = this.ruleForm;
      console.log(password);
      const result = await updatePassword({
        password,
        newPwd: checkPassword,
        rePwd: ensurePassword,
      });
      if (result.data.status !== 200) {
        this.$message({
          type: "error",
          message: result.data.message,
          duration: 1500,
        });
        return;
      } else if (result.data.status === 200) {
        this.$message({
          type: "success",
          message: result.data.message,
          duration: 1500,
        });
        //清除登录记录
        localStorage.clearToken("token");
        this.$router.push("/mine");
      }
    },
  },
};
</script>

<style lang="less" scoped>
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
      width: 5rem;
    }
  }
}
</style>