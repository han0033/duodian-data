'use strict';
// const fs = require('fs')
// const path = require('path')
const Controller = require('egg').Controller;

class ClassifyController extends Controller {
  async index() {
    const { ctx } = this;
    const category = await ctx.service.classify.category()
    // console.log(category);
    ctx.body = {
      code: 1,
      category
    }
  }
}

module.exports = ClassifyController;
