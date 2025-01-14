import { createApp, factory } from "../../../lib/imports/createApp";
import { Env } from "../../../lib/types";
import { getUsers } from "./users.handler";

let app = factory.createApp()

    .get("/", ...getUsers)
    .post("/", c => c.text("hello"))
export { app as users }