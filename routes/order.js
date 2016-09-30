/**
 * Copyright (c) 2016 Sqreen. All Rights Reserved.
 * Please refer to our terms for more information: https://www.sqreen.io/terms.html
 */
'use strict';
const Router = require('express').Router();
const Order = require('../models/order');

Router.get('/', (req, res, next) => {

    Order.find({})
        .exec()
        .then((r) => res.json(r))
        .catch(next);
});

Router.post('/', (req, res, next) => {

    delete req.body._id;
    req.body.status = 'pending';
    (new Order(req.body))
        .save()
        .then(() => res.sendStatus(201))
        .catch(next);
});

Router.put('/', (req, res, next) => {

    if (!req.body.product) {
        next(new Error('no product in payload'));
    }

    if (!req.body.status) {
        next(new Error('no status in payload'));
    }

    const product = req.body.product;
    Order.update({ product: product }, { $set: { status: req.body.status } })
        .exec()
        .then(() => res.sendStatus(200))
        .catch(next);
});

module.exports = Router;
