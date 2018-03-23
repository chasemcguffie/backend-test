'use strict';

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var authors = new _table2.default('authors');

app.get('/authors', function (req, res) {
    authors.getAll().then(function (results) {
        return res.send(results);
    });
});
app.get('/authors/:id', function (req, res) {
    authors.getOne(req.params.id).then(function (results) {
        return res.send(results);
    });
});
app.post('/authors', function (req, res) {
    authors.insert({ firstname: req.body.firstname, lastname: req.body.lastname }).then(res.send('Posted!'));
});
app.put('/authors/:id', function (req, res) {
    authors.update(req.params.id, { firstname: req.body.firstname, lastname: req.body.lastname }).then(res.send(':D'));
});
app.delete('/authors/:id', function (req, res) {
    authors.delete(req.params.id).then(res.send('hope that wasn\'t important!'));
});