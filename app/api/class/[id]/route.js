import { connectDB } from "@utils/database.js";
import Class from "@models/class.js";

export const GET = async (req, { params }) => {
    try {
        await connectDB();
        const clz = await Class.findOne({ _id: params.id });
        if (!clz)
            return new Response(
                JSON.stringify({ message: "class not found" }),
                {
                    status: 404,
                }
            );
        return new Response(JSON.stringify(clz), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};

export const DELETE = async (req, { params }) => {
    try {
        await connectDB();
        const clz = await Class.findByIdAndDelete(params.id);
        if (!clz)
            return new Response(
                JSON.stringify({ message: "class not found" }),
                {
                    status: 404,
                }
            );
        return new Response(JSON.stringify(clz), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
