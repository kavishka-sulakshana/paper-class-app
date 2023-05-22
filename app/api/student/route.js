import { connectDB } from "@utils/database.js";
import Student from "@models/student.js";

export const GET = async (req, res) => {
    try {
        await connectDB();
        const students = await Student.find({});
        return new Response(JSON.stringify(students), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
