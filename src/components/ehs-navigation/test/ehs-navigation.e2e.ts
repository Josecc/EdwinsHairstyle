import { newE2EPage } from '@stencil/core/testing';

describe('ehs-navigation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ehs-navigation></ehs-navigation>');

    const element = await page.find('ehs-navigation');
    expect(element).toHaveClass('hydrated');
  });
});
