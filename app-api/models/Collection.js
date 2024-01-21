var mongoose = require("mongoose");

var collectionSchema = mongoose.Schema({
   blog: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Blog"
      },
      Img: {
          type: String
      }
   }
});



module.exports = mongoose.model("Collection", collectionSchema); 