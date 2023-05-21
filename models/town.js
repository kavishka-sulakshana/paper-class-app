import mongoose from "mongoose";

const townSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    }
});

const Town = mongoose.model("Town", townSchema);
export default Town;