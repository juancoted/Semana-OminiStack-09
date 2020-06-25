const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs:[String], //Tecnologias é vetor com varias strings dentro
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
},{
    //confirgurações para o moongoose
    toJSON: {
        virtuals: true,
    },
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})
module.exports = mongoose.model('Spot', SpotSchema);