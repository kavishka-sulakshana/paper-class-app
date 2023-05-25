import { connectDB } from "@utils/database.js";
import Paper from "@models/paper.js";
import { Types } from "mongoose";

export const POST = async (req, res) => {
    const { paper_id, student_id } = await req.json();
    try {
        await connectDB();
        const paperData = await Paper.findOne(
            {
                students: {
                    $elemMatch: {
                        studentID: new Types.ObjectId(student_id),
                    },
                },
            },
            { _id: 1 }
        );
        if (!paperData) {
            const newPaper = await Paper.findByIdAndUpdate(
                paper_id,
                {
                    $push: { students: { studentID: student_id, paid: false } },
                },
                { new: true }
            );
            return new Response(JSON.stringify(newPaper), { status: 201 });
        } else {
            return new Response(
                JSON.stringify({ ...paperData, message: "already_added" }),
                { status: 201 }
            );
        }
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
