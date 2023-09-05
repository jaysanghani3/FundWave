const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const customerRoutes = require('./routes/customerRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const itemRoutes = require('./routes/itemRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config({path:'./config.env'});
require('./db/connection');

const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello from server');
}
);
app.use('/customer', customerRoutes);
app.use('/vendor', vendorRoutes);
app.use('/item', itemRoutes);
app.use('/invoice', invoiceRoutes);
app.use('/user', userRoutes);
app.use('/expense', expenseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});