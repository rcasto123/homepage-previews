import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const store = getStore("site-config");
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (req.method === "GET") {
    const current = await store.get("currentDesign");
    return new Response(
      JSON.stringify({ current: current || "v1" }),
      { headers }
    );
  }

  if (req.method === "POST") {
    const body = await req.json();
    const design = body.design;
    if (!design) {
      return new Response(
        JSON.stringify({ error: "Missing design field" }),
        { status: 400, headers }
      );
    }
    await store.set("currentDesign", design);
    return new Response(
      JSON.stringify({ success: true, current: design }),
      { headers }
    );
  }

  return new Response("Method not allowed", { status: 405, headers });
};
