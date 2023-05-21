import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    barcode : {
        type : Number,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        match : [/.+\@.+\..+/, "Please enter a valid email"]
    },
    phone : {
        type : String,
    },
    telegram_username : {
        type : String,
    },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
