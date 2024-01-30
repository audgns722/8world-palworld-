// pages/api/roadData.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public/rawData.csv');
    const csvFile = fs.readFileSync(filePath, 'utf8');

    const rows = csvFile.split('\n');
    const header = rows[0].split(',');
    const data = rows.slice(1).map(row => row.split(','));

    res.status(200).json({ header, data });
}