import { createMiddleware, createFactory } from "hono/factory";
import { Client, createClient } from "@libsql/client";
import { Env } from "$lib/types";
import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql";
import * as internalSchema from "$lib/db/schema-internal"
import * as orgSchema from "$lib/db/schema-org"
import { sql } from "drizzle-orm";
import { DB } from "@idea360/db";


export let db = createMiddleware<Env>(async (c, next) => {
    // db for internal database
    const dbb = DB({ type: "internal", id: "" }, c.env.TURSO_TOKEN, c.env.ENV)
    if (dbb)
        // @ts-ignore because it has to be 
        c.set("internal", dbb)
    else
        throw "error while creating connecting to Internal database... /from middleware, db not set"

    // org for organisations database 
    const org = async (id: string) => await DB({ type: "org", id: id }, c.env.TURSO_TOKEN, c.env.ENV)
    if (org)
        try {
            // @ts-ignore because it has to be ?
            c.set("org", org)
        } catch (e) {
            console.log("Error in database init")
        }
    else
        throw "error while creating connecting to Organisations database... /from middleware, org not set"

    // set variables for schemas
    c.set("internalSchema", internalSchema)
    c.set("orgSchema", orgSchema)
    // console.log(await c.req.json(), "bodyyyyyyyyy")
    await next()

})

