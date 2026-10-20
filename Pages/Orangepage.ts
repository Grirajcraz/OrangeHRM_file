import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private username = this.page.locator('input[name="username"]');
  private password = this.page.locator('input[name="password"]');
  private loginButton = this.page.locator('button[type="submit"]');
  private errorMessage = this.page.locator('.oxd-alert-content-text');
  private fieldErrors = this.page.locator('.oxd-input-field-error-message');
  private dashboardHeader = this.page.locator('.oxd-topbar-header-breadcrumb h6');
  private userDropdown = this.page.locator('.oxd-userdropdown-tab');
  private logoutOption = this.page.getByRole('menuitem', { name: 'Logout' });

  async goto(url: string) {
    await this.page.goto(url);
    await expect(this.username).toBeVisible();
  }

  async enterCredentials(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async expectDashboard() {
  await expect(this.page).toHaveURL(/dashboard\/index/, { timeout: 30000 });
  await expect(this.dashboardHeader).toHaveText('Dashboard', { timeout: 30000 });
}

  async expectWelcome() {
    await expect(this.userDropdown).toBeVisible();
  }

  async expectError(msg: string) {
    await expect(this.errorMessage).toContainText(msg);
  }

  async expectRequiredErrors() {
    await expect(this.fieldErrors).toHaveCount(2);
    await expect(this.fieldErrors.first()).toHaveText('Required');
    await expect(this.fieldErrors.nth(1)).toHaveText('Required');
  }

  async logout() {
    await this.userDropdown.click();
    await this.logoutOption.click();
  }

  async expectLoginPage() {
    await expect(this.page).toHaveURL(/auth\/login/);
    await expect(this.username).toBeVisible();
  }
}