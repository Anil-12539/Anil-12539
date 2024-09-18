import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const serviceImagesDir = path.join(process.cwd(), 'public', 'Serviceimages');
  
  try {
    const fileNames = fs.readdirSync(serviceImagesDir);
    const imagePaths = fileNames.map(fileName => `/Serviceimages/${fileName}`);
    res.status(200).json(imagePaths);
  } catch (error) {
    console.error('Error reading Serviceimages directory:', error);
    res.status(500).json({ error: 'Unable to read images directory' });
  }
}