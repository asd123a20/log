'use strict';
const Schema = require('mongoose').Schema;
const SchemaDefine = {
  // 服务名
  service: { type: String, required: true },
  // 模块名
  module: { type: String, required: true },
  // 方法名
  method: { type: String, required: true },
  // 响应参数
  resData: { type: String, required: true },
  // 传入参数
  reqData: { type: String, required: true },
  // 成功失败
  result: { type: String, required: true },
  // 用户名（帐号）
  userName: { type: String, required: false },
  // 姓名
  name: { type: String, required: false },
  // ip
  ip: { type: String, required: false },
  // 创建时间
  createAt: { type: Number, required: false },
};
const schema = new Schema(SchemaDefine);
module.exports = app => {
  const { mongoose } = app;
  return mongoose.model('log', schema, 'log');
};
