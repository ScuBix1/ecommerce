import path from 'node:path';
import fs from 'node:fs';

export default function getBase64Image(relativePath: string) {
  const filePath = path.join(process.cwd(), relativePath);
  const imageBuffer = fs.readFileSync(filePath);
  const mimeType = 'image/jpeg';
  return `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
}
