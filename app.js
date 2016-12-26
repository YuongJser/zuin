'use strict';
let koa = require('koa');
let app = koa();
let router = require('./routes/router').router;
let model = require('./db/index');

// time
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

//listen

app.listen(3000);
