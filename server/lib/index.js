'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authors = new _table2.default('authors');
var books = new _table2.default('books');

var app = (0, _express2.default)();

app.use((0, _bodyParser2.default)());

app.get('/', function (req, res) {
    res.send('hello');
});

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

app.listen(3000, function () {
    console.log('Application listening on port 3000');
});