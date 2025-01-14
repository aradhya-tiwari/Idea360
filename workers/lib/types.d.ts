import { Client } from "@libsql/client"
import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql"
import type * as dbSchema from "./db/schemaInternal"
import type * as orgSchema from "./db/schemaOrg"
export type Env = {
    Variables: {
        db: LibSQLDatabase<typeof dbSchema> & {
            $client: Client;
        },
        org: LibSQLDatabase<typeof orgSchema> & {
            $client: Client;
        },
        dbSchema: typeof dbSchema
        orgSchema: typeof orgSchema
    },
    Bindings: {
        ENV: "DEV" | "PRODUCTION",
        TURSO_URL: string,
        TURSO_TOKEN: string
    }
}

