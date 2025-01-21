import { seed } from "drizzle-seed"
import * as dbSchema from "@idea360/db/src/schema/schemaInternal"
import * as orgSchema from "@idea360/db/src/schema/schemaOrg"
import { DB } from "../db"
import { drizzle } from "drizzle-orm/bun-sqlite"
import { Database } from "bun:sqlite"

let sqlite = new Database("workers/demo/db/org.db")
let db = drizzle({ client: sqlite })
await seed(db, orgSchema)