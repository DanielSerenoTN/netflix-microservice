export default function generateSlug(input: string): string {
  return input.replace(/\s+/g, '-').toLowerCase();
}
