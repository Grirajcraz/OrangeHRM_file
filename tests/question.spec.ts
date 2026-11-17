import { test, expect } from '@playwright/test';

// Q1 Your application has a Save button. When clicked, sometimes the API takes 2 seconds and sometimes 10 seconds. How will you handle it?

test('Q1 Tc1 -Wait For Response', async ({ page }) => {
  await page.goto('https://reqres.in');
  const responsePromise = page.waitForResponse(
    response =>
      response.url().includes('/api/users?page=2') &&
      response.request().method() === 'GET'
  );
  await page.goto('https://reqres.in/api/users?page=2');
  const response = await responsePromise;
  expect(response.status()).toBe(200);
  console.log(response.status());
});

//QUESTION 2 How will you handle an element that is sometimes visible and sometimes hidden?

const Base_url = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'

test('Q2', async ({ page }) => {
  await page.goto(Base_url)

  const startbutton = page.getByRole('button', { name: 'START' })
  const stopbutton = page.getByRole('button', { name: 'STOP' })

  await expect(startbutton).toBeHidden

  if (await startbutton.isVisible()) {
    await startbutton.click()
  }
  else { console.log('startbutton is not visible.') }

  await expect(startbutton).toBeHidden

  if (await stopbutton.isVisible()) {
    await stopbutton.click()
  }
  else { console.log("there is no stop button") }
})

// Q3 What will you do if an element is intercepted by another element?

const intercepted_url = 'https://the-internet.herokuapp.com/dynamic_loading/1'

test('Q3 TC1 interception', async ({ page }) => {
  await page.goto(intercepted_url)
  await page.getByRole('button', { name: "start" }).click()
  const hiddenText = await page.locator('#finish').textContent()
  console.log(hiddenText)
  expect(page.locator('#finish')).toHaveText("Hello World!")
})

test('Q3 TC2 interception', async ({ page }) => {
  await page.goto(intercepted_url)
  const finish = await page.locator('#finish')
  await expect(finish).toBeHidden();
  console.log(await expect(finish).toHaveText("Hello World!"));
  await page.getByRole('button', { name: "start" }).click()
  await expect(finish).toBeHidden()
  expect(finish).toHaveText("Hello World!")
})


// Q4 How do you handle duplicate elements?

test('Q4 duplicate element', async ({ page }) => {
  await page.goto(Base_url)

  const submitButton = page.getByRole('button', { name: 'submit' })

  const count = await submitButton.count()

  console.log(`Submit_Button : ${count}`)
  expect(count).toBeGreaterThan(4)

  await submitButton.nth(2).click()

  const p1 = page.getByRole('button', { name: 'Primary Action' });
  await expect(p1).toBeVisible();
  await p1.click();

})

//Q5. How will you handle stale elements in Playwright?

test('Q5 Stale Element', async ({ page }) => {
  await page.goto('https://www.timeanddate.com/worldclock/')
  const chennaiClock = page.locator('#my-city__digitalClock')
  await page.waitForLoadState('domcontentloaded')
  await expect(chennaiClock).toBeVisible()
  const time = await chennaiClock.innerText()
  console.log('Time : 1 = ', time)
  await page.waitForTimeout(2000)
  console.log('Time : 2 = ', time)
})

// Q6 How will you handle a dropdown containing 10,000 records?

const scrolling_dd_url = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#'
const native_dd_url = 'https://rahulshettyacademy.com/AutomationPractice/'

test('Q6, TC1 scrollingdropdown', async ({ page }) => {
  await page.goto(scrolling_dd_url)
  const scroll = page.getByPlaceholder('Select an item')
  await scroll.fill('item 199')
  await scroll.press('Enter')
  await expect(scroll).toHaveValue('item 199');
})

test('Q6, TC2 nativedropdown', async ({ page }) => {
  await page.goto(native_dd_url)
  const native = page.locator('#dropdown-class-example')
  await native.selectOption('option2')
  await expect(native).toHaveValue('option2');
})

//Q7 How will you validate a file download?


test('Q7 Validate Download file', async ({ page }) => {
  await page.goto(Base_url);
  await page.getByRole('link', { name: 'Download Files' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.locator('#inputText').fill('My name is Giri');
  await page.getByRole('button', {name : 'txtDownloadLink'}).click()
  const download = await page.getByRole('link',{ name : 'Download Text File'})
  expect (download).toBeEnabled()
  await download.click()


});

// Q8 How do you handle multiple tabs or windows?

test('Q8, multiple tabs, windows', async ({ page }) => {
  await page.goto(Base_url)
  const newPagePromise = page.context().waitForEvent('page');
  await page.getByText('New Tab').click();
  const newPage = await newPagePromise;
  await newPage.waitForLoadState();
  console.log(await newPage.title());
})