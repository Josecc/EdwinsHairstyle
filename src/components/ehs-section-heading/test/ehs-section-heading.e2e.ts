import { newE2EPage } from '@stencil/core/testing';

describe('ehs-section-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ehs-section-heading></ehs-section-heading>');

    const element = await page.find('ehs-section-heading');
    expect(element).toHaveClass('hydrated');
  });
});
