import { connectDB } from "@utils/database.js";
import Student from "@models/student.js";

export const POST = async (req, res) => {
    const { name, barcode, email, telegram_username, year, school } =
        await req.json();
    try {
        await connectDB();
        const newStudent = new Student({
            name,
            barcode,
            email,
            phone: "0784567888",
            telegram_username,
            school,
            year,
        });
        console.log(newStudent);
        await newStudent.save();
        return new Response(JSON.stringify(newStudent), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
