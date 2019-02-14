import { Post, Comment } from './post/post.model';

export let defaultCollections = {

  posts: [
    {
      id: '353690247',
      title: 'A blog post',
      author: '152390144',
      date: 1542320151194,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elit tincidunt, cursus elit tincidunt, dignissim odio. Sed eu interdum metus. Integer porttitor ipsum at nibh convallis congue. Sed elementum est et pulvinar lacinia. Nam sit amet velit in tellus ultricies rutrum at non ligula. Suspendisse et ullamcorper velit. Proin vel placerat lacus. Fusce vitae est vitae nisi suscipit fringilla non eget mauris. Aliquam justo felis, blandit in bibendum sed, placerat quis libero. Donec varius quam vel tempus egestas. Cras venenatis gravida dui, vitae eleifend neque venenatis id. Sed vitae feugiat velit.Morbi blandit vehicula urna.Vivamus consequat efficitur metus, et convallis diam.Nunc posuere eros in diam rhoncus, in volutpat nisl semper.Aenean ipsum tortor, hendrerit eu libero dictum, faucibus condimentum neque.Sed eget ullamcorper risus.Nulla aliquam, lacus eget malesuada rutrum, lorem risus consectetur ligula, quis convallis ex risus ac augue.Aenean ac eros commodo, maximus elit id, scelerisque nisl.Fusce blandit purus id enim gravida tempus.Duis facilisis erat vitae ex consequat tempus id vitae ligula.Nulla luctus vitae lectus vel laoreet.Donec posuere rhoncus dolor, id iaculis tortor egestas ornare. Praesent tincidunt blandit velit, non laoreet magna ullamcorper at.Suspendisse dapibus ipsum eget pulvinar suscipit.Proin laoreet sit amet risus faucibus interdum.Nunc imperdiet tortor nec dolor sagittis facilisis.Morbi rutrum finibus purus et ultricies.Nullam iaculis et tellus vel consequat.Fusce ac tortor libero.Suspendisse sodales sapien a libero imperdiet, in pretium urna tincidunt.Aenean nec elementum felis. Duis viverra orci fermentum consequat interdum.Ut sagittis lobortis lectus, eget ultricies ligula facilisis at.Integer elementum quam id nunc accumsan, eu commodo metus eleifend.Morbi venenatis eleifend purus, a iaculis massa vehicula ut.Nulla facilisi.Donec nec dolor enim.Quisque et tempus arcu.Sed at dignissim magna, sed scelerisque risus.Pellentesque non scelerisque nibh, ut bibendum tortor. Sed eget lobortis purus, vitae suscipit felis.Etiam sit amet dapibus quam, at venenatis orci.Proin a sapien non sem viverra lobortis.Aliquam feugiat ipsum eu augue elementum, sit amet suscipit massa vehicula.Pellentesque sed magna quis velit finibus hendrerit porttitor id purus.Nulla egestas urna metus, sit amet feugiat tellus fringilla vel.Suspendisse varius nisl eu mauris consectetur, nec vestibulum metus tristique.Fusce ut orci ullamcorper, ultricies magna mollis, pulvinar diam.Aenean metus tellus, porttitor sed libero finibus, accumsan vehicula odio.Nulla elementum est in dui consectetur, id efficitur ligula vestibulum.',
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
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elit tincidunt, cursus elit tincidunt, dignissim odio. Sed eu interdum metus. Integer porttitor ipsum at nibh convallis congue. Sed elementum est et pulvinar lacinia. Nam sit amet velit in tellus ultricies rutrum at non ligula. Suspendisse et ullamcorper velit. Proin vel placerat lacus. Fusce vitae est vitae nisi suscipit fringilla non eget mauris. Aliquam justo felis, blandit in bibendum sed, placerat quis libero. Donec varius quam vel tempus egestas. Cras venenatis gravida dui, vitae eleifend neque venenatis id. Sed vitae feugiat velit.Morbi blandit vehicula urna.Vivamus consequat efficitur metus, et convallis diam.Nunc posuere eros in diam rhoncus, in volutpat nisl semper.Aenean ipsum tortor, hendrerit eu libero dictum, faucibus condimentum neque.Sed eget ullamcorper risus.Nulla aliquam, lacus eget malesuada rutrum, lorem risus consectetur ligula, quis convallis ex risus ac augue.Aenean ac eros commodo, maximus elit id, scelerisque nisl.Fusce blandit purus id enim gravida tempus.Duis facilisis erat vitae ex consequat tempus id vitae ligula.Nulla luctus vitae lectus vel laoreet.Donec posuere rhoncus dolor, id iaculis tortor egestas ornare. Praesent tincidunt blandit velit, non laoreet magna ullamcorper at.Suspendisse dapibus ipsum eget pulvinar suscipit.Proin laoreet sit amet risus faucibus interdum.Nunc imperdiet tortor nec dolor sagittis facilisis.Morbi rutrum finibus purus et ultricies.Nullam iaculis et tellus vel consequat.Fusce ac tortor libero.Suspendisse sodales sapien a libero imperdiet, in pretium urna tincidunt.Aenean nec elementum felis. Duis viverra orci fermentum consequat interdum.Ut sagittis lobortis lectus, eget ultricies ligula facilisis at.Integer elementum quam id nunc accumsan, eu commodo metus eleifend.Morbi venenatis eleifend purus, a iaculis massa vehicula ut.Nulla facilisi.Donec nec dolor enim.Quisque et tempus arcu.Sed at dignissim magna, sed scelerisque risus.Pellentesque non scelerisque nibh, ut bibendum tortor. Sed eget lobortis purus, vitae suscipit felis.Etiam sit amet dapibus quam, at venenatis orci.Proin a sapien non sem viverra lobortis.Aliquam feugiat ipsum eu augue elementum, sit amet suscipit massa vehicula.Pellentesque sed magna quis velit finibus hendrerit porttitor id purus.Nulla egestas urna metus, sit amet feugiat tellus fringilla vel.Suspendisse varius nisl eu mauris consectetur, nec vestibulum metus tristique.Fusce ut orci ullamcorper, ultricies magna mollis, pulvinar diam.Aenean metus tellus, porttitor sed libero finibus, accumsan vehicula odio.Nulla elementum est in dui consectetur, id efficitur ligula vestibulum.',
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
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elit tincidunt, cursus elit tincidunt, dignissim odio. Sed eu interdum metus. Integer porttitor ipsum at nibh convallis congue. Sed elementum est et pulvinar lacinia. Nam sit amet velit in tellus ultricies rutrum at non ligula. Suspendisse et ullamcorper velit. Proin vel placerat lacus. Fusce vitae est vitae nisi suscipit fringilla non eget mauris. Aliquam justo felis, blandit in bibendum sed, placerat quis libero. Donec varius quam vel tempus egestas. Cras venenatis gravida dui, vitae eleifend neque venenatis id. Sed vitae feugiat velit.Morbi blandit vehicula urna.Vivamus consequat efficitur metus, et convallis diam.Nunc posuere eros in diam rhoncus, in volutpat nisl semper.Aenean ipsum tortor, hendrerit eu libero dictum, faucibus condimentum neque.Sed eget ullamcorper risus.Nulla aliquam, lacus eget malesuada rutrum, lorem risus consectetur ligula, quis convallis ex risus ac augue.Aenean ac eros commodo, maximus elit id, scelerisque nisl.Fusce blandit purus id enim gravida tempus.Duis facilisis erat vitae ex consequat tempus id vitae ligula.Nulla luctus vitae lectus vel laoreet.Donec posuere rhoncus dolor, id iaculis tortor egestas ornare. Praesent tincidunt blandit velit, non laoreet magna ullamcorper at.Suspendisse dapibus ipsum eget pulvinar suscipit.Proin laoreet sit amet risus faucibus interdum.Nunc imperdiet tortor nec dolor sagittis facilisis.Morbi rutrum finibus purus et ultricies.Nullam iaculis et tellus vel consequat.Fusce ac tortor libero.Suspendisse sodales sapien a libero imperdiet, in pretium urna tincidunt.Aenean nec elementum felis. Duis viverra orci fermentum consequat interdum.Ut sagittis lobortis lectus, eget ultricies ligula facilisis at.Integer elementum quam id nunc accumsan, eu commodo metus eleifend.Morbi venenatis eleifend purus, a iaculis massa vehicula ut.Nulla facilisi.Donec nec dolor enim.Quisque et tempus arcu.Sed at dignissim magna, sed scelerisque risus.Pellentesque non scelerisque nibh, ut bibendum tortor. Sed eget lobortis purus, vitae suscipit felis.Etiam sit amet dapibus quam, at venenatis orci.Proin a sapien non sem viverra lobortis.Aliquam feugiat ipsum eu augue elementum, sit amet suscipit massa vehicula.Pellentesque sed magna quis velit finibus hendrerit porttitor id purus.Nulla egestas urna metus, sit amet feugiat tellus fringilla vel.Suspendisse varius nisl eu mauris consectetur, nec vestibulum metus tristique.Fusce ut orci ullamcorper, ultricies magna mollis, pulvinar diam.Aenean metus tellus, porttitor sed libero finibus, accumsan vehicula odio.Nulla elementum est in dui consectetur, id efficitur ligula vestibulum.',
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
