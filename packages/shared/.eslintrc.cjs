module.exports = {
  root: true,
  extends: [require.resolve("@refcore/config/eslint-preset.js")],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
