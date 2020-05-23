import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <ehs-image-section />
        </header>
        <main>
        <ehs-section heading='Art in motion, your hair in good hands'>
          <ehs-view-contact></ehs-view-contact>
        </ehs-section>
        <ehs-section color='white' heading='A family business'>
          <ehs-view-about></ehs-view-about>
        </ehs-section>
        <ehs-section color='black' heading='Style, with a touch'>
          <p>prices go here</p>
        </ehs-section>
        </main>
      </div>
    );
  }
}
