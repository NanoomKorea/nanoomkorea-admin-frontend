const path = require("path");

module.exports = {
  webpack: {
    alias: {
      apis: path.resolve(__dirname, "src/apis"),
      common: path.resolve(__dirname, "src/common"),
      components: path.resolve(__dirname, "src/components"),
      contexts: path.resolve(__dirname, "src/contexts"),
      pages: path.resolve(__dirname, "src/pages"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
};
