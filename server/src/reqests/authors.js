import Table from '../table'
import express from 'express';

let app = express();

let authors = new Table('authors');

app.get('/authors', function(req, res){
    authors.getAll()
    .then(results => res.send(results))
})
app.get('/authors/:id', function(req, res){
    authors.getOne(req.params.id)
    .then(results => res.send(results))
})
app.post('/authors', function(req, res){
    authors.insert({firstname: req.body.firstname, lastname: req.body.lastname})
    .then(res.send('Posted!'))
})
app.put('/authors/:id', function(req, res){
    authors.update(req.params.id, {firstname: req.body.firstname, lastname: req.body.lastname})
    .then(res.send(':D'))
})
app.delete('/authors/:id', function(req, res){
    authors.delete(req.params.id)
    .then(res.send('hope that wasn\'t important!'))
})