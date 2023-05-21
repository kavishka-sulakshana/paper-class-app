import mongoose from "mongoose";

const paperSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    town : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Town",
        default : "all",
    },
    students : [{
        studentID :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Student",
        },
        uploaded : {
            type : Boolean,
            default : false
        },
        location : {
            type : String,
        },
        marks : {
            type : Number,
        },
        rank : {
            type : Number,
            default : 0,
        },
    }],
    stage : {
        type : Number,
        default : 0,
    },
    total_marks : {
        type : Number,
        default : 100,
    },
});

const Paper = mongoose.model("Paper", paperSchema);
export default Paper;