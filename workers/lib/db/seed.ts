import { seed } from "drizzle-seed"
import * as dbSchema from "./schemaInternal"
import * as orgSchema from "./schemaOrg"
import { DB } from "./db"
import { drizzle } from "drizzle-orm/bun-sqlite"
import { Database } from "bun:sqlite"

let sqlite = new Database("workers/demo/db/org.db")
let db = drizzle({ client: sqlite })
await seed(db, orgSchema)