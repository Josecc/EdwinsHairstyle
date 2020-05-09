import { newE2EPage } from '@stencil/core/testing';

describe('ehs-image-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ehs-image-section></ehs-image-section>');

    const element = await page.find('ehs-image-section');
    expect(element).toHaveClass('hydrated');
  });
});
