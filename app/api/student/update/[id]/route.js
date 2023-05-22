import { connectDB } from "@utils/database.js";
import Student from "@models/student.js";

export const PATCH = async (req, { params }) => {
    const { name, barcode, email, telegram_username, year, school } =
        await req.json();
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

        student.name = name;
        student.barcode = barcode;
        student.email = email;
        student.telegram_username = telegram_username;
        student.year = year;
        student.school = school;
        await student.save();
        return new Response(JSON.stringify(student), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
