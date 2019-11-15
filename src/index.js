const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
