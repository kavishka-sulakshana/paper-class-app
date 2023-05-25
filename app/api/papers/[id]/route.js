import Paper from "@models/paper.js";

export const GET = async (req, { params }) => {
    try {
        const paper = await Paper.findOne({ _id: params.id });
        if (!paper)
            return new Response(
                JSON.stringify({ message: "Paper not found" }),
                {
                    status: 404,
                }
            );
        return new Response(JSON.stringify(paper), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
