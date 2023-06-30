const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://archanaharidas09:archana@cluster0.og2nygk.mongodb.net/Movie_manag?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const movieSchema = new Schema({
    name:String,
    actor:String,
    actress:String,
    director:String,
    year:Number,
    camera:String,
    producer:String,
    language:String

});
var movieModel = mongoose.model("movie",movieSchema);
module.exports = movieModel;