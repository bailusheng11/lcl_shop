const rules = {
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      trigger: "blur",
      validator: (rule, value, callback) => {
        var passwordReg = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}/;
        if (!passwordReg.test(value)) {
          callback(
            new Error("密码必须由数字、字母、特殊字符组合,请输入8-20位")
          );
        } else {
          callback();
        }
      },
    },
  ],
  checkPassword: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      trigger: "blur",
      validator: (rule, value, callback) => {
        var passwordReg = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}/;
        if (!passwordReg.test(value)) {
          callback(
            new Error("密码必须由数字、字母、特殊字符组合,请输入8-20位")
          );
        } else {
          callback();
        }
      },
    },
  ],
  user: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {
      trigger: "blur",
      validator: (rule, value, callback) => {
        console.log(value.length);
        if (value.length > 6) {
          callback(
            new Error("用户名不能超过6位~")
          );
        } else {
          callback();
        }
      },
    },
  ],
};

export default rules;
