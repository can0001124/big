import { Request, Response } from 'express';
import { analyzeAICommand } from '../../services/aiService';

export async function aiCommandAnalyze(req: Request, res: Response) {
  try {
    const { command } = req.body;
    const result = await analyzeAICommand(command);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'AI analyze failed.' });
  }
}
export async function aiCommandExecute(req: Request, res: Response) {
  try {
    // Örnek: Komutun platformuna göre ilgili servisi çağır
    // Parametreler ve servisler gereği gibi eklenmeli
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'AI command execution failed.' });
  }
}
