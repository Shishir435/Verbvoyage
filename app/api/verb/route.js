import Verb from "@models/verb";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const verbs = await Verb.find({}).populate('creator')

        return new Response(JSON.stringify(verbs), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all verbs", { status: 500 })
    }
} 