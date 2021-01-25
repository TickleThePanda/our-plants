module.exports = function (config) {

  let {Liquid} = require("liquidjs");
  let options = {
    extname: ".liquid",
    dynamicPartials: true,
    strict_filters: true,
    root: ["_includes"]
  };
  const engine = new Liquid(options);

  config.setLibrary("liquid", engine);

  return {
    dir: {
      input: 'src/views',
      output: 'site',
      layouts: '_layouts',
      includes: '_includes'
    }
  }
}
