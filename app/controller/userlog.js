'use strict';

const Controller = require('egg').Controller;

class UserlogController extends Controller {
  async create() {
    const res = await this.ctx.service.userlog.create(this.ctx.request.body);
    this.ctx.body = res;
  }
  async update() {
    const res = await this.ctx.service.userlog.update(this.ctx.request.body);
    this.ctx.body = res;
  }
  async delete() {
    const res = await this.ctx.service.userlog.delete(this.ctx.params);
    this.ctx.body = res;
  }
  async query() {
    const res = await this.ctx.service.userlog.query(this.ctx.query);
    this.ctx.body = res;
  }
  async fetch() {
    const res = await this.ctx.service.userlog.fetch(this.ctx.params);
    this.ctx.body = res;
  }
}

module.exports = UserlogController;
