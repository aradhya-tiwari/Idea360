import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as internalSchema from "./schemaInternal"
import * as orgSchema from "./schemaOrg"


export function DB(id: string, authToken: string, env: "DEV" | "STAGE" | "PRODUCTION") {
    let url: string = ""
    let schema: typeof orgSchema | typeof internalSchema = orgSchema
    console.log("id", id, env)
    if (id === "internal") {
        if (env === "DEV") {
            url = `http://127.0.0.1:8080`
        }
        else if (env === "PRODUCTION" || env === "STAGE") {
            url = `libsql://main-arytiwa.turso.io`
        }
        schema = internalSchema
    }
    else if (id.slice(0, 3) === "org") {
        if (env === "DEV") {
            url = `http://127.0.0.1:8090`
        } else if (env === "PRODUCTION" || env === "STAGE") {
            url = `libsql://${id}-arytiwa.turso.io`
        }
        schema = orgSchema
    }
    else {
        console.log("+++++++++++++++++++++++++Executed++++++++++++++++++++++++++", url, (schema ? "yes Schema" : "no Schema"))
        throw "problem while creating database in DB() function"
    }

    return drizzle({
        connection: {
            url: "http://localhost:8090",
            authToken: authToken
        }
        , schema
    })
}