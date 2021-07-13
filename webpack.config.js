const path = require('path');

function buildConfig(args) {
  var rootConfig = {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[fullhash].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(c|le)ss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { importLoaders: 1 } },
            { loader: 'postcss-loader', options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: { 'postcss-env-function': { importFrom: { environmentVariables: { '--test': '200px' } } } }
              } } },  
            { loader: 'less-loader', options: { lessOptions: { javascriptEnabled: true } } },
          ]
        },

        {
          test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf|jpeg)$/,
          use: [{ loader: 'file-loader' }],
        },
      ],
    },
  };
  return rootConfig;
}

module.exports = buildConfig;
