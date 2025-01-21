import { createApp } from "../lib/imports/createApp"
import { org } from "./routes/org/handlers/org.index"

const app = createApp()
    .route("/:org/org", org)
    .get("/", c => c.text("Hii"))
// .basePath("/:orgId")

export default app
