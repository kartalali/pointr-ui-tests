export function getTopWords(texts: string[], count: number): [string, number][] {
  const wordMap: Record<string, number> = {};

  texts.join(' ')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(/\s+/)
    .forEach(word => {
      if (word.length > 3) {
        wordMap[word] = (wordMap[word] || 0) + 1;
      }
    });

  return Object.entries(wordMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);
}