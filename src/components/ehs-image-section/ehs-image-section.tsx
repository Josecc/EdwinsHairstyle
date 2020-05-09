import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'ehs-image-section',
  styleUrl: 'ehs-image-section.scss',
  shadow: true,
  assetsDirs: ['../../assets/images/']
})
export class EhsImageSection {

  @Prop() image = "background.jpg";

  render() {
   return <img src={getAssetPath(`../../assets/images/${this.image}`)} />
  }
}
