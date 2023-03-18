export function addWebpExtension(url: string) {
  return `${url}/cover.webp`;
}

export function addOrderWebpExtension(url: string, order: number) {
  return `${url}/lesson-${order}.webp.`;
}
