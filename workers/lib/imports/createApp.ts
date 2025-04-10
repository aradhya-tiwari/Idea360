import { cors } from "hono/cors";
import { createFactory, createMiddleware } from "hono/factory";
import { db } from "../../src/middleware/db-zod";
import { Env } from "../types";
import { logger } from "hono/logger";

export const factory = createFactory<Env>()

export function createRouter() {
    return factory.createApp()
}

export function createApp() {
    return createRouter()
        .use("*", cors({
            origin: ["http://localhost:5173", "http://127.0.0.1:5173"]
        })).use("*", async (c, next) => {
            await next()
        })
        .use("*", db)
        .use(logger())
}

// middleware and handler not possible because it has definations
