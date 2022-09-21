const Service = require('egg').Service;

class ProductService extends Service {
  async list ({page, page_size, classid}) {
    const data = await this.app.mysql.select('product', {
      where: {
        classid: classid
      },
      limit: page_size * 1,
      offset: (page - 1) * page_size
    })
    return data
  }
}

module.exports = ProductService;