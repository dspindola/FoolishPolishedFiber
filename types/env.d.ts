declare module "bun" {
    interface Env {
        APP_SERVER_PORT: string;
        APP_SERVER_HOSTNAME: string;
        APP_SERVER_URL: string;
        APP_SERVER_ORIGIN: string;
    }

    export const origin: string;
}