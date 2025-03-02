import { Page, Locator } from '@playwright/test';

export class RainbowUnicornPage {
  private readonly page: Page;
  readonly rainbow: Locator;
  readonly unicorn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rainbow = page.getByTestId('Rainbow2');
    this.unicorn = page.getByTestId('Unicorn2');
  }
  async goto() {
    await this.page.goto('http://localhost:4200/');
  }
}