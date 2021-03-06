import AbstractView from "./AbstractView.mjs";

export default class Posts extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <p>You are viewing the posts!</p>
    `;
  }
}
