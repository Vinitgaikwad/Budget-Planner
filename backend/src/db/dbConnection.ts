import mongoose from 'mongoose'

export async function dbConnection() {
    try {
        const connectionStr = process.env.DB_CONNECTION_STRING;
        console.log(connectionStr);

        if (connectionStr) {
            await mongoose.connect(connectionStr);
        }
    } catch (error) {
        console.log("Connection Failed");
        process.exit(1);
    }
}