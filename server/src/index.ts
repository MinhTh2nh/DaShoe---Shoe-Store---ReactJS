import { config } from "dotenv";

config();

import { start, stop } from "./app";

start().catch();

process.on("SIGTERM", async () => {
    await stop().catch();
    process.exit(0);
});
