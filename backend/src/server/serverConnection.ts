import express from 'express'
import cors from "cors"
import { dbConnection } from '../db/dbConnection.js';
import { errorHandler } from '../middlewares/errorHandler.js';
import { authRouter } from '../modules/auth/auth.router.js';
import { accountRouter } from '../modules/account/account.router.js';
import { expenseRouter } from '../modules/expense/expense.router.js';

export default async function serverConnection() {
    const app = express();

    app.use(express.json());
    app.use(cors());

    await dbConnection();

    Routers(app);
    app.use(errorHandler);

    app.listen(process.env.PORT, () => {
        console.log("Server Launched")
    });
}

function Routers(app: any) {
    app.use('/auth', authRouter);
    app.use('/accounts', accountRouter);
    app.use('/expenses', expenseRouter);
}