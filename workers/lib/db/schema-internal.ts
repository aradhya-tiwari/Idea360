import { int, integer, sqliteTable, text, SQLiteBlobJson } from "drizzle-orm/sqlite-core";
import { float32Array } from "@idea360/db";

export let usersTable = sqliteTable("users", {
    id: int().primaryKey({ autoIncrement: true, }),
    email: text().unique(),
    username: text().unique(),
    password: text(),
    extra: text({ mode: "json" })
})


export let OrgTable = sqliteTable("orgs", {
    id: int().primaryKey({ autoIncrement: true, }),
    name: text().unique(),
    password: text(),
    members: text({ mode: "json" }),
    About: text(),
})

