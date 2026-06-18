// Convert an arbitrary string into a URL-safe slug.
export function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-');
}
