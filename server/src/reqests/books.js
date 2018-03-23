import Table from '../table'
import express from 'express';

let app = express();

let books = new Table;

app.get('/books', function(req, res){
    books.getAll()
    .then(results => res.send(results))
})
app.get('/books/:id', function(req, res){
    books.getOne(req.params.id)
    .then(results => res.send(results))
})
app.post('/books', function(req, res){
    books.insert({authorid: req.body.authorid, name: req.body.name, cover: req.body.cover})
    .then(res.send('Posted!'))
})
app.put('/books/:id', function(req, res){
    books.update(req.params.id, {authorid: req.body.authorid, name: req.body.name, cover: req.body.cover})
    .then(res.send('Updated!'))
})
app.delete('/books/:id', function(req, res){
    books.delete(req.params.id)
    .then(res.send('hope that wasn\'t important!'))
})