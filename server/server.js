const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const bc = require('./controllers/books_controller');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'));


app.post('/api/books', bc.create);
app.get('/api/books', bc.read);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);


const port = 3000;
app.listen(port, () => console.log(`I will be watching you on port ${port}. Just sayin'.`));
