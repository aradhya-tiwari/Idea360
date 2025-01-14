import { createApp } from "../lib/imports/createApp"
import { users } from "./routes/users/users.index"

const app = createApp()
    .route("/:org/users", users)
    .get("/", c => c.text("Hii"))
// .basePath("/:orgId")

export default app
