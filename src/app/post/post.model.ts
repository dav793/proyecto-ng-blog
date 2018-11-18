
export class Post {
  id: string;
  title: string;
  author: string;
  date: number;
  body: string;
  tags: string[]
  rating: number;
  numRaters: number;
  pathImg: string;
  numVisits: number;
  comments: Comment[];

  constructor(data: any) {
    this.id = data.id || '';
    this.title = data.title || '';
    this.author = data.author || '';
    this.date = data.date || 0;
    this.body = data.body || '';
    this.tags = data.tags || [];
    this.rating = data.rating || 0;
    this.numRaters = data.numRaters || 0;
    this.pathImg = data.pathImg || '';
    this.numVisits = data.numVisits || 0;
    this.comments = data.comments || [];
  }
}

export class Comment {
  id: string;
  author: string;
  body: string;
  date: number;

  constructor(data: any) {
    this.id = data.id || '';
    this.author = data.author || '';
    this.body = data.body || '';
    this.date = data.date || '';
  }
}

export class PostFactory {

  static CreateDefault(): Post {
    return new Post({
      body: `
      <p>
        <span style="background-color: rgb(255, 255, 255);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
      </p>
      <p><br></p>
      <p>
        <span style="background-color: rgb(255, 255, 255);">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim </span>
        <strong style="background-color: rgb(255, 255, 255);">id est laborum</strong>
        <span style="background-color: rgb(255, 255, 255);">.</span>
      </p>
      <p><br></p>
      <h1>
        <span style="background-color: rgb(255, 255, 255); color: rgb(0, 71, 178);">Lorem ipsum </span>
      </h1>
      <p><br></p>
      <p>
        <span style="background-color: rgb(255, 255, 255);">Lorem ipsum dolor sit </span>
        <em style="background-color: rgb(255, 255, 255);">amet,</em>
        <span style="background-color: rgb(255, 255, 255);"> consectetur adipiscing elit, sed do eiusmod tempor </span>
        <u style="background-color: rgb(255, 255, 255);">incididunt ut labore et dolore magna aliqua. </u>
        <span style="background-color: rgb(255, 255, 255);">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </span>
        <s style="background-color: rgb(255, 255, 255);">mollit anim</s>
        <span style="background-color: rgb(255, 255, 255);"> id est laborum. </span>
      </p>
      <p><br></p>
      <p>
        <span style="background-color: rgb(255, 255, 255);">Lorem ipsum dolor sit amet, </span>
        <strong style="background-color: rgb(255, 255, 255); color: rgb(161, 0, 0);">consectetur adipiscing elit, sed do eiusmod tempor</strong>
        <span style="background-color: rgb(255, 255, 255);"> incididunt ut labore et dolore magna aliqua. </span>
      </p>
      <p><br></p>
      <p>
        <span style="background-color: rgb(255, 255, 255);">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </p>
      <p><br></p>
      <p class="ql-align-center">
        <em style="background-color: rgb(255, 255, 255); color: rgb(136, 136, 136);" class="ql-size-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em>
      </p>
      <p><br></p>
      <h2>
        <span style="background-color: rgb(255, 255, 255); color: rgb(0, 41, 102);">Lorem ipsum dolor sit amet</span>
      </h2>
      <p>
        <span style="background-color: rgb(255, 255, 255);">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </p>
      <p><br></p>
      <pre class="ql-syntax" spellcheck="false">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n</pre>
      <p><br></p>
      
      <ol>
        <li>
          <span style="background-color: rgb(255, 255, 255);" class="ql-font-monospace">Lorem ipsum dolor sit amet</span>
        </li>
        <li>
          <span style="background-color: rgb(255, 255, 255);" class="ql-font-monospace">consectetur adipiscing elit</span>
        </li>
        <li>
          <span style="background-color: rgb(255, 255, 255);" class="ql-font-monospace">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
        </li>
        <li>
          <span style="background-color: rgb(255, 255, 255);" class="ql-font-monospace">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
        </li>
        <li>
          <span style="background-color: rgb(255, 255, 255);" class="ql-font-monospace">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
        </li>
        <li>
          <span style="background-color: rgb(255, 255, 255);" class="ql-font-monospace">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </li>
      </ol>
      <p><br></p>
      <p><br></p>
      <p><br></p>
      <p><br></p>
    `
    });
  }

}

