const Service = require('egg').Service;

const tree = data => {
  const newDate = []
  const obj = {}
  data.forEach (item => {
    obj[item.categoryId] = item
  })
  data.forEach (item => {
    if (item.parentId * 1 == 0) {
      newDate.push(item)
    } else {
      const parent = obj[item.parentId]
      if (parent.children) {
        parent.children.push(item)
      } else {
        parent.children = [item]
      }
    }
  })
  return newDate
}


class ClassifyService extends Service {
  async category() {
    const data = await this.app.mysql.select('category')
    return tree(data)
  }
}



module.exports = ClassifyService;