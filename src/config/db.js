const mongoose = require("mongoose");

module.exports = ()=>{
    mongoose.connect("mongodb://localhost:27017/file_uploads");
}
// "mongodb://localhost:27017/web14"