import { relations } from "drizzle-orm";
import { int, sqliteTable, text, SQLiteBlobJson } from "drizzle-orm/sqlite-core";
import { float32Array } from "@idea360/db/src/utils/vector";


export const ideasTable = sqliteTable("ideas", {
    id: text().primaryKey().$defaultFn(() => crypto.randomUUID().toString()),
    title: text(),
    userId: text(),
    description: text(),
    industry: text(),
    chat: text({ mode: "json" }),
    approvedBy: text({ mode: "json" }),
    history: text({ mode: "json" }),
    tags: text({ mode: "json" }),
    createdAt: text().default(Date.now().toString()),
    updatedAt: text().default(Date.now().toString())
})
export const usersTable = sqliteTable("users", {
    id: text().primaryKey().$defaultFn(() => crypto.randomUUID().toString()),
    orgId: text(),
    metadata: text({ mode: "json" })
})
export const ideaToUser = sqliteTable("ideaToUser", {
    ideaId: text().notNull().references(() => ideasTable.id),
    userId: text().notNull().references(() => usersTable.id),
    role: text({ enum: ["creator", "helper", "reviewer", "judge"] })
})
export const chatsTable = sqliteTable("chats", {
    id: text().primaryKey().$defaultFn(() => crypto.randomUUID().toString()),
    senderId: text().notNull(),
    ideaId: text().notNull(),
    timeDate: text().default(Date.now().toString()),
    message: text().notNull(),
    refrence: text()
})
// Relations
export const usersRelations = relations(usersTable, ({ many }) => ({
    ideas: many(ideasTable),
    chats: many(chatsTable)
}))

export const ideasRelations = relations(ideasTable, ({ one, many }) => ({
    user: one(usersTable, {
        fields: [ideasTable.userId],
        references: [usersTable.id]
    }),
    chats: many(chatsTable)
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

export const chatsRelations = relations(chatsTable, ({ one }) => ({
    sender: one(usersTable, {
        fields: [chatsTable.senderId],
        references: [usersTable.id]
    }),
    ideas: one(ideasTable, {
        fields: [chatsTable.ideaId],
        references: [ideasTable.id]
    })
}))