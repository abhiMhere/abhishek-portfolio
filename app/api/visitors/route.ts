import { kv } from "@vercel/kv";

export async function GET() {
  try {
    const count = await kv.incr("visitors");
    return Response.json({ count });
  } catch (error) {
    console.error(error);
    return Response.json({ count: 0 });
  }
}