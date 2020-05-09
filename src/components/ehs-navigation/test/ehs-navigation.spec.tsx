import { newSpecPage } from '@stencil/core/testing';
import { EhsNavigation } from './ehs-navigation';

describe('ehs-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EhsNavigation],
      html: `<ehs-navigation></ehs-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <ehs-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ehs-navigation>
    `);
  });
});
