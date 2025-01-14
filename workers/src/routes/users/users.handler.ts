import { eq, sql } from "drizzle-orm";
import { factory } from "../../../lib/imports/createApp";
import { usersTable } from "../../../lib/db/schemaInternal";
import { Hono } from "hono";

export const getUsers = factory.createHandlers(async (c) => {
    let db = c.var.db
    let users = await db.query.usersTable.findMany({
        limit: 10
    })

    // let users = await db.insert(c.var.schema.usersTable).values({

    //     username: "divi",
    //     email: "divi.prad@gmail.com",
    //     password: 'dduogb4oiubw',
    //     extra: {}

    // })
    let { org } = c.req.param()

    return c.json({ data: users, param: org })
})

const getUsersByOrg = factory.createHandlers(async (c, r) => {
    let db = c.var.org

})


