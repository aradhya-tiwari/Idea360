import app from "src"

export * as zs from "$lib/db/zod"
export * as internalSchema from "$lib/db/schema-internal"
export * as orgSchema from "$lib/db/schema-org"
export default app
export type AppType = typeof app