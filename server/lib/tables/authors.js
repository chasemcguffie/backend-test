'use strict';

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var authors = new _table2.default('authors');

app.get('/', function (req, res) {
    authors.getAll().then(function (results) {
        return res.send(results);
    });
});