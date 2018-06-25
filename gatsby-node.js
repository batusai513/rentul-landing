exports.onCreateBabelConfig = ({ actions }) => {
  if (process.env.NODE_ENV !== 'production') {
    actions.setBabelPlugin({
      name: 'babel-plugin-emotion',
      options: { sourceMap: true, autoLabel: true },
    });
  }
  actions.setBabelPlugin({
    name: 'babel-plugin-emotion',
    options: { hoist: true },
  });
};
