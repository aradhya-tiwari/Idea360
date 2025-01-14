import { sql } from "drizzle-orm";
import { customType } from "drizzle-orm/sqlite-core";

export const float32Array = customType<{
    data: number[];
    config: { dimensions: number };
    configRequired: true;
    driverData: Buffer;
}>({
    dataType(config) {
        return `F32_BLOB(${config.dimensions})`;
    },
    fromDriver(value: Buffer) {
        return Array.from(new Float32Array(value.buffer));
    },
    toDriver(value: number[]) {
        return sql`vector32(${JSON.stringify(value)})`;
    },
});


import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
    url: "process.env.TURSO_DATABASE_URL!",
    authToken: "process.env.TURSO_AUTH_TOKEN",
});

const db = drizzle(client);

await db.run(sql`
  CREATE INDEX IF NOT EXISTS vector_index
  ON vector_table(vector)
  USING vector_cosine(3)
`);
