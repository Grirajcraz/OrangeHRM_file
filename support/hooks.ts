import { Before, After, Status, setDefaultTimeout, ITestCaseHookParameter } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import { CustomWorld } from './world';
import { config } from './config';

expect.configure({ timeout: 20000 });
setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: config.headless });
  this.context = await this.browser.newContext({ viewport: { width: 1366, height: 768 } });
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  if (scenario.result?.status === Status.FAILED) {
    const img = await this.page.screenshot();
    await this.attach(img, 'image/png');
  }
  await this.context.close();
  await this.browser.close();
});