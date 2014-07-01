#!/usr/bin/env node
var connect = require("connect");
var miniHarp = require("mini-harp");
var parseArgs = require("minimist");
var res = parseArgs(process.argv.slice(2));


var app = miniHarp(res.path,res.port);
     






