import { expect, test } from '@playwright/test';

test('app page shows correct title and counter works', async ({ page }) => {
  await page.goto('/');

  // Check if title exists
  const title = page.getByRole('heading', { level: 1 });
  await expect(title).toHaveText('React + TypeScript + Vite');

  // Test counter functionality
  const button = page.getByRole('button');
  await expect(button).toHaveText('count is 0');

  await button.click();
  await expect(button).toHaveText('count is 1');

  await button.click();
  await expect(button).toHaveText('count is 2');
});
