import { Request, Response } from 'express';
import ActionLog from '../../models/ActionLog';

export async function getUserLogs(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const logs = await ActionLog.findAll({ where: { userId }, order: [['createdAt', 'DESC']] });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch logs.' });
  }
}

export async function getAllLogs(req: Request, res: Response) {
  try {
    const logs = await ActionLog.findAll({ order: [['createdAt', 'DESC']] });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch all logs.' });
  }
}
