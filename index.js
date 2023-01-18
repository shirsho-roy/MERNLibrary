const express =require('express');
const app = express();
const mongoose=require("mongoose");
const dotenv = require('dotenv');
var cors = require('cors');
const library = require('./model/model.js');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Server is running at port ${port}`);
  });
  app.get('/', (req, res)=> {
    res.send('Hello, Library!');
  });
  app.get('/user', (req, res)=> {
    res.send('Hello,Shirsho');
  });
  app.post('/postbook', function (req, res) {
    const Book = new library({
      id: req.body.id,
      title:req.body.title,
      author:req.body.author,
    });
});
  