import Verb from "@models/verb";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const verb = await Verb.findById(params.id).populate("creator")
        if (!verb) return new Response("Verb Not Found", { status: 404 });

        return new Response(JSON.stringify(verb), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { verb, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing verb by ID
        const existingVerb = await Verb.findById(params.id);

        if (!existingVerb) {
            return new Response("Verb not found", { status: 404 });
        }

        // Update the verb with new data
        existingVerb.verb = verb;
        existingVerb.tag = tag;

        await existingVerb.save();

        return new Response("Successfully updated the verbs", { status: 200 });
    } catch (error) {
        return new Response("Error Updating verb", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the verb by ID and remove it
        await Verb.findByIdAndRemove(params.id);

        return new Response("Verb deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting verb", { status: 500 });
    }
};
