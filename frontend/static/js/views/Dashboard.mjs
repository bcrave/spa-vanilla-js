import AbstractView from "./AbstractView.mjs";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>Welcome back, Brendon</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga reprehenderit ipsum hic quidem possimus?        
      </p>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
    `;
  }
}
