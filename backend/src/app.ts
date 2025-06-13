import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

// Router imports
import authRouter from './api/auth/auth.routes';
import brandRouter from './api/brand/brand.routes';
import accountRouter from './api/account/account.routes';
import aiRouter from './api/ai/ai.routes';
import logRouter from './api/log/log.routes';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/brand', brandRouter);
app.use('/api/account', accountRouter);
app.use('/api/ai', aiRouter);
app.use('/api/log', logRouter);

// Healthcheck
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

export default app;
