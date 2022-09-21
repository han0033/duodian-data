'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/home', controller.home.index);
  // router.post('/', controller.home.navList);
  // 111
  router.get('/api/product', controller.product.index);
  router.get('/api/category', controller.classify.index);
};
