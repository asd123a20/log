'use strict';

const assert = require('assert');
const Service = require('egg').Service;
class UserlogService extends Service {
  constructor(ctx) {
    super(ctx);
    this.model = this.ctx.model.Userlog;
  }
  async create({ service, module, method, details, result, userName, name }) {
    assert(service, '服务不存在');
    assert(module, '模块不存在');
    assert(method, '方法不存在');
    assert(details, '详情不存在');
    assert(result, '结果不存在');
    try {
      const res = await this.model.create({ service, module, method, details, result, userName, name });
      return { errcode: 0, errmsg: 'ok', data: res };
    } catch (error) {
      throw error;
    }
  }
  async update({ id, service, module, method, details, result, userName, name }) {
    assert(id, 'id不存在');
    try {
      await this.model.updateOne({ _id: id }, { service, module, method, details, result, userName, name });
      return { errcode: 0, errmsg: 'ok', data: '' };
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
    const arr = { service, module, method, result, userName, name };
    for (const e in arr) {
      const data = `{ "${e}": "${arr[e]}" }`;
      if (arr[e]) {
        filter.$or = [];
        filter.$or.push(JSON.parse(data));
      }
    }
    try {
      const total = await this.model.find({ ...filter });
      let res;
      if (skip && limit) {
        res = await this.model.find({ ...filter }).skip(Number(skip) * Number(limit)).limit(Number(limit));
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

module.exports = UserlogService;
