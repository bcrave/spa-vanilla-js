import AbstractView from "./AbstractView.mjs";

export default class Settings extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>Configure your settings here!</p>
    `;
  }
}
