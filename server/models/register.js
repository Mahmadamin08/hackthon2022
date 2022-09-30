const mongoose=require('mongoose')

const registeruser=new mongoose.SchemaTypeOptions({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    profimg:{
        type:String,
        required:true
    },
    adharcard:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('registeruser',registeruser)