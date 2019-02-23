import { Post, Comment } from './post/post.model';

export let defaultCollections = {

  posts: [
    {
      id: '353690247',
      title: 'A blog post',
      author: '152390144',
      date: 1542320151194,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacinia turpis. Morbi viverra non lectus vehicula aliquam. Aliquam mollis, felis nec ultrices tempus, sapien felis imperdiet nunc, non ornare lectus est ac felis. Aliquam erat volutpat. Sed ullamcorper eros non felis maximus vestibulum. Aenean gravida aliquam ante, ac blandit ante vehicula sit amet. Mauris sit amet metus quis massa tincidunt malesuada et et libero. Maecenas eget enim nulla.',
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
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacinia turpis. Morbi viverra non lectus vehicula aliquam. Aliquam mollis, felis nec ultrices tempus, sapien felis imperdiet nunc, non ornare lectus est ac felis. Aliquam erat volutpat. Sed ullamcorper eros non felis maximus vestibulum. Aenean gravida aliquam ante, ac blandit ante vehicula sit amet. Mauris sit amet metus quis massa tincidunt malesuada et et libero. Maecenas eget enim nulla.',
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
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacinia turpis. Morbi viverra non lectus vehicula aliquam. Aliquam mollis, felis nec ultrices tempus, sapien felis imperdiet nunc, non ornare lectus est ac felis. Aliquam erat volutpat. Sed ullamcorper eros non felis maximus vestibulum. Aenean gravida aliquam ante, ac blandit ante vehicula sit amet. Mauris sit amet metus quis massa tincidunt malesuada et et libero. Maecenas eget enim nulla.',
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
      username: '',
      fullName: 'Pedro Navarrete',
      birthDate: 408434400000,
      email: 'pedro@navarrete.com',
      pathImg: '',
      interests: []
    },
    {
      id: '152390145',
      username: '',
      fullName: 'Humberto Barrientos',
      birthDate: 408434400000,
      email: 'humberto@barrientos.com',
      pathImg: '',
      interests: []
    }
  ]

};
