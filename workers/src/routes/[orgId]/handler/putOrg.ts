import { factory } from "$lib/imports/createApp";
import { respBody } from "$lib/types";
import { sql } from "drizzle-orm";
import { zs } from "src";
// import { eq } from "drizzle-orm";

export const putOrg = factory.createHandlers(async (c) => {
    const res: respBody = {
        success: true,
    }
    const orgId = c.req.param('orgId') as string
    let db = await c.var.internal
    let body = await c.req.json()
    let parsedBody = zs.updateOrgInternal.safeParse(body)
    if (parsedBody.success && parsedBody.data) {
        let orgContent = await db.update(c.var.internalSchema.OrgTable).set(parsedBody.data)
        res.data = orgContent
    }
    else {
        res.success = false
        res.msg = "Cannot updates Data"
    }
    return c.json<respBody>(res)
})