'use strict';
const Schema = require('mongoose').Schema;
const SchemaDefine = {
  // 服务名
  service: { type: String, required: true },
  // 模块名
  module: { type: String, required: true },
  // 方法名
  method: { type: String, required: true },
  // 详情
  details: { type: String, required: true },
  // 成功失败
  result: { type: String, required: true },
  // 用户名（帐号）
  userName: { type: String, required: false },
  // 姓名
  name: { type: String, required: false },
};
const schema = new Schema(SchemaDefine);
module.exports = app => {
  const { mongoose } = app;
  return mongoose.model('userlog', schema, 'userlog');
};
