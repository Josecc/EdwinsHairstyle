import { newSpecPage } from '@stencil/core/testing';
import { EhsSectionHeading } from './ehs-section-heading';

describe('ehs-section-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EhsSectionHeading],
      html: `<ehs-section-heading></ehs-section-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <ehs-section-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ehs-section-heading>
    `);
  });
});
