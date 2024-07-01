import type { Serve } from "bun";
import { handleRequest } from "@/entry.server";

export default {
    port: Bun.env.APP_SERVER_PORT,
    hostname: Bun.env.APP_SERVER_HOSTNAME,
    async fetch(request) {
        return await handleRequest({ request })
    },
    development: Bun.env.NODE_ENV !== 'production'
} satisfies Serve

