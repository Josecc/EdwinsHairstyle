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
        <ehs-section heading='Art in motion, your hair in good hands.'>
          <ehs-view-contact></ehs-view-contact>
        </ehs-section>
        <ehs-section color='white' heading='A family business.'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>
        </ehs-section>
        <ehs-section color='black' heading='Style, with a touch.'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>
        </ehs-section>
        </main>
      </div>
    );
  }
}
