import User from '../models/User';
export async function requireEthicalConsent(req, res, next) {
  const userId = (req as any).user.id;
  const user = await User.findByPk(userId);
  if (!user?.ethicalConsentGiven) {
    return res.status(403).json({ error: 'Etik sözleşme onaylanmadan işlem yapılamaz.' });
  }
  next();
}
