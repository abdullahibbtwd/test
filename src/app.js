const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const cacheRouter = require('./cache/cache.router');
const customerRouter = require('./customer/customer.router');
const orderRouter = require('./order/order.router');
const paymentRouter = require('./payment/payment.router');
const chatRouter = require('./chat/chat.router');
const fileRouter = require('./file/file.router');


app.use('/api/cache', cacheRouter);
app.use('/api/customer', customerRouter);
app.use('/api/order', orderRouter);
app.use('/api/payment', paymentRouter);
app.use('/api/chat', chatRouter);
app.use('/api/file', fileRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
