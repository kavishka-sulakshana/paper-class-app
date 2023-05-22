import { models, Schema, model } from "mongoose";

const StudentSchema = new Schema({
    name: {
        type: String,
    },
    barcode: {
        type: Number,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    telegram_username: {
        type: String,
    },
    school: {
        type: String,
    },
    year: {
        type: Number,
    },
});

const Student = models.Student || model("Student", StudentSchema);
export default Student;
