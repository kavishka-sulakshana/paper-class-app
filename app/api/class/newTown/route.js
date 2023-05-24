import { connectDB } from "@utils/database.js";
import Town from "@models/town.js";

export const POST = async (req, res) => {
    const { name } = await req.json();
    try {
        await connectDB();
        const newTown = new Town({
            name,
        });
        console.log(newTown);
        await newTown.save();
        return new Response(JSON.stringify(newTown), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
