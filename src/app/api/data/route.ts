export async function GET() {
  return new Response(JSON.stringify({ message: 'This is a mocked API response' }), {
    status: 200,
  });
}