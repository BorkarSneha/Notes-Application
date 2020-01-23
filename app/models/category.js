const mongoose = require('mongoose')

const Schema = mongoose.Schema
const categorySchema = new Schema({
    // title: String, 
    name: {
        type: String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = {
    Category
}
