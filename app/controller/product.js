'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    const {
      page = 1,
      page_size = 10,
      classid
    } = ctx.query
    const list = await ctx.service.product.list({page, page_size, classid})
    ctx.body = {
      code: 1,
      data: list.map(item => {
        return {
          ...item,
          images: JSON.parse(item.images),
          promotionInfoList: JSON.parse(item.promotionInfoList)
        }
      })
    }
  }
}

module.exports = ProductController;
