import { createRouter } from "./entry.router";

export async function handleRequest({ request }: { request: Request }) {
    const router = createRouter({ api: { base: 'app/routes' }, app: { base: 'app/routes' } }, { origin: Bun.origin });
    const url = new URL(request.url);
    const route = url.pathname.startsWith("/api") ? { target: 'api', match: router["/api/router"] } : { target: 'app', match: router["/app/router"] };

    switch (route.target) {
        case 'api': {
            const METHOD = request.method
            const module = await import(route.match.match(request)?.filePath as string).then(m => m[METHOD.toUpperCase()](
                { query: route.match.match(request)?.query, params: route.match.match(request)?.params }
            ));
            return new Response(await module, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
        case 'app': {
            const module = await import(route.match.match(request)?.filePath as string).then(m => m.$render);
            return new Response(await module({ query: route.match.match(request)?.query, params: route.match.match(request)?.params }), {
                headers: {
                    "Content-Type": "text/html"
                }
            });
        }
        default: {
            return new Response("Not Found", { status: 404 });
        }
    }
}