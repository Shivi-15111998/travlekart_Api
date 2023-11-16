let Mongoose=require('mongoose');
let schema= Mongoose.Schema;

let Schema = new schema({
  _id: {type:Number,require:true},
  title:  {type:String,require:true},
  description:  {type:String,require:true},
  price:  {type:Number,require:true},
  quant:  {type:Number,require:true},
  image:{ data: Buffer,
    contentType: String},
  
})

// module.exports = mongoose.model("user", Schema);

const User = Mongoose.model("user", Schema);
module.exports = User;
