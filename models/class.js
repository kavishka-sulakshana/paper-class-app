import { model, models, Schema } from "mongoose";

const classSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
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
