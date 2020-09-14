const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
//get Controller
const PostingController = require('../controllers/posting-controller');
//route
router.post('/posting-create', PostingController.posting_create);
router.get('/posting-read', PostingController.posting_get_all);
router.put('/posting-update', PostingController.posting_update);
router.delete('/posting-delete', PostingController.posting_delete);
module.exports = router;