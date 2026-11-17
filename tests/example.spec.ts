// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

import { test, expect } from '@playwright/test';

test('Open link with promise', async ({ page }) => {
  const p = new Promise<string>((resolve, reject) => {
    const link = 'https://www.youtube.com/c/BLACKGRACZ';
    if (link) resolve(link);
    else reject('failure');
  });

  await p
    .then(async result => {
      await page.goto(result);
      console.log('opened', page.url());
    })
    .catch(err => console.error(err));

  const youTube = await page.locator('.ytp-chrome-top-buttons')

  if (await youTube.isVisible()) {
    await youTube.click()
  }
  else (await page.goBack());

  await page.goto('https://www.youtube.com')
  await page.getByPlaceholder('Search').fill('kalyani video song')
  await page.keyboard.press('Enter')
  await page.waitForResponse
});

test('loginCheck', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  await page.locator('#username').fill('rahulshettyacademy')
  await page.locator('#password').fill('Learning@830$3mK2')
  await page.locator('#terms').check()
  const signin = page.locator('#signInBtn')
  if (await signin.isVisible()) {
    await signin.click()
  }
  else (console.log("sign in is error"))
  const homePage = await ('https://rahulshettyacademy.com/angularpractice/shop')
  await expect(page).toHaveURL(homePage);
})

