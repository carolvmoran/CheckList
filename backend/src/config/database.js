const mongoose = require("mongoose")
mongoose.Promise = global.Promise
module.exports = mongoose.connect("mongodb://localhost/checklist")
// MongoClient.connect("mongodb://localhost:27017/checklist", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });