import { createRouter } from "$lib/imports/createApp";
import { getOrg } from "./handler/getOrg";
import { putOrg } from "./handler/putOrg";

export let org = createRouter()
    .get("/", ...getOrg)
    .put("/", ...putOrg)