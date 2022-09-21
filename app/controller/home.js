'use strict';
// const fs = require('fs')
// const path = require('path')
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { callback } = ctx.query
    const banner = await ctx.service.home.banner()
    const mall_nav = await ctx.service.home.mall_nav()
    const hot_nav = await ctx.service.home.hot_nav()
    const side_bar = await ctx.service.home.side_bar()
    if (callback) {
      ctx.set('content-type', 'application/javascript; charset=UTF-8')
      ctx.body = callback + '(' + JSON.stringify({
        code: 1,
        banner,
        mall_nav,
        hot_nav,
        side_bar
      }) + ')'
    } else {
      ctx.body = {
        code: 1,
        banner,
        mall_nav,
        hot_nav,
        side_bar
      }
    }
  }




  
  // mall_nav添加
  // async navList () {
  //   const content = fs.readFileSync(path.resolve(__dirname, '../public/nav.json'))
  //   const navJson = JSON.parse(content)
  //   for (let i = 0; i < navJson.length; i++) {
  //     const item = navJson[i]
  //     await this.app.mysql.insert('mall_nav', {
  //       imageUrl: item.floorCellData.imgUrl,
  //       title: item.floorCellData.title
  //     })
  //   }
  //   this.ctx.body = {
  //     code: 1,
  //     message: '添加成功'
  //   }
  // }
}

module.exports = HomeController;
