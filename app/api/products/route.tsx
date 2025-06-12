import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb, queryDb } from '@/lib/mssql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToDb();
    const result = await queryDb('SELECT * FROM Product');
    res.status(200).json(result);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Error fetching data' });
  }
}