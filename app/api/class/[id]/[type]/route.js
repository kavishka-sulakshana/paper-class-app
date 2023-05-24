import { connectDB } from "@utils/database.js";
import Class from "@models/class.js";

export const GET = async (req, { params }) => {
    try {
        await connectDB();
        let data;
        if (params.type === "students") {
            data = await Class.findOne({ _id: params.id }, { students: 1 });
        } else if (params.type === "papers") {
            data = await Class.findOne({ _id: params.id }, { papers: 1 });
        } else {
            data = await Class.findOne({ _id: params.id });
        }
        if (!data)
            return new Response(
                JSON.stringify({ message: "class not found" }),
                {
                    status: 404,
                }
            );
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
