import Verb from "@models/verb";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, verb, tag } = await request.json();

    try {
        await connectToDB();
        const newVerb = new Verb({ creator: userId, verb, tag });

        await newVerb.save();
        return new Response(JSON.stringify(newVerb), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new verb", { status: 500 });
    }
}
