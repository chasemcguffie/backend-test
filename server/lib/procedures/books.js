'use strict';

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var books = new _table2.default();

app.get('/books', function (req, res) {
    books.getAll().then(function (results) {
        return res.send(results);
    });
});
app.get('/books/:id', function (req, res) {
    books.getOne(req.params.id).then(function (results) {
        return res.send(results);
    });
});
app.post('/books', function (req, res) {
    books.insert({ authorid: req.body.authorid, name: req.body.name, cover: req.body.cover }).then(res.send('Posted!'));
});
app.put('/books/:id', function (req, res) {
    books.update(req.params.id, { authorid: req.body.authorid, name: req.body.name, cover: req.body.cover }).then(res.send('Updated!'));
});
app.delete('/books/:id', function (req, res) {
    books.delete(req.params.id).then(res.send('hope that wasn\'t important!'));
});