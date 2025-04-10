import { createApp } from "../lib/imports/createApp"
import { org } from "./routes/[orgId]/routes.index"

const app = createApp()
    .route("/:orgId", org)
    .get("/", c => c.text("Hii"))
// .basePath("/:orgId")

export default app
