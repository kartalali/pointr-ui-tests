import { test, expect } from '@playwright/test';

test('Verify all blog articles are loaded and visible', async ({ page }) => {
  await test.step('Go to blog page', async () => {
    await page.goto('https://www.pointr.tech/blog', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('div.single_article.d-flex', { timeout: 30000 });
    await page.screenshot({ path: 'output/blog-page.png', fullPage: true });
  });

  await test.step('Locate all article containers', async () => {
    const articleCards = page.locator('div.single_article.d-flex');
    const count = await articleCards.count();
    expect(count).toBeGreaterThan(0);
    console.log(`Toplam ${count} makale bulundu.`);
  });

  await test.step('Verify each article is visible with its title', async () => {
    const articleCards = page.locator('div.single_article.d-flex');
    const count = await articleCards.count();

    for (let i = 0; i < count; i++) {
      const card = articleCards.nth(i);
      const title = await card.locator('div.single-article--title').innerText();
      const visible = await card.isVisible();

      expect(visible).toBeTruthy();
      console.log(`${i + 1}. Article doğrulandı: "${title}" görünür durumda.`);

      await test.step(`✅ ${i + 1}. Article: "${title}" görünür`, async () => {
        await card.screenshot({ path: `output/article-${i + 1}.png` });
      });
    }
  });
});