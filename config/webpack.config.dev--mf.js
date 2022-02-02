const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const deps = require("../package.json").dependencies;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, "dist"),
    port: 3001,
    liveReload: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".css"],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    publicPath: "auto",
    clean: true,
    path: path.join(__dirname, "dist"),
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: "static/js/[name].[chunkhash:8].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfront",
      filename: "microfront.tsx",
      exposes: {
        "./MicrofrontApp": "./src/App",
      },
      shared: {
        react: { singleton: true, requiredVersion: deps["react"] },
        "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
        "react-router": {
          singleton: true,
          requiredVersion: deps["react-router"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),

    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
  ],
};
