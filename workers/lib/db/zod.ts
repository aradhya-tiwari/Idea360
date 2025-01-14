import * as schema from './schemaInternal'
import { createInsertSchema, createUpdateSchema, createSelectSchema, } from "drizzle-zod"

export const insertUser = createInsertSchema(schema.usersTable)
export const updateUser = createUpdateSchema(schema.usersTable)
export const selectUser = createSelectSchema(schema.usersTable)
