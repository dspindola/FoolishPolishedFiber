export function createAppRouter({ dir, origin }: { dir: string, origin: string }) {
    return new Bun.FileSystemRouter({
        dir,
        style: "nextjs",
        fileExtensions: [".tsx", ".jsx", ".mdx"],
        assetPrefix: "/",
        origin
    })
}


export function createApiRouter({ dir, origin }: { dir: string, origin: string }) {
    return new Bun.FileSystemRouter({
        dir,
        style: "nextjs",
        fileExtensions: [".ts", ".js", ".json"],
        origin
    })
}

export function createRouter({ api, app }: {
    api: { base: string },
    app: { base: string }
}, options: { origin: string } = { origin: Bun.origin }) {
    return ({
        '/api/router': createApiRouter({ dir: api.base, origin: options.origin }),
        '/app/router': createAppRouter({ dir: app.base, origin: options.origin })
    })
}