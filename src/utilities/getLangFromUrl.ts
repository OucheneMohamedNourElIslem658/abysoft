export function getLangFromUrl(url: string): string {
  try {
    // Create a URL object (works in Node.js / server components)
    const u = new URL(url);
    // Split the pathname and get the first segment
    const segments = u.pathname.split('/').filter(Boolean);
    // Return the first segment (assumed to be the language)
    return segments[0] || 'en'; // default to 'en' if none
  } catch (err) {
    console.error('Invalid URL', err);
    return 'en';
  }
}