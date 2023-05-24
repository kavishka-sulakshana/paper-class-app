import { connectDB } from "@utils/database.js";
import Class from "@models/class.js";

export const POST = async (req, res) => {
    const { class_id, student_id } = await req.json();
    try {
        await connectDB();
        await Class.findByIdAndUpdate(class_id, {
            $push: { students: { studentID: student_id, paid: false } },
        });
        return new Response(JSON.stringify(newClass), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
