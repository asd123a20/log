'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 管理日志
  router.post('/api/log/adminlog/create', controller.log.create);
  router.delete('/api/log/adminlog/delete/:id', controller.log.delete);
  router.get('/api/log/adminlog/query', controller.log.query);
  router.get('/api/log/adminlog/fetch/:id', controller.log.fetch);
  // 用户行为日志
  router.post('/api/log/userlog/create', controller.userlog.create);
  router.post('/api/log/userlog/update', controller.userlog.update);
  router.delete('/api/log/userlog/delete/:id', controller.userlog.delete);
  router.get('/api/log/userlog/query', controller.userlog.query);
  router.get('/api/log/userlog/fetch', controller.userlog.fetch);
};
