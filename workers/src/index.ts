import app from "./app"
import { hc } from "hono/client"

export type appType = typeof app
export default app
export * as zs from "$lib/db/zod"
export * as internalSchema from "$lib/db/schema-internal"
export * as orgSchema from "$lib/db/schema-org"