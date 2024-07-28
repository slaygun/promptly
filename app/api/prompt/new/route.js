import Prompt from "@/models/prompt";
import { connecToDB } from "@/utils/database";

export const POST = async (res) => {
    const { userId, prompt, tag } = await req.json();
}
try {
    await connecToDB();
    const newPrompt = new Prompt({
        creator: userId,
        tag
    })

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 })
} catch (error) {
    return new Response('Failed to create a prompt', { status: 500 })
}
