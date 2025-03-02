import { test, expect } from '../fixtures/fixturesList';

  test('test', async ({ unicornland }) => {
    
    unicornland.goto();
    await expect(unicornland.unicorn).toContainText('We are a group of unicorns.');
    await expect(unicornland.rainbow).toContainText('We are here to help you. Automated testing is awesome');
    await unicornland.rainbow.click();
    
  });
