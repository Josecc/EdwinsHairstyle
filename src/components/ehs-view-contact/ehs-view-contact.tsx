import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ehs-view-contact',
  styleUrl: 'ehs-view-contact.css',
  shadow: true,
})
export class EhsViewContact {

  render() {
    return (
      <Host>
        <div>
          <p>
          If you are looking for a hairstyle makeover, want to add color to your hair, are looking for a new haircut, or just want to be pampered by our service while you enjoy getting your hair done, come visit us.
          </p>
        </div>
        <div>
        (703) 494 - 8908
14828 Build America Dr.
Woodbridge, VA. 22191
Contact Us
        </div>
      </Host>
    );
  }

}
