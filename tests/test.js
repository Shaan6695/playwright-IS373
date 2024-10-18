//Playwright Tests for Agile Docs


test('Verify homepage link, title, and article heading', async ({ page }) => {
  // Go to the homepage
  await page.goto('https://dfianuale.github.io/hexo-IS373/');

  // Check the homepage URL
  await expect(page).toHaveURL('https://dfianuale.github.io/hexo-IS373/');

  // Verify the page title
  await expect(page).toHaveTitle(/Hexo/); // Assuming that "Hexo" is part of title
