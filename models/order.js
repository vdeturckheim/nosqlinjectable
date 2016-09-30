/**
 * Copyright (c) 2016 Sqreen. All Rights Reserved.
 * Please refer to our terms for more information: https://www.sqreen.io/terms.html
 */
'use strict';

const Mongoose = require('mongoose');


const Order = Mongoose.model('Order', {
    product: String,
    quantity: Number,
    status: String
});

module.exports = Order;
