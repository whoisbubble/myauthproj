export async function POST(req: Request) {
  const body = await req.json();

  console.log("Received from client:", body);

  return new Response(
    JSON.stringify({
      success: true,
      message: "Logged in!",
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
