import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../Pages/Orangepage';
import { config } from '../support/config';

const loginUrl = `${config.baseUrl}/web/index.php/auth/login`;

Given('I open the OrangeHRM login page', async function (this: CustomWorld) {
  await new LoginPage(this.page).goto(loginUrl);
});

Given('I am logged in with valid credentials', async function (this: CustomWorld) {
  const login = new LoginPage(this.page);
  await login.goto(loginUrl);
  await login.enterCredentials(config.username, config.password);
  await login.clickLogin();
  await login.expectDashboard();
});

When('I enter username {string} and password {string}',
  async function (this: CustomWorld, user: string, pass: string) {
    await new LoginPage(this.page).enterCredentials(user, pass);
  });

When('I leave username and password fields empty', async function (this: CustomWorld) {
  await new LoginPage(this.page).enterCredentials('', '');
});

When('I click on the Login button', async function (this: CustomWorld) {
  await new LoginPage(this.page).clickLogin();
});

When('I click on the Logout option', async function (this: CustomWorld) {
  await new LoginPage(this.page).logout();
});

Then('I should be redirected to the dashboard', async function (this: CustomWorld) {
  await new LoginPage(this.page).expectDashboard();
});

Then('I should see the welcome message', async function (this: CustomWorld) {
  await new LoginPage(this.page).expectWelcome();
});

Then('I should see an error message {string}', async function (this: CustomWorld, msg: string) {
  await new LoginPage(this.page).expectError(msg);
});

Then('I should see validation messages for required fields', async function (this: CustomWorld) {
  await new LoginPage(this.page).expectRequiredErrors();
});

Then('I should be redirected back to the login page', async function (this: CustomWorld) {
  await new LoginPage(this.page).expectLoginPage();
});