import { Request, Response } from 'express';
import Brand from '../../models/Brand';

export async function createBrand(req: Request, res: Response) {
  try {
    const { name } = req.body;
    const userId = (req as any).user.id;
    const brand = await Brand.create({ name, userId });
    res.status(201).json(brand);
  } catch (err) {
    res.status(500).json({ error: 'Brand creation failed.' });
  }
}

export async function getBrands(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const brands = await Brand.findAll({ where: { userId } });
    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch brands.' });
  }
}

export async function updateBrand(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const { id } = req.params;
    const { name } = req.body;
    const brand = await Brand.findOne({ where: { id, userId } });
    if (!brand) return res.status(404).json({ error: 'Brand not found.' });

    brand.name = name;
    await brand.save();
    res.json(brand);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update brand.' });
  }
}

export async function deleteBrand(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const { id } = req.params;
    const brand = await Brand.findOne({ where: { id, userId } });
    if (!brand) return res.status(404).json({ error: 'Brand not found.' });

    await brand.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete brand.' });
  }
}
