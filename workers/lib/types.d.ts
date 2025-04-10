import { Client } from "@libsql/client"
import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql"
import * as internalSchema from "$lib/db/schema-internal"
import * as orgSchema from "$lib/db/schema-org"
export type Env = {
    Variables: {
        internal: Promise<LibSQLDatabase<typeof internalSchema> & {
            $client: Client;
        }>,
        org: (id: string) => Promise<LibSQLDatabase<typeof orgSchema> & {
            $client: Client;
        }>,
        internalSchema: typeof internalSchema
        orgSchema: typeof orgSchema
    },
    Bindings: {
        ENV: "DEV" | "PROD" | "STAGE1" | "STAGE2",
        TURSO_URL: string,
        TURSO_TOKEN: string
    }
}

export type respBody = {
    success: boolean,
    data?: Array<any> | any | undefined,
    msg?: string,
    err?: string

}

