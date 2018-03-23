import express from 'express';
import Table from './table';
import bodyParser from 'body-parser';

let authors = new Table('authors');
let books = new Table('books');

let app = express();

app.use(bodyParser())


app.get('/', function(req, res){
    res.send('hello')
})

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

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});