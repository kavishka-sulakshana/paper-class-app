import { connectDB } from "@utils/database.js";
import Student from "@models/student.js";

export const POST = async (req, res) => {
    const { barcode } = await req.json();
    try {
        await connectDB();
        // console.log(barcode);
        const students = await Student.find(
            {
                barcode: barcode,
            },
            { _id: 1, barcode: 1, name: 1, school: 1, year: 1 }
        );
        return new Response(JSON.stringify(students), { status: 200 });
    } catch (error) {
        // console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
