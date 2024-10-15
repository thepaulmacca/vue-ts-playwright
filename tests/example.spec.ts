import { test, expect } from '@playwright/test';

const baseURL = 'http://localhost:5173/vue-ts-playwright/';

test('has title', async ({ page }) => {
  await page.goto(baseURL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Vite + Vue + TS");
});

test('has correct heading', async ({ page }) => {
  await page.goto(baseURL);

  // Expect the heading to contain specific text.
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Vite + Vue');
});

test('has a visible button', async ({ page }) => {
  await page.goto(baseURL);

  // Expect a button to be visible.
  const button = page.locator('button');
  await expect(button).toBeVisible();
});
