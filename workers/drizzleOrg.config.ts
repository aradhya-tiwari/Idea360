import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
    out: './workers/src/lib/migrations/db/',
    schema: './workers/lib/db/schemaOrg.ts',
    dialect: 'turso',

    dbCredentials: {
        url: "file:./workers/demo/db/org.db",
        authToken: process.env.TURSO_AUTH_TOKEN!,
    },
});