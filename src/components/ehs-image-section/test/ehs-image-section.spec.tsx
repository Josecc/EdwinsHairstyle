import { newSpecPage } from '@stencil/core/testing';
import { EhsImageSection } from './ehs-image-section';

describe('ehs-image-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EhsImageSection],
      html: `<ehs-image-section></ehs-image-section>`,
    });
    expect(page.root).toEqualHtml(`
      <ehs-image-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ehs-image-section>
    `);
  });
});
