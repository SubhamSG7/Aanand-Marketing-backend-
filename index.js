let env=require('dotenv');
env.config();
const express = require('express')
const app = express();
const account=require('./Api/account');
const orders=require('./Api/order');
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Its Home'));
app.use('/account', account);
app.use('/orders', orders)

app.listen(port, (error) => {
    if (error) {
      console.error(`Error starting server: ${error.message}`);
    } else {
      console.log(`Server is listening at ${port}`);
    }
  });