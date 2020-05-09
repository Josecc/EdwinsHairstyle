import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'ehs-section',
  styleUrl: 'ehs-section.scss',
  shadow: true,
})
export class EhsSection {

  @Prop() heading;
  @Prop({
    reflect: true
  }) color = 'red';

  @Watch('color')
  validateColor(newValue: string) {
    const validColors = ['red', 'white', 'black'];
    const isBlank = typeof newValue == null;
    const isString = typeof newValue === 'string';
    const isValid = validColors.find(color => color === newValue);

    if (isBlank) { throw new Error('color: required') };
    if (!isString) { throw new Error('color: should be a string') };
    if (!isValid) { throw new Error(`color: '${newValue}' should be one of \'${validColors.join('\', \'')}\'.`) }
  }

  componentWillLoad() {
    this.validateColor(this.color);
  }

  render() {
    return (
      <Host>
        {this.renderHeading()}
        <slot></slot>
      </Host>
    );
  }

  renderHeading() {
    if (typeof this.heading !== 'string') {
      return null
    }

    return (
      <ehs-section-heading theme={this.color === 'white' ? 'dark' : 'light'}>
        {this.heading}
      </ehs-section-heading>
    )
  }

}
