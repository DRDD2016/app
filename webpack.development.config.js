const path = require('path');
const webpack = require('webpack');

module.exports = {
entry: [
    "./src/js/app.jsx",
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080/"
],
output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
},
module: {
    loaders: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "react-hot-loader!babel-loader"
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!postcss-loader!sass-loader"
        }
    ]
},
plugins: [
    new webpack.HotModuleReplacementPlugin()
]
};
