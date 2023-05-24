import { connectDB } from "@utils/database.js";
import Class from "@models/class.js";

export const PATCH = async (req, { params }) => {
    const { name, town } = await req.json();
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

        clz.name = name;
        clz.town = town;
        await clz.save();
        return new Response(JSON.stringify(clz), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
