import { Request, Response } from 'express';
import SocialMediaAccount from '../../models/SocialMediaAccount';

export async function addAccount(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const { platform, username, encryptedAuth } = req.body;
    const account = await SocialMediaAccount.create({ platform, username, encryptedAuth, userId });
    res.status(201).json(account);
  } catch (err) {
    res.status(500).json({ error: 'Account creation failed.' });
  }
}

export async function getAccounts(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const accounts = await SocialMediaAccount.findAll({ where: { userId } });
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch accounts.' });
  }
}

export async function updateAccount(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const { id } = req.params;
    const { username, encryptedAuth } = req.body;
    const account = await SocialMediaAccount.findOne({ where: { id, userId } });
    if (!account) return res.status(404).json({ error: 'Account not found.' });

    account.username = username;
    account.encryptedAuth = encryptedAuth;
    await account.save();
    res.json(account);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update account.' });
  }
}

export async function deleteAccount(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const { id } = req.params;
    const account = await SocialMediaAccount.findOne({ where: { id, userId } });
    if (!account) return res.status(404).json({ error: 'Account not found.' });

    await account.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete account.' });
  }
}
