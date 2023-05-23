import { connectDB } from "@utils/database.js";
import Class from "@models/class.js";

export const GET = async (req, res) => {
    try {
        await connectDB();
        const classes = await Class.aggregate([
            {
                $project: {
                    _id: 1,
                    name: 1,
                    students: { $size: "$students" },
                    papers: { $size: "$papers" },
                    town: 1,
                },
            },
        ]);
        return new Response(JSON.stringify(classes), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
