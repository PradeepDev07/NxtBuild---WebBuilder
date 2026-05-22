import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

const app = express();

const clientOrigin = (process.env.CLIENT_URL || 'http://localhost:5173').replace(/\/$/, '');

app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: '10mb' }));
app.get('/', (req, res) => {
  res.json({ code: 200, message: 'Health check successful' });
});
app.use('/api', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
