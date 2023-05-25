import { connectDB } from "@utils/database.js";
import Paper from "@models/paper.js";
import { Types } from "mongoose";

export const GET = async (req, { params }) => {
    try {
        await connectDB();

        const data = await Paper.aggregate([
            {
                $match: {
                    _id: new Types.ObjectId(params.id),
                },
            },
            {
                $lookup: {
                    from: "students",
                    localField: "students.studentID",
                    foreignField: "_id",
                    as: "results",
                },
            },
            {
                $project: {
                    results: {
                        name: 1,
                        barcode: 1,
                        school: 1,
                        year: 1,
                    },
                },
            },
        ]);
        // console.log(data[0].results);
        if (!data)
            return new Response(
                JSON.stringify({ message: "class not found" }),
                {
                    status: 404,
                }
            );
        return new Response(JSON.stringify(data[0].results), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
