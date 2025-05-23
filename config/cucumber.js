module.exports = {
  default: {
    paths: ["src/tests/features/*.feature"],
    "dry-run": false,
    formatOptions: {
      colorsEnabled: true,
      snippetInterface: "async-await",
    },
    require: ["src/tests/step-definitions/*.ts"],
    requireModule: ["ts-node/register"],
  },
};
