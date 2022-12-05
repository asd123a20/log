'use strict';

const assert = require('assert');
const Service = require('egg').Service;
const moment = require('moment');
class LogService extends Service {
  constructor(ctx) {
    super(ctx);
    this.model = this.ctx.model.Log;
  }
  async create({ service, module, method, result, userInfo, resData, reqData, ip }) {
    assert(service, '服务不存在');
    assert(module, '模块不存在');
    assert(method, '方法不存在');
    assert(result, '结果不存在');
    const createAt = moment().format('x');
    try {
      const res = await this.model.create({ service, module, method, result, ...userInfo, resData, reqData, ip, createAt });
      return { errcode: 0, errmsg: 'ok', data: res };
    } catch (error) {
      throw error;
    }
  }
  async delete({ id }) {
    assert(id, 'id不存在');
    try {
      await this.model.remove({ _id: id });
      return { errcode: 0, errmsg: 'ok', data: '' };
    } catch (error) {
      throw error;
    }
  }
  async query({ skip, limit, service, module, method, result, userName, name }) {
    const filter = {};
    if (service || module || method || result || userName || name) filter.$or = [];
    if (service) filter.$or.push({ service: { $regex: service } });
    if (module) filter.$or.push({ module: { $regex: module } });
    if (method) filter.$or.push({ method: { $regex: method } });
    if (result) filter.$or.push({ result: { $regex: result } });
    if (userName) filter.$or.push({ userName: { $regex: userName } });
    if (name) filter.$or.push({ name: { $regex: name } });
    try {
      const total = await this.model.count({ ...filter });
      let res;
      if (skip && limit) {
        res = await this.model.find({ ...filter }).sort({ createAt: -1 }).skip(Number(skip) * Number(limit))
          .limit(Number(limit));
      } else {
        res = await this.model.find({ ...filter });
      }
      return { errcode: 0, errmsg: 'ok', data: res, total: total.length };
    } catch (error) {
      throw error;
    }
  }
  async fetch({ id }) {
    assert(id, 'id不存在');
    try {
      const res = await this.model.findOne({ _id: id });
      return { errcode: 0, errmsg: 'ok', data: res };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LogService;
