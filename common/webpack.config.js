export default {
    mode: "development",
    entry: {
        line: "./src/index-line.js",
        call: "./src/index-call.js",
    },
    output: {
        filename: '[name].js'
    },
    devtool: "inline-cheap-module-source-map"
}