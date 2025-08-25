import { test, expect } from '@playwright/test';
import { getTopWords } from '../utils/wordCounter';
import fs from 'fs';

test('Extract top 5 repeated words from latest 3 blog articles via Read More click', async ({ page }) => {
  await page.goto('https://www.pointr.tech/blog', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('div.single_article.d-flex.flex-column');

  const articleCards = page.locator('div.single_article.d-flex.flex-column');
  const count = await articleCards.count();
  expect(count).toBeGreaterThanOrEqual(3);

  const contents: string[] = [];

  for (let i = 0; i < 3; i++) {
    await test.step(`Click Read More on article ${i + 1}`, async () => {
      const card = articleCards.nth(i);
      const readMoreLink = card.locator('a:has-text("Read More")');

      await Promise.all([
        page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 }),
        readMoreLink.click()
      ]);

      await page.waitForSelector('article, main', { timeout: 60000 });
      const content = await page.locator('article, main').innerText();
      contents.push(content);

      // Geri dön blog sayfasına
      await page.goBack({ waitUntil: 'domcontentloaded' });
    });
  }

  const topWords = getTopWords(contents, 5);
  const output = topWords.map(([word, count]) => `${word}: ${count}`).join('\n');

  fs.writeFileSync('output/top-words.txt', output);
  console.log('✅ Kelime analizi tamamlandı. "output/top-words.txt" dosyasına yazıldı.');
});