import { OrgTable } from './schema-internal'
import { usersTable, ideasTable } from "./schema-org"

import { createInsertSchema, createUpdateSchema, createSelectSchema, } from "drizzle-zod"

export const insertUser = createInsertSchema(usersTable)
export const updateUser = createUpdateSchema(usersTable)
export const selectUser = createSelectSchema(usersTable)

export const insertOrg = createInsertSchema(ideasTable)
export const updateOrg = createUpdateSchema(ideasTable)
export const selectOrg = createSelectSchema(ideasTable)

export const updateOrgInternal = createUpdateSchema(OrgTable)
// export const insertUs = createInsertSchema(orgSchema.ideasTable)
// export const updateOrg = createUpdateSchema(orgSchema.ideasTable)
// export const selectOrg = createSelectSchema(orgSchema.ideasTable)
