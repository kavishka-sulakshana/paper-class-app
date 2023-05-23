import { model, models, Schema } from "mongoose";

const classSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    students: [
        {
            studentID: {
                type: Schema.Types.ObjectId,
                ref: "Student",
            },
            paid: {
                type: Boolean,
                default: false,
            },
        },
    ],
    papers: [
        {
            paperID: {
                type: Schema.Types.ObjectId,
                ref: "Paper",
            },
        },
    ],
    town: {
        type: String,
        ref: "Town",
    },
});

const Class = models.Class || model("Class", classSchema);
export default Class;
