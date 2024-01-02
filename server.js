const express = require('express')
const api = require('./routes/notes.js');
const path = require('path')

const app = express();

const PORT = 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);


app.get('/', (req, res) => res.sendFile('public/index.html'))

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);


app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT}`)
);
