import mongoose from "mongoose";

const classSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    students : [{
        studentID :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Student",
        },
        paid : {
            type : Boolean,
            default : false
        }
    }],
    papers : [{
        paperID : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Paper",  
        },
    }],
});

const Class = mongoose.model("Class", classSchema);
export default Class;

