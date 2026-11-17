# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: question.spec.ts >> Q5 Stale Element
- Location: tests\question.spec.ts:88:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#my-city__digitalClock')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#my-city__digitalClock') with timeout 5000ms
  - waiting for locator('#my-city__digitalClock')

```

```yaml
- link "timeanddate logo":
  - /url: /
  - img "timeanddate logo"
- heading "Just a moment…" [level=1]
- main:
  - heading [level=2]
  - paragraph
  - alert
- paragraph: "Ray ID: a5b4464ffa0d7ed3"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | // Q1 Your application has a Save button. When clicked, sometimes the API takes 2 seconds and sometimes 10 seconds. How will you handle it?
  4   | 
  5   | test('Q1 Tc1 -Wait For Response', async ({ page }) => {
  6   |   await page.goto('https://reqres.in');
  7   |   const responsePromise = page.waitForResponse(
  8   |     response =>
  9   |       response.url().includes('/api/users?page=2') &&
  10  |       response.request().method() === 'GET'
  11  |   );
  12  |   await page.goto('https://reqres.in/api/users?page=2');
  13  |   const response = await responsePromise;
  14  |   expect(response.status()).toBe(200);
  15  |   console.log(response.status());
  16  | });
  17  | 
  18  | //QUESTION 2 How will you handle an element that is sometimes visible and sometimes hidden?
  19  | 
  20  | const Base_url = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
  21  | 
  22  | test('Q2', async ({ page }) => {
  23  |   await page.goto(Base_url)
  24  | 
  25  |   const startbutton = page.getByRole('button', { name: 'START' })
  26  |   const stopbutton = page.getByRole('button', { name: 'STOP' })
  27  | 
  28  |   await expect(startbutton).toBeHidden
  29  | 
  30  |   if (await startbutton.isVisible()) {
  31  |     await startbutton.click()
  32  |   }
  33  |   else { console.log('startbutton is not visible.') }
  34  | 
  35  |   await expect(startbutton).toBeHidden
  36  | 
  37  |   if (await stopbutton.isVisible()) {
  38  |     await stopbutton.click()
  39  |   }
  40  |   else { console.log("there is no stop button") }
  41  | })
  42  | 
  43  | // Q3 What will you do if an element is intercepted by another element?
  44  | 
  45  | const intercepted_url = 'https://the-internet.herokuapp.com/dynamic_loading/1'
  46  | 
  47  | test('Q3 TC1 interception', async ({ page }) => {
  48  |   await page.goto(intercepted_url)
  49  |   await page.getByRole('button', { name: "start" }).click()
  50  |   const hiddenText = await page.locator('#finish').textContent()
  51  |   console.log(hiddenText)
  52  |   expect(page.locator('#finish')).toHaveText("Hello World!")
  53  | })
  54  | 
  55  | test('Q3 TC2 interception', async ({ page }) => {
  56  |   await page.goto(intercepted_url)
  57  |   const finish = await page.locator('#finish')
  58  |   await expect(finish).toBeHidden();
  59  |   console.log(await expect(finish).toHaveText("Hello World!"));
  60  |   await page.getByRole('button', { name: "start" }).click()
  61  |   await expect(finish).toBeHidden()
  62  |   expect(finish).toHaveText("Hello World!")
  63  | })
  64  | 
  65  | 
  66  | // Q4 How do you handle duplicate elements?
  67  | 
  68  | test('Q4 duplicate element', async ({ page }) => {
  69  |   await page.goto(Base_url)
  70  | 
  71  |   const submitButton = page.getByRole('button', { name: 'submit' })
  72  | 
  73  |   const count = await submitButton.count()
  74  | 
  75  |   console.log(`Submit_Button : ${count}`)
  76  |   expect(count).toBeGreaterThan(4)
  77  | 
  78  |   await submitButton.nth(2).click()
  79  | 
  80  |   const p1 = page.getByRole('button', { name: 'Primary Action' });
  81  |   await expect(p1).toBeVisible();
  82  |   await p1.click();
  83  | 
  84  | })
  85  | 
  86  | //Q5. How will you handle stale elements in Playwright?
  87  | 
  88  | test('Q5 Stale Element', async ({ page }) => {
  89  |   await page.goto('https://www.timeanddate.com/worldclock/')
  90  |   const chennaiClock = page.locator('#my-city__digitalClock')
  91  |   await page.waitForLoadState('domcontentloaded')
> 92  |   await expect(chennaiClock).toBeVisible()
      |                              ^ Error: expect(locator).toBeVisible() failed
  93  |   const time = await chennaiClock.innerText()
  94  |   console.log('Time : 1 = ', time)
  95  |   await page.waitForTimeout(2000)
  96  |   console.log('Time : 2 = ', time)
  97  | })
  98  | 
  99  | // Q6 How will you handle a dropdown containing 10,000 records?
  100 | 
  101 | const scrolling_dd_url = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#'
  102 | const native_dd_url = 'https://rahulshettyacademy.com/AutomationPractice/'
  103 | 
  104 | test('Q6, TC1 scrollingdropdown', async ({ page }) => {
  105 |   await page.goto(scrolling_dd_url)
  106 |   const scroll = page.getByPlaceholder('Select an item')
  107 |   await scroll.fill('item 199')
  108 |   await scroll.press('Enter')
  109 |   await expect(scroll).toHaveValue('item 199');
  110 | })
  111 | 
  112 | test('Q6, TC2 nativedropdown', async ({ page }) => {
  113 |   await page.goto(native_dd_url)
  114 |   const native = page.locator('#dropdown-class-example')
  115 |   await native.selectOption('option2')
  116 |   await expect(native).toHaveValue('option2');
  117 | })
  118 | 
  119 | //Q7 How will you validate a file download?
  120 | 
  121 | 
  122 | test('Q7 Validate Download file', async ({ page }) => {
  123 |   await page.goto(Base_url);
  124 |   await page.getByRole('link', { name: 'Download Files' }).click();
  125 |   await page.waitForLoadState('domcontentloaded');
  126 |   await page.locator('#inputText').fill('My name is Giri');
  127 |   await page.getByRole('button', {name : 'txtDownloadLink'}).click()
  128 |   const download = await page.getByRole('link',{ name : 'Download Text File'})
  129 |   expect (download).toBeEnabled()
  130 |   await download.click()
  131 | 
  132 | 
  133 | });
  134 | 
  135 | // Q8 How do you handle multiple tabs or windows?
  136 | 
  137 | test('Q8, multiple tabs, windows', async ({ page }) => {
  138 |   await page.goto(Base_url)
  139 |   const newPagePromise = page.context().waitForEvent('page');
  140 |   await page.getByText('New Tab').click();
  141 |   const newPage = await newPagePromise;
  142 |   await newPage.waitForLoadState();
  143 |   console.log(await newPage.title());
  144 | })
```