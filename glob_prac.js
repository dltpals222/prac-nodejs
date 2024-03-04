const routes = [
  "routes/api/ems.js",
  "routes/buisness/asset.js",
  "routes/buisness/broken.js",
  "routes/buisness/index.js",
  "routes/buisness/load.js",
  "routes/buisness/ocpp.js",
  "routes/buisness/ocpp2.js",
  "routes/buisness/operation.js",
  "routes/buisness/operator.js",
  "routes/buisness/setup.js",
  "routes/buisness/stats.js",
  "routes/index.js",
  "routes/login.js",
  "routes/operator/asset.js",
  "routes/operator/community.js",
  "routes/operator/dashBoard.js",
  "routes/operator/index.js",
  "routes/operator/inform.js",
  "routes/operator/load.js",
  "routes/operator/ocpp.js",
  "routes/operator/ocpp2.js",
  "routes/operator/operation.js",
  "routes/operator/setup.js",
  "routes/operator/stats.js",
  "routes/operator/user.js",
  "routes/system/buisness.js",
  "routes/system/community.js",
  "routes/system/index.js",
  "routes/system/internal.js",
  "routes/system/setup.js",
  "routes/system/user.js",
  "routes/test.js",
  "routes/tester/ocpp.js",
]

routes.forEach(function (file) {
  let route = file.substr(6, file.length - 9);
  route = route.replace('index', '');
  // app.use(route, require('./' + file)(app));
});