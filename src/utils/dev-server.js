const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.development.config.js');

const compiler = webpack(config);

const options = {
    contentBase: 'public/',
    headers: { "X-Custom-Header":"yes"},
    hot: true,
    filename: 'bundle.js',
    stats: {
        colors: true
    },
    proxy: {
        "*": "http://localhost:9000"
    }
};

const server = new WebpackDevServer(compiler, options);
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
server.listen(8080, 'localhost', function () {
    console.log('webpack-dev-server is running on 8080');
});
