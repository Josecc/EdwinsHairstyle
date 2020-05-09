import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'ehs-section-heading',
  styleUrl: 'ehs-section-heading.scss',
  shadow: true,
})
export class EhsSectionHeading {

  @Prop({
    reflect: true
  }) theme = 'light';

  @Watch('theme')
  validateTheme(newValue: string) {
    const validThemes = ['light', 'dark'];
    const isBlank = typeof newValue == null;
    const isString = typeof newValue === 'string';
    const isValid = validThemes.find(theme => theme === newValue);

    if (isBlank) { throw new Error('theme: required') };
    if (!isString) { throw new Error('theme: should be a string') };
    if (!isValid) { throw new Error(`theme: '${newValue}' should be one of \'${validThemes.join('\', \'')}\'.`) }
  }

  componentWillLoad() {
    this.validateTheme(this.theme);
  }

  render() {
    return (
      <Host>
        <div class='wrapper'>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
