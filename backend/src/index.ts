import dotenv from 'dotenv'
dotenv.config({ path: './src/config/.env' })

import serverConnection from "./server/serverConnection.js";

serverConnection().catch((err: Error) => {
    console.log("Server Connection Failed");
    process.exit(1);
});