require('dotenv').config();
import cors from 'cors';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import DefaultRoute from './routes/DefaultRoute';
import FileRoute from './routes/FileRoute';

// * Express app instance.
const app = express();

// * App middlewares.
app.use(morgan('tiny'));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

// * App endpoints.
app.use('/', FileRoute);
app.use('/api', DefaultRoute);

// * Separate app and server.
export default app;
