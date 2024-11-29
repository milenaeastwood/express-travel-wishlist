import express from 'express';
import { wishlistRouter } from './routes/wishlistRouter.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', wishlistRouter);

app.use(errorHandler);

export default app;