const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
const user_model = require('../models/user-model');
const { Model } = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/user-create', (request, response) => {

    const user = new user_model({
        fullname_user: request.body.fullname_user,
        email_user: request.body.email_user,
        password_user: request.body.password_user,
        photo_user: request.body.photo_user,
        github_user: request.body.github_user,
        description_user: request.body.description_user,
        skill_set_user: request.body.skill_set_user,
        academic_user: request.body.academic_user,
        experience_user: request.body.experience_user
    });
    //response.send(request.body);
    user.save();
    response.send(user);
});
router.get('/user-read', async (request, response) => {
    const read_user = await user_model.find({});
    response.send(read_user);
});
router.post('/posting-update', async (request, response) => {
    const user_id = request.body.user_id;
    //await posting_model.findByIdAndUpdate(id, { "owner_posting": "cah" });
    await posting_model.findByIdAndUpdate(user_id, {
        $set: {
            title_posting: request.body.title_posting,
            image_posting: request.body.image_posting,
            quote_posting: request.body.quote_posting,
            year_of_posting: request.body.year_of_posting,
            owner_id_posting: request.body.owner_id_posting,
            owner_name_posting: request.body.owner_name_posting,
            attribute: request.body.attribute
        }
    });
    response.send('Updated!');
});
router.post('/posting-delete', async (request, response) => {
    const user_id = request.body.user_id;
    await posting_model.findByIdAndDelete({ _id: user_id });
    response.send('deleted!');
});
module.exports = router;