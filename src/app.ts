require('dotenv').config();
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import FileRouter from './router/FileRouter';
import HomeRouter from './router/HomeRouter';

// * Express app instance.
const app = express();

// * App middlewares.
app.use(morgan('tiny'));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

// * App endpoints.
app.use('/', HomeRouter);
app.use('/api', FileRouter);

// * Separate app and server.
export default app;
