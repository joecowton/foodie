var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// Load product model:
require('../models/Product');
var Product = mongoose.model('products');

// ____ ROUTES : ____
