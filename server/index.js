const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 2997;

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

const startListening = () => {
  const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`))
}

startListening();
