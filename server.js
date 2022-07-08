const express = require('express')
const mongoose = require('mongoose')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27000/social-backend', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.set('debug', true)

  app.use(require('./routes/api'))

  app.listen(PORT, () => console.log(` Connected on localhost:${PORT}`));

