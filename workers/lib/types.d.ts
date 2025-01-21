import { Client } from "@libsql/client"
import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql"
import { internalSchema } from "@idea360/db"
import { orgSchema } from "@idea360/db"
export type Env = {
    Variables: {
        db: Promise<LibSQLDatabase<typeof dbSchema> & {
            $client: Client;
        }>,
        org: (id: string) => Promise<LibSQLDatabase<typeof orgSchema> & {
            $client: Client;
        }>,
        internalSchema: typeof internalSchema
        orgSchema: typeof orgSchema
    },
    Bindings: {
        ENV: "DEV" | "PROD" | "STAGE",
        TURSO_URL: string,
        TURSO_TOKEN: string
    }
}

export type respBody = {
    success: boolean,
    data?: Array<any>,
    error?: {
        msg: string,
        err: string
    }
}

