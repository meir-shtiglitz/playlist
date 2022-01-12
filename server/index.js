const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const mongoose = require('mongoose');
const userRoute = require("./routes/user");
const categoriesRoute = require("./routes/categories");
const songsRoute = require("./routes/songs");
const path = require('path');

//connect to DB
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("conected to DB"))
  .catch(error =>console.log(error));
 
app.use(bodyParser.json());
app.use(cors())
app.use('/api/user',userRoute);
app.use('/api/cat',categoriesRoute);
app.use('/api/songs',songsRoute);


// try
app.use(express.static(`./public`));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`)); 
})

// end try

const port = process.env.PORT || 3030; 
app.listen(port, () => {
    console.log(`running on port ${port}`)
})