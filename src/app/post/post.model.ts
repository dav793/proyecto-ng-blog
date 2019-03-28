
export class Post {
  id: string;
  title: string;
  author: string;
  date: number;
  body: string;
  tags: string[];
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
};

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
};

export class PostFactory {

  static CreateDefault(): Post {
    return new Post({
      body: `
      <h4> You can write and edit whatever you want here!!!!! </h4>
    `
    });
  }

}
