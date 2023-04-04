module.exports = {
  configs: {
    myConfig: {
      plugins: ["brasfoot"],
      rules: {
        semi: "error",
        "brasfoot/my-rule": "error",
        "eslint-plugin-brasfoot/another-rule": "error"
      }
    },
    myOtherConfig: {
      plugins: ["brasfoot"],
      rules: {
        "brasfoot/my-rule": "off",
        "eslint-plugin-brasfoot/another-rule": "off",
        "eslint-plugin-brasfoot/yet-another-rule": "error"
      }
    }
  },
  rules: {
    "my-rule": {/* rule definition */},
    "another-rule": {/* rule definition */},
    "yet-another-rule": {/* rule definition */}
  }
};
