import { connectDB } from "@utils/database.js";
import Class from "@models/class.js";
import { Types } from "mongoose";

export const GET = async (req, { params }) => {
    try {
        await connectDB();
        let data;
        if (params.type === "students") {
            data = await Class.aggregate([
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
        } else if (params.type === "papers") {
            data = await Class.aggregate([
                {
                    $match: {
                        _id: new Types.ObjectId(params.id),
                    },
                },
                {
                    $lookup: {
                        from: "paper",
                        localField: "papers.paperID",
                        foreignField: "_id",
                        as: "results",
                    },
                },
                {
                    $project: {
                        results: {
                            name: 1,
                            town: 1,
                            total_marks: 1,
                        },
                    },
                },
            ]);
            console.log(data[0].results);
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
        return new Response(JSON.stringify(data[0].results), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
