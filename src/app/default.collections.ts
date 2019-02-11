import { Post, Comment } from './post/post.model';

export let defaultCollections = {

  posts: [
    {
      id: '353690247',
      title: 'A blog post',
      author: '152390144',
      date: 1542320151194,
      body: 'Lorem ipsum',
      tags: [
        'perros',
        'casa',
        'contenedor',
        'automovil'
      ],
      rating: 5,
      numRaters: 4,
      pathImg: '',
      numVisits: 1,
      comments: []
    },
    {
      id: '353690248',
      title: 'Another blog post',
      author: '152390145',
      date: 1542320111294,
      body: 'Lorem ipsum',
      tags: [
        'gatos',
        'motos',
        'electron'
      ],
      rating: 5,
      numRaters: 1,
      pathImg: '',
      numVisits: 3,
      comments: []
    },
    {
      id: '264982357',
      title: 'Post Malone Bio',
      author: '152390145',
      date: 1542320111294,
      body: 'Lorem ipsum',
      tags: [
        'gatos',
        'mocos',
        'electron'
      ],
      rating: 4,
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
      pathImg: 'https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2018/09/25/5baa6d8f3a080.jpeg',
      interests: ['java', 'angular', 'c++', 'python']
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
