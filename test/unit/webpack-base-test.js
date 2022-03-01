const assert = require("assert");

describe("webpack.base.conf.js test case", () => {
  const baseConfig = require("../../lib/webpack.base.conf.js");

  it("entry", () => {
    assert.equal(
      baseConfig.entry.index,
      "D:/Plan/projects/jike/htime-builder-webpack/test/smoke/template/src/pages/index/index.js"
    );
    assert.equal(
      baseConfig.entry.search,
      "D:/Plan/projects/jike/htime-builder-webpack/test/smoke/template/src/pages/search/index.js"
    );
  });
});
