import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { internalSchema } from "@idea360/workers"
import { orgSchema } from "@idea360/workers"

type db = {
    type: "internal" | "org",
    id: string
}

export async function DB(db: db, authToken: string, env: "DEV" | "STAGE1" | "STAGE2" | "PROD") {
    let url: string = ""
    let schema: typeof orgSchema | typeof internalSchema = orgSchema
    if (db.type === "internal") {
        if (env === "DEV") {
            url = `http://127.0.0.1:8080`
        }
        else if (env === "PROD" || env === "STAGE1") {
            url = `libsql://main-arytiwa.turso.io`
        }
        schema = internalSchema
    }
    else if (db.type === "org") {
        if (env === "DEV") {
            url = `http://127.0.0.1:8090`
        } else if (env === "PROD" || env === "STAGE1") {
            url = `libsql://${db.id}-arytiwa.turso.io`
        }
        schema = orgSchema
    }
    else {
        console.log("error in creating DB() function")
        throw "problem while creating database in DB() function"
    }

    const client = drizzle({
        connection: {
            url: url,
            authToken: authToken
        }
        , schema
    })
    try {
        // console.log(client.$client.closed)
        return client
    } catch (e) {
        console.log("error in client")
        throw "Problem while initiating database client"
    }
}

// ! X [ERROR] Uncaught (async) Error: internal error
// above error is caused by db instance not running
// TODO if user is authenticated, means db working