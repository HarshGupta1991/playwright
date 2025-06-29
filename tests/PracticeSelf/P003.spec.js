import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('link', { name: 'Cleaning Tools' }).click();
  await page.locator('.a-link-normal').first().click();
  await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
  await page.getByRole('link', { name: 'United States' }).click();
});