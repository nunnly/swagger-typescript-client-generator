"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var yaml = require("js-yaml");
exports.yamlReader = function (options) {
    var content = fs.readFileSync(options.file, {
        encoding: "UTF-8",
        flag: "r"
    });
    return yaml.safeLoad(content);
};
