const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express()
const { PORT = 3000 } = process.env;

app.use((req, res, next) => {
  req.user = {
    _id: '6216615805c252bc9d89048e' // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use(router)

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});