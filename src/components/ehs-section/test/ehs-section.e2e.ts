import { newE2EPage } from '@stencil/core/testing';

describe('ehs-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ehs-section></ehs-section>');

    const element = await page.find('ehs-section');
    expect(element).toHaveClass('hydrated');
  });
});
