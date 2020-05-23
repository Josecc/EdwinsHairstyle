import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ehs-view-about',
  styleUrl: 'ehs-view-about.scss',
  shadow: true,
})
export class EhsViewAbout {

  render() {
    return (
      <Host>
        <div class="column-1">
          <p>
          Edwin’s Hair Style was established in Woodbridge Va, in June, 2005. Our goal is to always provide excellent service. We strive on fostering a close rapport with our clients to better understand what they are looking for, and provide advice on hair styles that better meet their needs.
          </p>
        </div>
        <div class="column-2">
          <p>Every year, we attend the biggest hair shows in New York and around the country. We keep up-to-date with the latest techniques in the art of hair styling. With more than 28 years of experience, we welcome the opportunity to provide services for you.</p>
        </div>
      </Host>
    );
  }

}
