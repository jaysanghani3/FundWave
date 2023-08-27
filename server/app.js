const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const customerRoutes = require('./routes/customerRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const itemRoutes = require('./routes/itemRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const registrationRoutes = require('./routes/registrationRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config({path:'./config.env'});
require('./db/connection');

const PORT = process.env.PORT;

app.use('/customer', customerRoutes);
app.use('/vendor', vendorRoutes);
app.use('/item', itemRoutes);
app.use('/invoice', invoiceRoutes);
app.use('/registration', registrationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});