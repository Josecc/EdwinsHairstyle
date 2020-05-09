import { newSpecPage } from '@stencil/core/testing';
import { EhsSection } from './ehs-section';

describe('ehs-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EhsSection],
      html: `<ehs-section></ehs-section>`,
    });
    expect(page.root).toEqualHtml(`
      <ehs-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ehs-section>
    `);
  });
});
