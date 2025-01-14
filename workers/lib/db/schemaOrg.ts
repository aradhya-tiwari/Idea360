import { relations } from "drizzle-orm";
import { int, sqliteTable, text, SQLiteBlobJson } from "drizzle-orm/sqlite-core";


export const ideasTable = sqliteTable("ideas", {
    id: text().primaryKey().$defaultFn(() => crypto.randomUUID().toString()),
    title: text(),
    userId: text(),
    description: text(),
    industry: text(),
    chat: text({ mode: "json" }),
    approvedBy: text({ mode: "json" }),
    history: text({ mode: "json" }),
    tags: text({ mode: "json" })
})
export const usersTable = sqliteTable("users", {
    id: text().primaryKey().$defaultFn(() => crypto.randomUUID().toString()),
    orgId: text()
})
export const ideaToUser = sqliteTable("ideaToUser", {
    ideaId: text().notNull().references(() => ideasTable.id),
    userId: text().notNull().references(() => usersTable.id),
    role: text({ enum: ["creator", "helper", "reviewer", "judge"] })
})

// Relations
export const usersRelations = relations(usersTable, ({ many }) => ({
    ideas: many(ideasTable)
}))

export const ideasRelations = relations(ideasTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [ideasTable.userId],
        references: [usersTable.id]
    })
}))

export const ideaToUserRelation = relations(ideaToUser, ({ one }) => ({
    user: one(usersTable, {
        fields: [ideaToUser.userId],
        references: [usersTable.id]
    }),
    ideas: one(ideasTable, {
        fields: [ideaToUser.ideaId],
        references: [ideasTable.id]
    })
}))