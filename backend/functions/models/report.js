var mongoose = require("mongoose");
//todo check connection to database on this url
var reportSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    rating: Number,
    video: String,
    description:String,
    title: String,
    category:String,
    filledBy:String,
    issues:[{
        title:String,
        rating:Number,
        issueNum:Number,
        stability:String,
        image:String,
        description: String,
    }],
    providerLogo:String,
    site: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Site"
    },
});
module.exports = reportSchema;