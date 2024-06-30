import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        phone:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        message:{
            type:String,
            require:true
        },
       
    },
    {
        timestamp: true,
    })

    export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);