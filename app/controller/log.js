'use strict';

const Controller = require('egg').Controller;

class LogController extends Controller {
  async create() {
    const res = await this.ctx.service.log.create(this.ctx.request.body);
    this.ctx.body = res;
  }
  async update() {
    const res = await this.ctx.service.log.update(this.ctx.request.body);
    this.ctx.body = res;
  }
  async delete() {
    const res = await this.ctx.service.log.delete(this.ctx.params);
    this.ctx.body = res;
  }
  async query() {
    const res = await this.ctx.service.log.query(this.ctx.query);
    this.ctx.body = res;
  }
  async fetch() {
    const res = await this.ctx.service.log.fetch(this.ctx.query);
    this.ctx.body = res;
  }
}

module.exports = LogController;
