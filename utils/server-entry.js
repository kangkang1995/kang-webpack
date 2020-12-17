const path = require("path");
const glob = require("glob");
const { customEntry,server:serverConfig } = require("../.compile");

function getEntries(globPath) {
    const files = glob.sync(globPath),
        entries = {};
    const workPage = serverConfig.workPage;
    files.forEach(function (filepath) {
        const split = filepath.split("/");
        const name = split[split.length - 2];
        if (workPage && workPage.length && !workPage.includes(name)) return;
        entries[name] = [filepath];
    });
    return entries;
}

// 增加自定义入口文件
const newEntry = customEntry ? customEntry : path.resolve(__dirname, "../src/modules/*/index.tsx");
module.exports = getEntries(newEntry);