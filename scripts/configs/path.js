const path = require('path')
const ROOT_PATH = path.resolve(process.cwd()) // process.cwd() 方法会返回 Node.js 进程的当前工作目录。
const resolveRoot = (relativePath) => path.resolve(ROOT_PATH, relativePath)

module.exports = {
    ROOT_PATH: resolveRoot('.'),
    SRC_PATH: resolveRoot('src'),
    SRC_INDEX_PATH: resolveRoot('src/index'),
    BUILD_PATH: resolveRoot('build'),
    PACKAGE_JSON_PATH: resolveRoot('package.json'),
    TS_CONFIG_PATH: resolveRoot('tsconfig.json'),
    PRETTIER_CONFIG_PATH: resolveRoot('prettier.config.js'),
    HTML_PATH: resolveRoot('public/index.html'),
}
module.exports.moduleFileExtensions = ['js', 'jsx', 'ts', 'tsx']
