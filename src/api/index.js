import request from "@/utils/request";

export function global() {
  return "http://zyxb.tianzhuowangluo.com/upload/";
}

// 头像上传
export function upFile(data) {
  return request({
    url: "user/upFile",
    method: "post",
    data: data
  });
}

// 头像图片上传给用户
export function avatarPost(data) {
  return request({
    url: "user/avatarPost",
    method: "post",
    data: data
  });
}

// 支付宝接口
export function addOrder(data) {
  return request({
    url: "order/addOrder",
    method: "post",
    data
  });
}

// 支付保证金
export function pay(data) {
  return request({
    url: "user/pay",
    method: "post",
    data
  });
}

// 获取验证码
export function send(data) {
  return request({
    url: "user/send",
    method: "post",
    data
  });
}

// 账号登录
export function login(data) {
  return request({
    url: "user/login",
    method: "post",
    data
  });
}

// 账户注册
export function register(data) {
  return request({
    url: "user/register",
    method: "post",
    data
  });
}

// 忘记密码 
export function forget(data) {
  return request({
    url: "user/forget",
    method: "post",
    data
  });
}


// 首页
export function index(data) {
  return request({
    url: "index/index",
    method: "post",
    data
  });
}

// 首页老师列表
export function teacher(data) {
  return request({
    url: "index/teacher",
    method: "post",
    data
  });
}
// 老师详情
export function indexMessage(data) {
  return request({
    url: "teacher/message",
    method: "post",
    data
  });
}

// 写文章
export function addWrite(data) {
  return request({
    url: "teacher/addWrite",
    method: "post",
    data
  });
}

// 编辑文章
export function upWrite(data) {
  return request({
    url: "teacher/upWrite",
    method: "post",
    data
  });
}

// 删除文章 
export function deleteWrite(data) {
  return request({
    url: "teacher/deleteWrite",
    method: "post",
    data
  });
}

// 文章列表
export function write(data) {
  return request({
    url: "teacher/write",
    method: "post",
    data
  });
}

// 常见问题
export function ofterWrite(data) {
  return request({
    url: "write/write",
    method: "post",
    data
  });
}

// 常见问题编辑
export function ofterWriteDetail(data) {
  return request({
    url: "write/detail",
    method: "post",
    data
  });
}


// 文章详情
export function writeMessage(data) {
  return request({
    url: "teacher/writeMessage",
    method: "post",
    data
  });
}

// 关注 teacher/focus
export function focus(data) {
  return request({
    url: "teacher/focus",
    method: "post",
    data
  });
}

// 已购
export function bought(data) {
  return request({
    url: "order/bought",
    method: "post",
    data
  });
}

// 修改价格
export function upMoney(data) {
  return request({
    url: "order/upMoney",
    method: "post",
    data
  });
}

// 我的关注
export function myFocus(data) {
  return request({
    url: "user/focus",
    method: "post",
    data
  });
}

// 账号
export function set(data) {
  return request({
    url: "user/set",
    method: "post",
    data
  });
}

// 账号信息修改
export function upUser(data) {
  return request({
    url: "user/upUser",
    method: "post",
    data
  });
}

// 编辑银行卡
export function bankPost(data) {
  return request({
    url: "user/bankPost",
    method: "post",
    data
  });
}

// 银行卡
export function bank(data) {
  return request({
    url: "user/bank",
    method: "post",
    data
  });
}

// 老师介绍
export function message(data) {
  return request({
    url: "user/message",
    method: "post",
    data
  });
}

// 老师介绍编辑
export function messagePost(data) {
  return request({
    url: "user/messagePost",
    method: "post",
    data
  });
}

// 提交申请
export function apply(data) {
  return request({
    url: "teacher/apply",
    method: "post",
    data
  });
}

// 老师类型和品牌
export function typeBrand(data) {
  return request({
    url: "teacher/type",
    method: "post",
    data
  });
}

// 提现
export function withdrawal(data) {
  return request({
    url: "wallet/withdrawal",
    method: "post",
    data
  });
}

// 提现记录
export function withdrawalList(data) {
  return request({
    url: "wallet/withdrawalList",
    method: "post",
    data
  });
}


// 我的余额
export function wallet(data) {
  return request({
    url: "wallet/wallet",
    method: "post",
    data
  });
}

// 实名信息
export function realName(data) {
  return request({
    url: "user/realName",
    method: "post",
    data
  });
}


// 实名认证申请
export function realPost(data) {
  return request({
    url: "user/realPost",
    method: "post",
    data
  });
}

// 订单列表
export function orderList(data) {
  return request({
    url: "order/orderList",
    method: "post",
    data
  });
}

// 买在状元
export function buyList(data) {
  return request({
    url: "order/buyList",
    method: "post",
    data
  });
}

// 取消订单
export function cancel(data) {
  return request({
    url: "order/cancel",
    method: "post",
    data
  });
}

// 确认收货
export function okOrder(data) {
  return request({
    url: "order/okOrder",
    method: "post",
    data
  });
}

// 搜索
export function teacherSearch(data) {
  return request({
    url: "teacher/teacher",
    method: "post",
    data
  });
}

// 评价
export function reviews(data) {
  return request({
    url: "order/review",
    method: "post",
    data
  });
}

// 评论列表
export function reviewList(data) {
  return request({
    url: "teacher/review",
    method: "post",
    data
  });
}

// 订单详情
export function orderComment(data) {
  return request({
    url: "order/comment",
    method: "post",
    data
  });
}

// 发布问题
export function addQuestion(data) {
  return request({
    url: "question/addQuestion",
    method: "post",
    data
  });
}

// 发布列表 
export function questionList(data) {
  return request({
    url: "question/questionList",
    method: "post",
    data
  });
}

// 讨论详情 
export function questionMessage(data) {
  return request({
    url: "question/questionMessage",
    method: "post",
    data
  });
}

// 回复
export function reply(data) {
  return request({
    url: "question/reply",
    method: "post",
    data
  });
}

// 老师所有类型
export function teacherTypeWrap(data) {
  return request({
    url: "teacher/teacherType",
    method: "post",
    data
  });
}

// 我的提问
export function myQuestion(data) {
  return request({
    url: "question/myQuestion",
    method: "post",
    data
  });
}

// 我的回答
export function myAnswer(data) {
  return request({
    url: "question/myAnswer",
    method: "post",
    data
  });
}

// 形象照片
export function image(data) {
  return request({
    url: "user/image",
    method: "post",
    data
  });
}

// 形象照片编辑
export function imagePost(data) {
  return request({
    url: "user/imagePost",
    method: "post",
    data
  });
}

// 个人理念
export function titleIndex(data) {
  return request({
    url: "user/title",
    method: "post",
    data
  });
}

// 个人理念编辑
export function titlePost(data) {
  return request({
    url: "user/titlePost",
    method: "post",
    data
  });
}

// 客服中心
export function service(data) {
  return request({
    url: "write/service",
    method: "post",
    data
  });
}