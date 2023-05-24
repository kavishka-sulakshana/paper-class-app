import { connectDB } from "@utils/database.js";
import Student from "@models/student.js";

export const GET = async (req, { params }) => {
    try {
        await connectDB();
        const students = await Student.find(
            {
                barcode: { $regex: `${params.barcode}*`, $options: "i" },
            },
            { _id: 1, barcode: 1, name: 1 }
        );
        return new Response(JSON.stringify(students), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
