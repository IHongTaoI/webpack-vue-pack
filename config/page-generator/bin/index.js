#!/usr/bin/env node
'use strict';

let PAGES = 'src';

var path = require('path');
var MODULE_PATH = path.resolve(__dirname, './../');
var PROJECT_PATH = path.resolve('./');
let FS = require('fs');
let mkdir = function(dir) {
  FS.mkdirSync(dir);
};

// 递归创建目录及文件
let createDirAndFile = function(path, obj) {
  if (obj == undefined) {
    return;
  }
  Object.getOwnPropertyNames(obj).forEach(function(prop) {
    if (prop.substr(0, 2) == 'd_') {
      let childDirPath = path + '/' + prop.substr(2, prop.length - 2);
      FS.mkdirSync(childDirPath);
      createDirAndFile(childDirPath, obj[prop]);
    } else if (prop.substr(0, 2) == 'f_') {
      createFile(path, obj[prop]);
    }
  }, this);
};

// 创建目录及文件
let createDirs = function(name) {
  console.log('创建目录');
  let modulePath = PAGES + '/' + name;
  isModuleExist(PAGES, function(exists) {
    if (exists) {
      console.log('根目录' + PAGES + '已存在，跳过');
    } else {
      mkdir(PAGES);
    }
    mkdir(modulePath);
    let hierarchy = require(path.resolve(MODULE_PATH, './hierarchy.json'));
    createDirAndFile(modulePath, hierarchy);
    console.log('完成 查看您的目录吧');
  });
};

let createFile = function(_path, name) {
  let content = FS.readFileSync(
    path.resolve(MODULE_PATH, 'template', name),
    'utf-8'
  );
  FS.writeFileSync(_path + '/' + name, content, 'utf-8');
};

let isModuleExist = function(name, callBack) {
  let modulePath = path.resolve(PROJECT_PATH, name);
  console.log(modulePath);
  FS.stat(modulePath, function(err, stat) {
    if (err == null) {
      callBack(true);
    } else {
      callBack(false);
    }
  });
  return false;
};

let main = function() {
  console.log('开始创建页面');
  let argv = process.argv;
  if (argv.length < 3 || argv.length > 4) {
    console.error(
      '参数错误！\n-> npm run creatView [页面名] [页面的目录]\n如  npm run creatView test src'
    );
    return;
  }
  PAGES = argv[3] || 'src';
  let moduleName = argv[2];
  isModuleExist(PAGES + '/' + moduleName, function(exists) {
    if (exists) {
      console.error('页面已存在！');
    } else {
      createDirs(moduleName);
    }
  });
};

main();
