// Convert an arbitrary string into a URL-safe slug.
export function slugify(input, separator = '-') {
  const safeSeparator = String(separator || '-');
  const escapedSeparator = escapeRegExp(safeSeparator);

  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, safeSeparator)
    .replace(new RegExp(`${escapedSeparator}+`, 'g'), safeSeparator)
    .replace(new RegExp(`^${escapedSeparator}|${escapedSeparator}$`, 'g'), '');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
