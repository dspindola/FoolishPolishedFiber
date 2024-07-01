export async function GET({ query, params }: { query: Record<string, string>, params: Record<string, string> }) {
  return JSON.stringify({ query, params })
}

export async function POST({ query, params }: { query: Record<string, string>, params: Record<string, string> }) {
  return JSON.stringify({ query, params })
}
