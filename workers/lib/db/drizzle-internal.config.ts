import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
    out: 'workers/lib/db/migrations/internal',
    schema: 'workers/lib/db/schema-internal.ts',
    dialect: 'turso',

    dbCredentials: {
        url: "file:./packages/common/internal.db",
        authToken: process.env.TURSO_AUTH_TOKEN!,
    },
});