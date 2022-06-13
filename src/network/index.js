import axios from "axios";
import localStorage from "@/utils/localStorage";
const baseURL = "http://175.178.238.176:8080";
// const baseURL = "http://localhost:8080";

const service = axios.create({
  timeout: 50000, // 请求超时时间
  baseURL
});

service.interceptors.request.use((config) => {
  if (localStorage.getToken("token")) {
    config.headers["Authorization"] =
      localStorage.getToken("token").token || "";
  }
  return config;
});




//注册
export function register(data) {
  return service({
    url: "/register",
    method: "POST",
    data: data,
  });
}

//获取用户信息
export function getUserInfo(data) {
  return service({
    url: data.url,
    method: "GET",
  });
}

//登录
export function login(data) {
  return service({
    url: "/login",
    method: "POST",
    data
  });
}

//修改密码
export function updatePassword(data) {
  return service({
    url: `http://localhost:8080/update`,
    method: "POST",
    data,
  });
}

//上传头像
export function getAvatar(data) {
  return service({
    url: "/upload/avatar",
    method: "POST",
    data,
    headers: {
      accept: "multipart/form-data",
    },
  });
}


//修改用户名
export function changeUserName(url, data) {
  return service({
    url,
    method: "PATCH",
    data
  });
}

//修改性别
export function changeSex(url, data) {
  return service({
    url,
    method: "PATCH",
    data
  });
}

//修改地址
//修改性别
export function changeAddress(url, data) {
  return service({
    url,
    method: "PATCH",
    data
  });
}

//修改年龄
export function changeAge(url, data) {
  return service({
    url,
    method: "PATCH",
    data
  });
}

//获取商品信息
export function getAllGoods(data) {
  return service({
    url: baseURL + data.url,
    method: "GET",
  });
}

//获取商品详细信息
export function getGoodsInfo(data) {
  return service({
    url: baseURL + data.url,
    method: "GET",
  });
}

//加入购物车
export function addToCart(data) {
  return service({
    url: baseURL + '/shopCart',
    method: "POST",
    data
  });
}


//获取购物车的信息
export function showShopCart(data) {
  return service({
    url: baseURL + '/shopCart',
    method: "GET",
    data
  });
}

//修改购物车数量
export function ShopCartChangeNumber(data) {
  return service({
    url: baseURL + '/shopCart',
    method: "PATCH",
    data
  });
}
//删除购物车
export function DelShopCartGoods(data) {
  return service({
    url: baseURL + '/shopCart',
    method: "DELETE",
    data
  });
}

export function collectGoods(data) {
  return service({
    url: baseURL + '/goodsCollect',
    method: "POST",
    data
  });
}

export function removeCollectGoods(data) {
  return service({
    url: baseURL + '/goodsCollect',
    method: "POST",
    data
  });
}

export { service, baseURL }