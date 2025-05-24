const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./user-model.js');
const bcrypt = require('bcrypt')
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors')


app.use(cors({
  origin: 'http://localhost:4200', // Zezwól tylko na tę domenę
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Dozwolone metody HTTP
  credentials: true // Jeśli używasz ciasteczek
}));
mongoose.connect("mongodb+srv://danielox2002:TPZLD7wv2LOHK0rd@cluster0.cfmka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})

module.exports = app;
app.post('/register', (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const newUser = new userModel({
        name: req.body.name,
        password: hash
      });
      newUser.save()
        .then(result => {
          res.status(201).json({
            message: 'Uzytkownik Stworzony',
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    })
});
app.post('/login',(req,res)=>{

  let userFound;

  userModel.findOne({name: req.body.name})
    .then(user =>{
      if(!user){
        return res.status(401).json({message:'user not found'})
      }
      userFound = user;
      return bcrypt.compare(req.body.password,user.password)
    })
    .then(result =>{
      if(!result){
        return res.status(401).json({message:'Wrong Password'})
      }
      const token = jwt.sign({name:userFound.name, userId:userFound._id},'secret_string',{expiresIn: '1h'});
      return res.status(200).json({
        token:token
      })
    }).catch(err =>{
    return res.status(401).json({
      message:'authorisation error'
    })
})

})
