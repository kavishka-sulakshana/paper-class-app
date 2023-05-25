import { connectDB } from "@utils/database.js";
import Town from "@models/town.js";

export const GET = async (req, res) => {
    try {
        await connectDB();
        const towns = await Town.find({});
        return new Response(JSON.stringify(towns), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};

export const DELETE = async (req, { params }) => {
    try {
        const town = await Town.findByIdAndDelete(params.id);
        if (!town)
            return new Response(JSON.stringify({ message: "Town not found" }), {
                status: 404,
            });
        return new Response(JSON.stringify(town), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
