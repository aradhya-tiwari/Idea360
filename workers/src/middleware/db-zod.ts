import { createMiddleware, createFactory } from "hono/factory";
import { Client, createClient } from "@libsql/client";
import { Env } from "../../lib/types";
import { drizzle, LibSQLDatabase } from "drizzle-orm/libsql";
import * as dbSchema from "../../lib/db/schemaInternal"
import * as orgSchema from "../../lib/db/schemaOrg"
import { sql } from "drizzle-orm";
import { DB } from "../../lib/db/db";


export let db = createMiddleware<Env>(async (c, next) => {
    // db for internal database

    let dbb = DB("internal", c.env.TURSO_TOKEN, c.env.ENV)
    if (dbb)
        // @ts-ignore because it has to be 
        c.set("db", dbb)
    else
        throw ("error while creating Database org")

    // org for organisations database 
    let org = DB("org" as string, c.env.TURSO_TOKEN, c.env.ENV)
    if (org)
        // @ts-ignore because it has to be 
        c.set("org", org)
    else
        throw ("error while creating Database org")

    c.set("dbSchema", dbSchema)
    c.set("orgSchema", orgSchema)
    // console.log(await c.req.json(), "bodyyyyyyyyy")
    await next()

})

