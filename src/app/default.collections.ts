import {Post, Comment} from './post/post.model';

export let defaultCollections = {

  posts: [
    {
      id: '353690247',
      title: 'A blog post',
      author: '152390144',
      date: 1542320101194,
      body: 'Lorem ipsum',
      tags: [],
      rating: 5,
      numRaters: 1,
      pathImg: '',
      numVisits: 1,
      comments: []
    },
    {
      id: '353690248',
      title: 'Another blog post',
      author: '152390144',
      date: 1542320111294,
      body: 'Lorem ipsum',
      tags: [],
      rating: 5,
      numRaters: 1,
      pathImg: '',
      numVisits: 1,
      comments: []
    }
  ],

  users: [
    {
      id: '152390144',
      username: 'PeNa',
      fullName: 'Pedro Navarrete',
      birthDate: 408434400000,
      email: 'pedro@navarrete.com',
      pathImg: '',
      interests: []
    },
    {
      id: '152390145',
      username: 'HuBa',
      fullName: 'Humberto Barrientos',
      birthDate: 408434400000,
      email: 'humberto@barrientos.com',
      pathImg: '',
      interests: []
    }
  ]

};
