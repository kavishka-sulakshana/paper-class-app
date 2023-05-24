import { connectDB } from "@utils/database.js";
import Paper from "@models/paper.js";
import Class from "@models/class";

export const POST = async (req, res) => {
    const { clz_id, name, town, total_marks } = await req.json();
    try {
        await connectDB();
        const newPaper = new Paper({
            name,
            town,
            students: [],
            stage: 0,
            total_marks,
        });
        await newPaper.save();
        const clz = await Class.findByIdAndUpdate(
            clz_id,
            {
                $push: { papers: { paperID: newPaper._id } },
            },
            { new: true }
        );
        console.log(clz);
        return new Response(JSON.stringify(newPaper), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
