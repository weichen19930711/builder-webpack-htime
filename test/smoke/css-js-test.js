const glob = require("glob-all");

describe("checking generated Css Js files", () => {
  it("should generate Css Js files", (done) => {
    const files = glob.sync([
      "./dist/index_*.js",
      "./dist/index_*.css",
      "./dist/search*.js",
      "./dist/search_*.css",
    ]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error("No Css JS files found");
    }
  });
});
