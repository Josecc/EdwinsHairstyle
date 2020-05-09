import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ehs-navigation',
  styleUrl: 'ehs-navigation.scss',
  assetsDirs: ['../../assets/icon/'],
  shadow: true
})
export class EhsNavigation {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
