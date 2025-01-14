import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schemaInternal"

let db = drizzle({
    connection: {
        url: "http://localhost:8080",
        authToken: ""
    }
    , schema
})

await db.query.ideasTable.findMany({

})