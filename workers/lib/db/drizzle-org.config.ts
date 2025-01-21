import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
    out: './workers/lib/db/migrations/org',
    schema: './workers/lib/db/schema-org.ts',
    dialect: 'turso',

    dbCredentials: {
        url: "file:./packages/common/org.db",
        authToken: process.env.TURSO_AUTH_TOKEN!,
    },
});