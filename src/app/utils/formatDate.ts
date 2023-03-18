export function formatDate(date: string) {
  if (!date) return null;

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(Date.parse(date));
}
