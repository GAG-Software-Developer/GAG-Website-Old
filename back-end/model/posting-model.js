const mongoose = require('mongoose');
//// Contoh default value
// const postingSchema = mongoose.Schema({
//     title_posting: { type: String, required: true , default: 'aktif'}
// });
const postingSchema = mongoose.Schema({
    title_posting: { type: String, required: true },
    image_posting: { type: String, required: true },
    quote_posting: { type: String, required: true },
    year_of_posting: { type: Date, required: true },
    owner_id_posting: { type: String, required: true },
    owner_name_posting: { type: String, required: true },
    description_posting: { type: String, required: true },
    attributes: { type: [String], required: true }
});
//// export untuk model 
module.exports = mongoose.model('posting', postingSchema);

