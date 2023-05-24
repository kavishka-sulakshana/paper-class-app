import { model, models, Schema } from "mongoose";

const townSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

const Town = models.Town || model("Town", townSchema);
export default Town;
