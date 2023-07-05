import Verb from "@models/verb";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const verbs = await Verb.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(verbs), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch verbs created by user", { status: 500 })
    }
} 