import { connectDB } from "@utils/database.js";
import Class from "@models/class.js";

export const POST = async (req, res) => {
    const { name, town } = await req.json();
    try {
        await connectDB();
        const newClass = new Class({
            name,
            students: [],
            papers: [],
            town,
        });
        console.log(newClass);
        await newClass.save();
        return new Response(JSON.stringify(newClass), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
