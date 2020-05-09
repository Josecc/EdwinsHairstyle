import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ehs-view-pricing',
  styleUrl: 'ehs-view-pricing.css',
  shadow: true,
})
export class EhsViewPricing {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
