import { headers } from 'next/headers';

export async function getLangServer() {
  const head = await headers();
  const path = head.get('x-invoke-path'); 
  if (!path) return null;

  const segments = path.split('/').filter(Boolean);
  return segments[0] || null;
}
