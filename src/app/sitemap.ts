import fs from 'fs';
import { MetadataRoute } from 'next';
import path from 'path';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http:localhost:3000';
const baseDir = 'src/app';
const excludeDirs = ['api'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const fullPath = path.join(process.cwd(), baseDir);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  const routes: string[] = ['/'];

  entries.forEach((entry) => {
    if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
      routes.push(`/${entry.name}`);
    }
  });

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0
  }));
}
