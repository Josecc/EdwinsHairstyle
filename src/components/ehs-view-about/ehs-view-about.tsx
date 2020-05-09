import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ehs-view-about',
  styleUrl: 'ehs-view-about.css',
  shadow: true,
})
export class EhsViewAbout {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
