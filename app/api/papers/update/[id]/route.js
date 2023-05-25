import { connectDB } from "@utils/database.js";
import Paper from "@models/paper.js";

export const PATCH = async (req, { params }) => {
    const { name, town, total_marks } = await req.json();
    try {
        await connectDB();
        const paper = await Paper.findOne({ _id: params.id });
        if (!paper)
            return new Response(
                JSON.stringify({ message: "Student not found" }),
                {
                    status: 404,
                }
            );
        paper.name = name;
        paper.town = town;
        paper.total_marks = total_marks;
        await paper.save();
        return new Response(JSON.stringify(paper), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
