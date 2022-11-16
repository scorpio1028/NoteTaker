const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);