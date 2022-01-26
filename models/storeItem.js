const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreItemSchema= new Schema({
    item_name:{type:String,required:true},
    item_price:{type:Number,required:true},
    item_category:{type:String,required:true},
    item_quantity:{type:Number,required:true,min:0,max:100},
    item_added_date:{type:Date,default:Date.now}
},
{   
    collection:"store_item"
})

module.exports=Item=mongoose.model("StoreItemSchema",StoreItemSchema);