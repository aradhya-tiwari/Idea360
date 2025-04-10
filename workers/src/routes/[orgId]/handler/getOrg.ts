import { factory } from "$lib/imports/createApp";
import { sql } from "drizzle-orm";
// import { eq } from "drizzle-orm";

export const getOrg = factory.createHandlers(async (c) => {
    const orgId = c.req.param('orgId') as string
    let db = await c.var.internal

    let orgContent = await db.query.OrgTable.findFirst({
        where: sql`id = ${orgId}`
    })
    return c.json({ msg: orgContent })
})