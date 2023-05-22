import { connectDB } from "@utils/database.js";
import Student from "@models/student.js";

export const GET = async (req, { params }) => {
    try {
        await connectDB();
        const student = await Student.findOne({ _id: params.id });
        if (!student)
            return new Response(
                JSON.stringify({ message: "Student not found" }),
                {
                    status: 404,
                }
            );
        return new Response(JSON.stringify(student), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
