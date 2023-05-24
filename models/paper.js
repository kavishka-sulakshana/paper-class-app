import { model, models, Schema } from "mongoose";

const paperSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    town: {
        type: Schema.Types.ObjectId,
        ref: "Town",
        default: "all",
    },
    students: [
        {
            studentID: {
                type: Schema.Types.ObjectId,
                ref: "Student",
            },
            uploaded: {
                type: Boolean,
                default: false,
            },
            location: {
                type: String,
            },
            marks: {
                type: Number,
            },
            rank: {
                type: Number,
                default: 0,
            },
        },
    ],
    stage: {
        type: Number,
        default: 0,
    },
    total_marks: {
        type: Number,
        default: 100,
    },
});

const Paper = models.Paper || model("Paper", paperSchema);
export default Paper;
