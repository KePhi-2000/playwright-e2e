import { test as base, expect } from '@playwright/test';
import { RainbowUnicornPage } from '../testPOM/RainbowUnicornPage';

type Fixtures = {
  unicornland: RainbowUnicornPage;
};

export const test = base.extend<Fixtures>({
  unicornland: async ({ page }, use) => {
    const rainbowUnicornPage = new RainbowUnicornPage(page);
    await use(rainbowUnicornPage);
  },
});

export { expect };