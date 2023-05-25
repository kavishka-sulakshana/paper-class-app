import { connectDB } from "@utils/database.js";
import Class from "@models/class.js";
import { Types } from "mongoose";

export const POST = async (req, res) => {
    const { class_id, student_id } = await req.json();
    try {
        await connectDB();
        const classData = await Class.findOne(
            {
                students: {
                    $elemMatch: {
                        studentID: new Types.ObjectId(student_id),
                    },
                },
            },
            { _id: 1 }
        );
        if (!classData) {
            const newClass = await Class.findByIdAndUpdate(
                class_id,
                {
                    $push: { students: { studentID: student_id, paid: false } },
                },
                { new: true }
            );
            return new Response(JSON.stringify(newClass), { status: 201 });
        } else {
            return new Response(
                JSON.stringify({ ...classData, message: "already_added" }),
                { status: 201 }
            );
        }
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
