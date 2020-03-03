const DummyProducts = [
  {
    id: 1,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'lectus',
    price: 19.26,
    retailPrice: 22.64,
    'sku ': '385921943-X',
    stock: 112,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.'
  },
  {
    id: 2,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'ligula',
    price: 15.84,
    retailPrice: 20.51,
    'sku ': '277961943-0',
    stock: 104,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.'
  },
  {
    id: 3,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'molestie',
    price: 24.29,
    retailPrice: 22.85,
    'sku ': '295271818-0',
    stock: 81,
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'
  },
  {
    id: 4,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'consequat',
    price: 15.2,
    retailPrice: 17.34,
    'sku ': '108973360-7',
    stock: 104,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
  },
  {
    id: 5,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'nam ultrices',
    price: 18.02,
    retailPrice: 20.17,
    'sku ': '074122747-9',
    stock: 97,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.'
  },
  {
    id: 6,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'turpis nec euismod',
    price: 19.98,
    retailPrice: 22.55,
    'sku ': '210056081-6',
    stock: 113,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.'
  },
  {
    id: 7,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'ut massa',
    price: 20.58,
    retailPrice: 19.7,
    'sku ': '912416242-6',
    stock: 89,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
  },
  {
    id: 8,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'vestibulum vestibulum',
    price: 19.35,
    retailPrice: 18.96,
    'sku ': '806617452-7',
    stock: 101,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.'
  },
  {
    id: 9,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'nibh fusce lacus',
    price: 20.58,
    retailPrice: 22.52,
    'sku ': '960620320-4',
    stock: 98,
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.'
  },
  {
    id: 10,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'vestibulum quam',
    price: 22.58,
    retailPrice: 22.36,
    'sku ': '313992555-7',
    stock: 129,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.'
  },
  {
    id: 11,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'at ipsum ac',
    price: 22.92,
    retailPrice: 18.6,
    'sku ': '025181545-5',
    stock: 106,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
  },
  {
    id: 12,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'erat fermentum justo',
    price: 23.44,
    retailPrice: 21.6,
    'sku ': '619600883-8',
    stock: 81,
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.'
  },
  {
    id: 13,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'mauris vulputate',
    price: 18.67,
    retailPrice: 21.93,
    'sku ': '693325782-7',
    stock: 80,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.'
  },
  {
    id: 14,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'viverra',
    price: 17.75,
    retailPrice: 19.68,
    'sku ': '699890609-9',
    stock: 87,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.'
  },
  {
    id: 15,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'venenatis lacinia aenean',
    price: 21.24,
    retailPrice: 23.2,
    'sku ': '323549557-6',
    stock: 91,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.'
  },
  {
    id: 16,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'elementum nullam',
    price: 21.63,
    retailPrice: 20.36,
    'sku ': '113569728-0',
    stock: 104,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.'
  },
  {
    id: 17,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'tellus nisi eu',
    price: 22.66,
    retailPrice: 21.29,
    'sku ': '451523060-3',
    stock: 100,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.'
  },
  {
    id: 18,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'eu orci mauris',
    price: 20.11,
    retailPrice: 21.11,
    'sku ': '028635078-5',
    stock: 119,
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.'
  },
  {
    id: 19,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'augue vel',
    price: 18.87,
    retailPrice: 21.64,
    'sku ': '614979272-2',
    stock: 103,
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'
  },
  {
    id: 20,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'primis in',
    price: 19.94,
    retailPrice: 23.56,
    'sku ': '754254112-9',
    stock: 126,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.'
  },
  {
    id: 21,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'ac diam',
    price: 22.64,
    retailPrice: 19.3,
    'sku ': '809777638-3',
    stock: 134,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.'
  },
  {
    id: 22,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'eros elementum pellentesque',
    price: 22.33,
    retailPrice: 20.58,
    'sku ': '081749877-X',
    stock: 84,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
  },
  {
    id: 23,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'semper rutrum nulla',
    price: 23.35,
    retailPrice: 19.25,
    'sku ': '201205862-0',
    stock: 114,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
  },
  {
    id: 24,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'sit amet',
    price: 19.28,
    retailPrice: 21.96,
    'sku ': '311932572-4',
    stock: 105,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.'
  },
  {
    id: 25,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'dui vel',
    price: 18.2,
    retailPrice: 20.14,
    'sku ': '900212404-X',
    stock: 76,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.'
  },
  {
    id: 26,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'orci nullam',
    price: 24.83,
    retailPrice: 21.5,
    'sku ': '890235881-X',
    stock: 107,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.'
  },
  {
    id: 27,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'potenti in',
    price: 21.06,
    retailPrice: 18.7,
    'sku ': '622777399-9',
    stock: 105,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.'
  },
  {
    id: 28,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'tellus',
    price: 20.86,
    retailPrice: 19.83,
    'sku ': '568396721-X',
    stock: 125,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.'
  },
  {
    id: 29,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'mauris',
    price: 23.16,
    retailPrice: 19.73,
    'sku ': '010888572-0',
    stock: 113,
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.'
  },
  {
    id: 30,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'sit amet',
    price: 19.85,
    retailPrice: 20.96,
    'sku ': '785595076-1',
    stock: 107,
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.'
  },
  {
    id: 31,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'pellentesque',
    price: 20.97,
    retailPrice: 21.25,
    'sku ': '686114206-9',
    stock: 106,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.'
  },
  {
    id: 32,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'luctus et',
    price: 18.37,
    retailPrice: 19.83,
    'sku ': '133010938-4',
    stock: 94,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.'
  },
  {
    id: 33,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'quis tortor id',
    price: 20.54,
    retailPrice: 21.22,
    'sku ': '608658862-7',
    stock: 104,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.'
  },
  {
    id: 34,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'massa',
    price: 16.44,
    retailPrice: 20.68,
    'sku ': '271445298-1',
    stock: 99,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.'
  },
  {
    id: 35,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'varius integer ac',
    price: 18.9,
    retailPrice: 21.5,
    'sku ': '965270652-3',
    stock: 80,
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
  },
  {
    id: 36,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'pellentesque',
    price: 18.85,
    retailPrice: 21.18,
    'sku ': '512864912-1',
    stock: 113,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.'
  },
  {
    id: 37,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'amet',
    price: 16.98,
    retailPrice: 22.35,
    'sku ': '764856104-2',
    stock: 111,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
  },
  {
    id: 38,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'sed augue',
    price: 19.31,
    retailPrice: 21.98,
    'sku ': '802498848-8',
    stock: 82,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.'
  },
  {
    id: 39,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'ornare consequat',
    price: 21.87,
    retailPrice: 20.91,
    'sku ': '942490553-X',
    stock: 94,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.'
  },
  {
    id: 40,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'penatibus',
    price: 20.67,
    retailPrice: 20.91,
    'sku ': '140140330-1',
    stock: 103,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.'
  },
  {
    id: 41,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'ante ipsum',
    price: 18.83,
    retailPrice: 19.37,
    'sku ': '862210239-4',
    stock: 112,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.'
  },
  {
    id: 42,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'ut',
    price: 14.6,
    retailPrice: 19.62,
    'sku ': '677090658-9',
    stock: 116,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.'
  },
  {
    id: 43,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'a odio in',
    price: 19.95,
    retailPrice: 20.41,
    'sku ': '612441241-1',
    stock: 117,
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.'
  },
  {
    id: 44,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'ligula nec',
    price: 16.65,
    retailPrice: 22.53,
    'sku ': '066364108-X',
    stock: 82,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.'
  },
  {
    id: 45,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'ut volutpat sapien',
    price: 21.89,
    retailPrice: 20.21,
    'sku ': '240590985-5',
    stock: 102,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.'
  },
  {
    id: 46,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'odio',
    price: 19.31,
    retailPrice: 20.64,
    'sku ': '048101202-8',
    stock: 85,
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.'
  },
  {
    id: 47,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'quisque porta volutpat',
    price: 17.99,
    retailPrice: 23.29,
    'sku ': '830579274-9',
    stock: 102,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.'
  },
  {
    id: 48,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'commodo placerat',
    price: 19.26,
    retailPrice: 21.16,
    'sku ': '014239457-2',
    stock: 85,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.'
  },
  {
    id: 49,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'non mauris',
    price: 19.73,
    retailPrice: 20.09,
    'sku ': '858668653-0',
    stock: 108,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
  },
  {
    id: 50,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'id mauris vulputate',
    price: 21.83,
    retailPrice: 21.41,
    'sku ': '152656084-4',
    stock: 108,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.'
  },
  {
    id: 51,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'mi',
    price: 22.85,
    retailPrice: 22.65,
    'sku ': '919855823-4',
    stock: 101,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.'
  },
  {
    id: 52,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'sit',
    price: 18.8,
    retailPrice: 22.25,
    'sku ': '663861114-3',
    stock: 107,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 53,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'ultrices',
    price: 21.4,
    retailPrice: 23.25,
    'sku ': '744744807-9',
    stock: 81,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.'
  },
  {
    id: 54,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'enim',
    price: 21.64,
    retailPrice: 19.84,
    'sku ': '746851070-9',
    stock: 130,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.'
  },
  {
    id: 55,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'at dolor quis',
    price: 20.2,
    retailPrice: 20.71,
    'sku ': '885938985-2',
    stock: 90,
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.'
  },
  {
    id: 56,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'lacinia nisi venenatis',
    price: 20.11,
    retailPrice: 19.5,
    'sku ': '807425414-3',
    stock: 123,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.'
  },
  {
    id: 57,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'mauris lacinia',
    price: 16.41,
    retailPrice: 23.27,
    'sku ': '572768574-5',
    stock: 104,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.'
  },
  {
    id: 58,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'nam nulla integer',
    price: 17.25,
    retailPrice: 22.47,
    'sku ': '843553981-4',
    stock: 102,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.'
  },
  {
    id: 59,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'duis',
    price: 21.91,
    retailPrice: 18.47,
    'sku ': '031589679-5',
    stock: 87,
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.'
  },
  {
    id: 60,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'tempus sit amet',
    price: 20.13,
    retailPrice: 20.2,
    'sku ': '324709549-7',
    stock: 92,
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.'
  },
  {
    id: 61,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'nonummy integer',
    price: 19.16,
    retailPrice: 20.63,
    'sku ': '076975660-3',
    stock: 92,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.'
  },
  {
    id: 62,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'etiam',
    price: 22.05,
    retailPrice: 21.47,
    'sku ': '613656783-0',
    stock: 85,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.'
  },
  {
    id: 63,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'aliquet',
    price: 19.79,
    retailPrice: 19.77,
    'sku ': '512190476-2',
    stock: 72,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.'
  },
  {
    id: 64,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'luctus et ultrices',
    price: 18.26,
    retailPrice: 22.08,
    'sku ': '432840975-1',
    stock: 111,
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.'
  },
  {
    id: 65,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'libero ut massa',
    price: 18.95,
    retailPrice: 20.35,
    'sku ': '470783410-8',
    stock: 127,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.'
  },
  {
    id: 66,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'lorem ipsum dolor',
    price: 19.05,
    retailPrice: 20.84,
    'sku ': '710048283-6',
    stock: 107,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.'
  },
  {
    id: 67,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'vehicula consequat morbi',
    price: 24.53,
    retailPrice: 22.87,
    'sku ': '478927580-9',
    stock: 91,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.'
  },
  {
    id: 68,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'congue etiam justo',
    price: 18.27,
    retailPrice: 21.13,
    'sku ': '864493910-6',
    stock: 92,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
  },
  {
    id: 69,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'turpis',
    price: 23.23,
    retailPrice: 23.81,
    'sku ': '941911242-X',
    stock: 109,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.'
  },
  {
    id: 70,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'at',
    price: 18.78,
    retailPrice: 21.22,
    'sku ': '836886545-X',
    stock: 106,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'
  },
  {
    id: 71,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'amet',
    price: 22.9,
    retailPrice: 18.98,
    'sku ': '893220130-7',
    stock: 125,
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.'
  },
  {
    id: 72,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'velit donec diam',
    price: 23.93,
    retailPrice: 23.2,
    'sku ': '272365315-3',
    stock: 106,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.'
  },
  {
    id: 73,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'morbi',
    price: 21.87,
    retailPrice: 21.72,
    'sku ': '506206830-4',
    stock: 90,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.'
  },
  {
    id: 74,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'praesent',
    price: 16.25,
    retailPrice: 19.82,
    'sku ': '297922363-8',
    stock: 112,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.'
  },
  {
    id: 75,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'lectus',
    price: 18.67,
    retailPrice: 21.12,
    'sku ': '941770975-5',
    stock: 120,
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.'
  },
  {
    id: 76,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'pede',
    price: 22.9,
    retailPrice: 19.33,
    'sku ': '788231942-2',
    stock: 77,
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.'
  },
  {
    id: 77,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'in lectus pellentesque',
    price: 19.19,
    retailPrice: 21.35,
    'sku ': '679267979-8',
    stock: 144,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.'
  },
  {
    id: 78,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'tristique fusce congue',
    price: 21.67,
    retailPrice: 21.56,
    'sku ': '438120355-0',
    stock: 107,
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.'
  },
  {
    id: 79,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'bibendum felis',
    price: 23.11,
    retailPrice: 18.49,
    'sku ': '228549418-1',
    stock: 105,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.'
  },
  {
    id: 80,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'justo eu massa',
    price: 16.14,
    retailPrice: 22.87,
    'sku ': '627650317-7',
    stock: 69,
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.'
  },
  {
    id: 81,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'sit amet diam',
    price: 18.82,
    retailPrice: 21.01,
    'sku ': '592023879-8',
    stock: 114,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.'
  },
  {
    id: 82,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'vel',
    price: 24.22,
    retailPrice: 21.94,
    'sku ': '739625870-7',
    stock: 114,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.'
  },
  {
    id: 83,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'semper',
    price: 19.8,
    retailPrice: 21.57,
    'sku ': '959432433-3',
    stock: 88,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.'
  },
  {
    id: 84,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'sit amet sapien',
    price: 16.24,
    retailPrice: 20.19,
    'sku ': '876651310-3',
    stock: 115,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.'
  },
  {
    id: 85,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'dapibus dolor vel',
    price: 23.08,
    retailPrice: 22.04,
    'sku ': '210263293-8',
    stock: 92,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'
  },
  {
    id: 86,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'nonummy',
    price: 17.79,
    retailPrice: 20.01,
    'sku ': '663106451-1',
    stock: 117,
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.'
  },
  {
    id: 87,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'ultrices posuere',
    price: 18.02,
    retailPrice: 21.59,
    'sku ': '130510409-9',
    stock: 111,
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.'
  },
  {
    id: 88,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'vestibulum ante',
    price: 21.29,
    retailPrice: 23.01,
    'sku ': '130745767-3',
    stock: 91,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.'
  },
  {
    id: 89,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'felis',
    price: 17.7,
    retailPrice: 20.49,
    'sku ': '867977941-5',
    stock: 84,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.'
  },
  {
    id: 90,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'non velit nec',
    price: 19.18,
    retailPrice: 22.44,
    'sku ': '405071864-2',
    stock: 110,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.'
  },
  {
    id: 91,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'vulputate',
    price: 18.03,
    retailPrice: 21.63,
    'sku ': '090388566-2',
    stock: 106,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.'
  },
  {
    id: 92,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'etiam justo etiam',
    price: 23.52,
    retailPrice: 21.68,
    'sku ': '269204582-3',
    stock: 104,
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.'
  },
  {
    id: 93,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'eget elit sodales',
    price: 19.63,
    retailPrice: 22.99,
    'sku ': '483281959-3',
    stock: 103,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.'
  },
  {
    id: 94,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'fusce',
    price: 20.9,
    retailPrice: 23.23,
    'sku ': '968017141-8',
    stock: 89,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.'
  },
  {
    id: 95,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'morbi odio',
    price: 17.64,
    retailPrice: 23.36,
    'sku ': '725840696-4',
    stock: 107,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.'
  },
  {
    id: 96,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'in',
    price: 21.12,
    retailPrice: 20.47,
    'sku ': '199704628-8',
    stock: 84,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.'
  },
  {
    id: 97,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'enim in',
    price: 17.58,
    retailPrice: 19.33,
    'sku ': '593724863-5',
    stock: 94,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
  },
  {
    id: 98,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'posuere cubilia',
    price: 21.92,
    retailPrice: 21.97,
    'sku ': '754266643-6',
    stock: 96,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.'
  },
  {
    id: 99,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'aliquet maecenas leo',
    price: 19.64,
    retailPrice: 22.98,
    'sku ': '214136612-7',
    stock: 104,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.'
  },
  {
    id: 100,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'tortor risus',
    price: 18.31,
    retailPrice: 21.19,
    'sku ': '984354099-9',
    stock: 105,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.'
  },
  {
    id: 101,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'libero ut massa',
    price: 21.3,
    retailPrice: 21.08,
    'sku ': '993651716-4',
    stock: 86,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.'
  },
  {
    id: 102,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'ut odio cras',
    price: 18.88,
    retailPrice: 24.11,
    'sku ': '613610655-8',
    stock: 93,
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.'
  },
  {
    id: 103,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'turpis a pede',
    price: 23.54,
    retailPrice: 20.45,
    'sku ': '929591487-2',
    stock: 103,
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.'
  },
  {
    id: 104,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'habitasse platea',
    price: 23.23,
    retailPrice: 21.09,
    'sku ': '836862506-8',
    stock: 124,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.'
  },
  {
    id: 105,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'ut massa quis',
    price: 20.76,
    retailPrice: 19.54,
    'sku ': '981616950-9',
    stock: 85,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.'
  },
  {
    id: 106,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'aliquam quis',
    price: 20.06,
    retailPrice: 20.58,
    'sku ': '195721560-7',
    stock: 93,
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.'
  },
  {
    id: 107,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'vulputate ut ultrices',
    price: 19.97,
    retailPrice: 17.89,
    'sku ': '398169295-0',
    stock: 102,
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.'
  },
  {
    id: 108,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'integer ac leo',
    price: 18.17,
    retailPrice: 22.1,
    'sku ': '367613933-X',
    stock: 83,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'
  },
  {
    id: 109,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'phasellus sit amet',
    price: 21.16,
    retailPrice: 19.49,
    'sku ': '256639868-2',
    stock: 115,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.'
  },
  {
    id: 110,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'maecenas tristique',
    price: 21.83,
    retailPrice: 20.87,
    'sku ': '174496858-6',
    stock: 107,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.'
  },
  {
    id: 111,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'suspendisse',
    price: 16.07,
    retailPrice: 22.13,
    'sku ': '233433863-X',
    stock: 98,
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.'
  },
  {
    id: 112,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'odio',
    price: 17.51,
    retailPrice: 23.74,
    'sku ': '103966526-8',
    stock: 108,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.'
  },
  {
    id: 113,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'erat',
    price: 17.59,
    retailPrice: 21.98,
    'sku ': '519854303-9',
    stock: 105,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.'
  },
  {
    id: 114,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'vestibulum vestibulum ante',
    price: 17.74,
    retailPrice: 19.27,
    'sku ': '835360136-2',
    stock: 98,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.'
  },
  {
    id: 115,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'pulvinar nulla',
    price: 19.0,
    retailPrice: 18.92,
    'sku ': '273949740-7',
    stock: 81,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.'
  },
  {
    id: 116,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'ipsum',
    price: 22.35,
    retailPrice: 21.25,
    'sku ': '729499399-8',
    stock: 111,
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
  },
  {
    id: 117,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'felis',
    price: 18.69,
    retailPrice: 19.58,
    'sku ': '510711084-3',
    stock: 117,
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.'
  },
  {
    id: 118,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'vel',
    price: 18.62,
    retailPrice: 22.51,
    'sku ': '015448198-X',
    stock: 95,
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.'
  },
  {
    id: 119,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'sed justo',
    price: 21.54,
    retailPrice: 20.96,
    'sku ': '882234900-8',
    stock: 100,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.'
  },
  {
    id: 120,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'congue',
    price: 22.88,
    retailPrice: 18.71,
    'sku ': '933230265-0',
    stock: 109,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.'
  },
  {
    id: 121,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'leo pellentesque',
    price: 16.91,
    retailPrice: 23.67,
    'sku ': '742700451-5',
    stock: 97,
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.'
  },
  {
    id: 122,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'potenti in eleifend',
    price: 16.27,
    retailPrice: 19.82,
    'sku ': '876137306-0',
    stock: 114,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.'
  },
  {
    id: 123,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'eget orci',
    price: 17.47,
    retailPrice: 20.47,
    'sku ': '095090113-X',
    stock: 105,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.'
  },
  {
    id: 124,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'nulla',
    price: 18.8,
    retailPrice: 23.67,
    'sku ': '900227181-6',
    stock: 132,
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.'
  },
  {
    id: 125,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'consequat dui nec',
    price: 21.9,
    retailPrice: 21.55,
    'sku ': '100464644-5',
    stock: 102,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.'
  },
  {
    id: 126,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'mauris laoreet ut',
    price: 19.9,
    retailPrice: 22.29,
    'sku ': '552797908-7',
    stock: 114,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 127,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'in',
    price: 21.15,
    retailPrice: 21.1,
    'sku ': '435147032-1',
    stock: 120,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.'
  },
  {
    id: 128,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'phasellus',
    price: 22.11,
    retailPrice: 22.31,
    'sku ': '629457069-7',
    stock: 93,
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.'
  },
  {
    id: 129,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'id sapien in',
    price: 19.84,
    retailPrice: 18.29,
    'sku ': '363086179-2',
    stock: 105,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
  },
  {
    id: 130,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'ante nulla justo',
    price: 22.29,
    retailPrice: 21.67,
    'sku ': '785329057-8',
    stock: 128,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'
  },
  {
    id: 131,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'aliquet pulvinar sed',
    price: 22.87,
    retailPrice: 19.72,
    'sku ': '268227394-7',
    stock: 119,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.'
  },
  {
    id: 132,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'proin risus',
    price: 20.79,
    retailPrice: 19.67,
    'sku ': '982962068-9',
    stock: 109,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.'
  },
  {
    id: 133,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'erat curabitur gravida',
    price: 16.91,
    retailPrice: 20.36,
    'sku ': '897099724-5',
    stock: 80,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
  },
  {
    id: 134,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'mauris ullamcorper purus',
    price: 21.8,
    retailPrice: 20.81,
    'sku ': '431021098-8',
    stock: 91,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.'
  },
  {
    id: 135,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'magna',
    price: 23.4,
    retailPrice: 18.65,
    'sku ': '715702534-5',
    stock: 101,
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.'
  },
  {
    id: 136,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'nullam orci pede',
    price: 18.71,
    retailPrice: 21.11,
    'sku ': '349140180-1',
    stock: 96,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.'
  },
  {
    id: 137,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'id',
    price: 20.03,
    retailPrice: 19.7,
    'sku ': '664085207-1',
    stock: 91,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.'
  },
  {
    id: 138,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'vivamus',
    price: 18.6,
    retailPrice: 21.96,
    'sku ': '129377269-0',
    stock: 86,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
  },
  {
    id: 139,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'morbi',
    price: 24.79,
    retailPrice: 21.6,
    'sku ': '628658644-X',
    stock: 99,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.'
  },
  {
    id: 140,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'pellentesque ultrices',
    price: 20.22,
    retailPrice: 21.37,
    'sku ': '896260567-8',
    stock: 112,
    description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
  },
  {
    id: 141,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'vel est donec',
    price: 22.44,
    retailPrice: 21.61,
    'sku ': '138326465-1',
    stock: 96,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.'
  },
  {
    id: 142,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'convallis nulla neque',
    price: 25.54,
    retailPrice: 21.97,
    'sku ': '729530464-9',
    stock: 89,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.'
  },
  {
    id: 143,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'turpis',
    price: 19.37,
    retailPrice: 20.49,
    'sku ': '254584928-6',
    stock: 92,
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.'
  },
  {
    id: 144,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'pellentesque at',
    price: 19.44,
    retailPrice: 21.98,
    'sku ': '565065409-3',
    stock: 90,
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.'
  },
  {
    id: 145,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'elementum nullam',
    price: 17.54,
    retailPrice: 22.03,
    'sku ': '910271890-1',
    stock: 99,
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  },
  {
    id: 146,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'pellentesque',
    price: 20.9,
    retailPrice: 23.34,
    'sku ': '897175981-X',
    stock: 111,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.'
  },
  {
    id: 147,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'vestibulum ante ipsum',
    price: 21.63,
    retailPrice: 21.6,
    'sku ': '872935716-0',
    stock: 108,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.'
  },
  {
    id: 148,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'elit',
    price: 20.18,
    retailPrice: 22.1,
    'sku ': '290416253-4',
    stock: 99,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.'
  },
  {
    id: 149,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'sollicitudin',
    price: 24.43,
    retailPrice: 20.4,
    'sku ': '801682601-6',
    stock: 87,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.'
  },
  {
    id: 150,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'urna pretium',
    price: 13.96,
    retailPrice: 19.17,
    'sku ': '398508792-X',
    stock: 89,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.'
  },
  {
    id: 151,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'luctus',
    price: 23.08,
    retailPrice: 21.22,
    'sku ': '970966757-2',
    stock: 107,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.'
  },
  {
    id: 152,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'id luctus',
    price: 21.93,
    retailPrice: 20.05,
    'sku ': '920246718-8',
    stock: 98,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.'
  },
  {
    id: 153,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'amet nunc viverra',
    price: 25.81,
    retailPrice: 20.46,
    'sku ': '422597169-4',
    stock: 67,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
  },
  {
    id: 154,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'eu orci',
    price: 20.77,
    retailPrice: 21.64,
    'sku ': '461545409-0',
    stock: 120,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.'
  },
  {
    id: 155,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'donec ut mauris',
    price: 21.53,
    retailPrice: 20.73,
    'sku ': '544286911-2',
    stock: 118,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.'
  },
  {
    id: 156,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'vestibulum velit',
    price: 19.65,
    retailPrice: 20.07,
    'sku ': '096759823-0',
    stock: 125,
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.'
  },
  {
    id: 157,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'ipsum primis',
    price: 18.16,
    retailPrice: 23.48,
    'sku ': '942080540-9',
    stock: 79,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.'
  },
  {
    id: 158,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'justo in hac',
    price: 21.19,
    retailPrice: 17.75,
    'sku ': '241310230-2',
    stock: 108,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.'
  },
  {
    id: 159,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'at diam nam',
    price: 18.79,
    retailPrice: 21.58,
    'sku ': '953240059-1',
    stock: 89,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 160,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'mi integer ac',
    price: 18.77,
    retailPrice: 22.14,
    'sku ': '168238356-3',
    stock: 116,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.'
  },
  {
    id: 161,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'ultrices enim lorem',
    price: 17.61,
    retailPrice: 21.2,
    'sku ': '258313952-5',
    stock: 100,
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.'
  },
  {
    id: 162,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'ac diam cras',
    price: 18.68,
    retailPrice: 21.5,
    'sku ': '711674771-0',
    stock: 87,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.'
  },
  {
    id: 163,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'vestibulum',
    price: 23.33,
    retailPrice: 22.26,
    'sku ': '712921750-2',
    stock: 101,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.'
  },
  {
    id: 164,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'eget',
    price: 21.53,
    retailPrice: 23.28,
    'sku ': '633120930-1',
    stock: 106,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.'
  },
  {
    id: 165,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'eu',
    price: 19.81,
    retailPrice: 20.86,
    'sku ': '579357184-1',
    stock: 109,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.'
  },
  {
    id: 166,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'velit eu est',
    price: 18.6,
    retailPrice: 21.54,
    'sku ': '021112372-2',
    stock: 64,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.'
  },
  {
    id: 167,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'nec',
    price: 22.18,
    retailPrice: 18.4,
    'sku ': '119174302-0',
    stock: 75,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.'
  },
  {
    id: 168,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'est',
    price: 22.66,
    retailPrice: 22.89,
    'sku ': '553403594-3',
    stock: 98,
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.'
  },
  {
    id: 169,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'morbi quis',
    price: 19.83,
    retailPrice: 17.9,
    'sku ': '296537329-2',
    stock: 110,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.'
  },
  {
    id: 170,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'venenatis lacinia',
    price: 16.16,
    retailPrice: 19.78,
    'sku ': '063512035-6',
    stock: 126,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'
  },
  {
    id: 171,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'sapien varius ut',
    price: 23.7,
    retailPrice: 20.22,
    'sku ': '523947307-2',
    stock: 111,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.'
  },
  {
    id: 172,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'pellentesque volutpat dui',
    price: 17.73,
    retailPrice: 19.71,
    'sku ': '574508614-9',
    stock: 84,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.'
  },
  {
    id: 173,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'duis bibendum morbi',
    price: 19.0,
    retailPrice: 19.73,
    'sku ': '354285855-2',
    stock: 102,
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.'
  },
  {
    id: 174,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'nonummy maecenas tincidunt',
    price: 23.04,
    retailPrice: 20.34,
    'sku ': '314783519-7',
    stock: 76,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.'
  },
  {
    id: 175,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'risus semper porta',
    price: 19.65,
    retailPrice: 21.61,
    'sku ': '815934582-8',
    stock: 112,
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.'
  },
  {
    id: 176,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'suspendisse potenti',
    price: 21.19,
    retailPrice: 20.89,
    'sku ': '527052732-4',
    stock: 111,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.'
  },
  {
    id: 177,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'cursus',
    price: 17.06,
    retailPrice: 21.13,
    'sku ': '692542087-0',
    stock: 102,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.'
  },
  {
    id: 178,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'sit amet',
    price: 15.59,
    retailPrice: 19.79,
    'sku ': '282131136-2',
    stock: 85,
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  },
  {
    id: 179,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'nunc',
    price: 17.03,
    retailPrice: 20.42,
    'sku ': '038843307-8',
    stock: 88,
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
  },
  {
    id: 180,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'vestibulum ante ipsum',
    price: 20.39,
    retailPrice: 20.72,
    'sku ': '639941819-4',
    stock: 120,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.'
  },
  {
    id: 181,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'vestibulum quam',
    price: 16.61,
    retailPrice: 21.2,
    'sku ': '411098187-5',
    stock: 86,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.'
  },
  {
    id: 182,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'blandit ultrices enim',
    price: 17.51,
    retailPrice: 21.11,
    'sku ': '027000176-X',
    stock: 100,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.'
  },
  {
    id: 183,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'ante',
    price: 20.79,
    retailPrice: 20.97,
    'sku ': '317239813-7',
    stock: 96,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.'
  },
  {
    id: 184,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'ac',
    price: 19.95,
    retailPrice: 21.16,
    'sku ': '992170847-3',
    stock: 105,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.'
  },
  {
    id: 185,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'hac',
    price: 21.99,
    retailPrice: 20.78,
    'sku ': '954413953-2',
    stock: 90,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.'
  },
  {
    id: 186,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'at dolor',
    price: 20.46,
    retailPrice: 23.78,
    'sku ': '858755586-3',
    stock: 97,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.'
  },
  {
    id: 187,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'hac habitasse',
    price: 18.98,
    retailPrice: 20.29,
    'sku ': '430660674-0',
    stock: 107,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.'
  },
  {
    id: 188,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'molestie lorem quisque',
    price: 18.16,
    retailPrice: 21.69,
    'sku ': '133178624-X',
    stock: 96,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.'
  },
  {
    id: 189,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'rhoncus',
    price: 22.15,
    retailPrice: 22.36,
    'sku ': '623873517-1',
    stock: 100,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.'
  },
  {
    id: 190,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'rhoncus aliquet',
    price: 18.07,
    retailPrice: 23.71,
    'sku ': '119496929-1',
    stock: 103,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.'
  },
  {
    id: 191,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'proin',
    price: 18.9,
    retailPrice: 21.52,
    'sku ': '552166784-9',
    stock: 123,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.'
  },
  {
    id: 192,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'quam sollicitudin vitae',
    price: 14.62,
    retailPrice: 21.54,
    'sku ': '068051862-2',
    stock: 98,
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.'
  },
  {
    id: 193,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'nunc vestibulum ante',
    price: 18.79,
    retailPrice: 22.36,
    'sku ': '941746022-6',
    stock: 98,
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
  },
  {
    id: 194,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'pede',
    price: 17.54,
    retailPrice: 23.03,
    'sku ': '348079375-4',
    stock: 73,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 195,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'purus sit amet',
    price: 19.69,
    retailPrice: 22.15,
    'sku ': '803219135-6',
    stock: 123,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.'
  },
  {
    id: 196,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'viverra',
    price: 14.93,
    retailPrice: 20.54,
    'sku ': '068993889-6',
    stock: 115,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.'
  },
  {
    id: 197,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'leo odio condimentum',
    price: 20.12,
    retailPrice: 22.52,
    'sku ': '134879090-3',
    stock: 104,
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.'
  },
  {
    id: 198,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'magna',
    price: 20.28,
    retailPrice: 21.97,
    'sku ': '786180093-8',
    stock: 87,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.'
  },
  {
    id: 199,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'risus auctor',
    price: 28.77,
    retailPrice: 21.82,
    'sku ': '624671752-7',
    stock: 112,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
  },
  {
    id: 200,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'ipsum dolor sit',
    price: 23.76,
    retailPrice: 23.11,
    'sku ': '962339730-5',
    stock: 131,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.'
  },
  {
    id: 201,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'lacus curabitur',
    price: 19.19,
    retailPrice: 17.87,
    'sku ': '887367704-5',
    stock: 99,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.'
  },
  {
    id: 202,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'hendrerit at',
    price: 21.73,
    retailPrice: 21.68,
    'sku ': '746607724-2',
    stock: 86,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.'
  },
  {
    id: 203,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'aliquet maecenas leo',
    price: 18.93,
    retailPrice: 22.22,
    'sku ': '395002187-6',
    stock: 98,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.'
  },
  {
    id: 204,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'ultrices libero non',
    price: 24.02,
    retailPrice: 20.43,
    'sku ': '863567738-2',
    stock: 102,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.'
  },
  {
    id: 205,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'ipsum',
    price: 19.61,
    retailPrice: 20.14,
    'sku ': '256213364-1',
    stock: 110,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.'
  },
  {
    id: 206,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'placerat',
    price: 17.22,
    retailPrice: 20.3,
    'sku ': '490680509-4',
    stock: 98,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.'
  },
  {
    id: 207,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'vitae nisl aenean',
    price: 22.87,
    retailPrice: 18.9,
    'sku ': '889144414-6',
    stock: 105,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.'
  },
  {
    id: 208,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'potenti cras',
    price: 22.31,
    retailPrice: 20.76,
    'sku ': '630084602-4',
    stock: 100,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.'
  },
  {
    id: 209,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'curae',
    price: 17.7,
    retailPrice: 20.21,
    'sku ': '103526974-0',
    stock: 118,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.'
  },
  {
    id: 210,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'aliquam lacus',
    price: 22.73,
    retailPrice: 21.71,
    'sku ': '343006500-3',
    stock: 101,
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.'
  },
  {
    id: 211,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'consequat ut nulla',
    price: 18.15,
    retailPrice: 22.13,
    'sku ': '340619317-X',
    stock: 118,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.'
  },
  {
    id: 212,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'diam neque vestibulum',
    price: 21.29,
    retailPrice: 19.75,
    'sku ': '716843420-9',
    stock: 104,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.'
  },
  {
    id: 213,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'non mauris morbi',
    price: 20.93,
    retailPrice: 21.52,
    'sku ': '185509719-2',
    stock: 115,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.'
  },
  {
    id: 214,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'eleifend',
    price: 22.1,
    retailPrice: 19.1,
    'sku ': '662132187-2',
    stock: 80,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.'
  },
  {
    id: 215,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'pede malesuada in',
    price: 24.62,
    retailPrice: 22.18,
    'sku ': '440685287-5',
    stock: 93,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.'
  },
  {
    id: 216,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'non mi integer',
    price: 18.93,
    retailPrice: 21.43,
    'sku ': '615256319-4',
    stock: 91,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.'
  },
  {
    id: 217,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'mi pede malesuada',
    price: 20.12,
    retailPrice: 20.26,
    'sku ': '421780422-9',
    stock: 99,
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.'
  },
  {
    id: 218,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'sapien',
    price: 21.73,
    retailPrice: 20.0,
    'sku ': '449722139-3',
    stock: 106,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
  },
  {
    id: 219,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'posuere felis',
    price: 20.88,
    retailPrice: 23.65,
    'sku ': '612386370-3',
    stock: 125,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.'
  },
  {
    id: 220,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'quam suspendisse potenti',
    price: 19.42,
    retailPrice: 20.59,
    'sku ': '198233822-9',
    stock: 119,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.'
  },
  {
    id: 221,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'volutpat',
    price: 20.18,
    retailPrice: 20.68,
    'sku ': '776163553-6',
    stock: 105,
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.'
  },
  {
    id: 222,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'eleifend donec ut',
    price: 23.64,
    retailPrice: 20.15,
    'sku ': '696335191-0',
    stock: 110,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.'
  },
  {
    id: 223,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'aliquet ultrices erat',
    price: 18.51,
    retailPrice: 20.22,
    'sku ': '040186123-6',
    stock: 104,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.'
  },
  {
    id: 224,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'bibendum',
    price: 19.65,
    retailPrice: 22.39,
    'sku ': '324978254-8',
    stock: 98,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.'
  },
  {
    id: 225,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'eleifend pede libero',
    price: 16.1,
    retailPrice: 22.12,
    'sku ': '429604953-4',
    stock: 101,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'
  },
  {
    id: 226,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'hac habitasse',
    price: 23.24,
    retailPrice: 20.76,
    'sku ': '982771487-2',
    stock: 111,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.'
  },
  {
    id: 227,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'sodales scelerisque',
    price: 16.83,
    retailPrice: 21.21,
    'sku ': '140676085-4',
    stock: 98,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.'
  },
  {
    id: 228,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'est',
    price: 16.72,
    retailPrice: 23.05,
    'sku ': '968090489-X',
    stock: 83,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.'
  },
  {
    id: 229,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'est',
    price: 22.22,
    retailPrice: 21.02,
    'sku ': '456478731-4',
    stock: 91,
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.'
  },
  {
    id: 230,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'lacinia',
    price: 14.99,
    retailPrice: 22.28,
    'sku ': '057287809-5',
    stock: 93,
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.'
  },
  {
    id: 231,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'vivamus vel nulla',
    price: 19.94,
    retailPrice: 22.65,
    'sku ': '042994587-6',
    stock: 79,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.'
  },
  {
    id: 232,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'dictumst',
    price: 18.7,
    retailPrice: 21.55,
    'sku ': '230295856-X',
    stock: 107,
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.'
  },
  {
    id: 233,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'eget tempus',
    price: 18.08,
    retailPrice: 23.12,
    'sku ': '698016374-4',
    stock: 96,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.'
  },
  {
    id: 234,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'interdum venenatis',
    price: 23.85,
    retailPrice: 22.04,
    'sku ': '175151262-2',
    stock: 88,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
  },
  {
    id: 235,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'ut nulla',
    price: 20.79,
    retailPrice: 21.75,
    'sku ': '161098965-1',
    stock: 81,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
  },
  {
    id: 236,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'ultrices posuere cubilia',
    price: 20.33,
    retailPrice: 22.12,
    'sku ': '414490914-X',
    stock: 119,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.'
  },
  {
    id: 237,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'ut tellus nulla',
    price: 20.56,
    retailPrice: 20.44,
    'sku ': '288176527-0',
    stock: 107,
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.'
  },
  {
    id: 238,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'et tempus',
    price: 19.89,
    retailPrice: 20.35,
    'sku ': '658772202-4',
    stock: 122,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.'
  },
  {
    id: 239,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'quis turpis eget',
    price: 20.02,
    retailPrice: 22.34,
    'sku ': '901285933-6',
    stock: 92,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.'
  },
  {
    id: 240,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'libero nam',
    price: 22.81,
    retailPrice: 20.3,
    'sku ': '049782337-3',
    stock: 111,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.'
  },
  {
    id: 241,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'porttitor',
    price: 18.77,
    retailPrice: 19.04,
    'sku ': '664870215-X',
    stock: 96,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.'
  },
  {
    id: 242,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'nascetur ridiculus mus',
    price: 20.42,
    retailPrice: 21.03,
    'sku ': '062387265-X',
    stock: 79,
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.'
  },
  {
    id: 243,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'in',
    price: 20.41,
    retailPrice: 17.69,
    'sku ': '782162527-2',
    stock: 87,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.'
  },
  {
    id: 244,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'a odio in',
    price: 18.6,
    retailPrice: 21.33,
    'sku ': '434193771-5',
    stock: 84,
    description:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.'
  },
  {
    id: 245,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'elit',
    price: 20.08,
    retailPrice: 21.77,
    'sku ': '072212855-X',
    stock: 116,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.'
  },
  {
    id: 246,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'congue elementum in',
    price: 21.67,
    retailPrice: 23.27,
    'sku ': '106537782-7',
    stock: 82,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.'
  },
  {
    id: 247,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'volutpat',
    price: 23.34,
    retailPrice: 23.6,
    'sku ': '757155544-2',
    stock: 91,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.'
  },
  {
    id: 248,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'ultrices',
    price: 20.69,
    retailPrice: 20.71,
    'sku ': '963271829-1',
    stock: 105,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.'
  },
  {
    id: 249,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'viverra dapibus',
    price: 22.11,
    retailPrice: 26.45,
    'sku ': '216906205-X',
    stock: 120,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.'
  },
  {
    id: 250,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'sociis natoque penatibus',
    price: 20.15,
    retailPrice: 21.39,
    'sku ': '878653072-0',
    stock: 95,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.'
  },
  {
    id: 251,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'mi integer ac',
    price: 18.66,
    retailPrice: 21.2,
    'sku ': '019744944-1',
    stock: 88,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.'
  },
  {
    id: 252,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'neque aenean',
    price: 21.54,
    retailPrice: 19.77,
    'sku ': '577552017-3',
    stock: 101,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.'
  },
  {
    id: 253,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'rhoncus',
    price: 20.44,
    retailPrice: 22.63,
    'sku ': '412996326-0',
    stock: 73,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.'
  },
  {
    id: 254,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'malesuada in imperdiet',
    price: 24.53,
    retailPrice: 22.64,
    'sku ': '153951666-0',
    stock: 70,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.'
  },
  {
    id: 255,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'cras non velit',
    price: 18.98,
    retailPrice: 22.5,
    'sku ': '669951928-X',
    stock: 111,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.'
  },
  {
    id: 256,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'odio porttitor id',
    price: 16.48,
    retailPrice: 21.25,
    'sku ': '378006856-7',
    stock: 121,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.'
  },
  {
    id: 257,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'nisl nunc rhoncus',
    price: 16.38,
    retailPrice: 20.89,
    'sku ': '095504723-4',
    stock: 115,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.'
  },
  {
    id: 258,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'vehicula condimentum',
    price: 16.24,
    retailPrice: 20.31,
    'sku ': '887924042-0',
    stock: 93,
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.'
  },
  {
    id: 259,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'non mi integer',
    price: 25.61,
    retailPrice: 22.8,
    'sku ': '708375133-1',
    stock: 73,
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.'
  },
  {
    id: 260,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'ligula sit',
    price: 18.93,
    retailPrice: 17.45,
    'sku ': '134137134-4',
    stock: 103,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.'
  },
  {
    id: 261,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'est',
    price: 19.51,
    retailPrice: 21.06,
    'sku ': '810134358-X',
    stock: 105,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.'
  },
  {
    id: 262,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'rhoncus dui vel',
    price: 20.64,
    retailPrice: 20.67,
    'sku ': '596603491-5',
    stock: 100,
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.'
  },
  {
    id: 263,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'quisque arcu',
    price: 19.68,
    retailPrice: 17.25,
    'sku ': '446158934-X',
    stock: 125,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.'
  },
  {
    id: 264,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'duis',
    price: 18.28,
    retailPrice: 20.49,
    'sku ': '124836152-0',
    stock: 86,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.'
  },
  {
    id: 265,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'diam neque',
    price: 17.78,
    retailPrice: 20.01,
    'sku ': '009935918-9',
    stock: 90,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.'
  },
  {
    id: 266,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'ridiculus mus',
    price: 20.45,
    retailPrice: 19.62,
    'sku ': '381067773-6',
    stock: 108,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.'
  },
  {
    id: 267,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'bibendum morbi',
    price: 21.82,
    retailPrice: 24.16,
    'sku ': '352106719-X',
    stock: 99,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  },
  {
    id: 268,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'bibendum felis sed',
    price: 16.2,
    retailPrice: 24.11,
    'sku ': '382356419-6',
    stock: 112,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
  },
  {
    id: 269,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'nulla suspendisse potenti',
    price: 19.85,
    retailPrice: 20.62,
    'sku ': '458670583-3',
    stock: 129,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.'
  },
  {
    id: 270,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'eu pede',
    price: 20.74,
    retailPrice: 21.3,
    'sku ': '271078267-7',
    stock: 98,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.'
  },
  {
    id: 271,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'montes nascetur ridiculus',
    price: 19.84,
    retailPrice: 20.89,
    'sku ': '433022143-8',
    stock: 119,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.'
  },
  {
    id: 272,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'amet erat',
    price: 22.71,
    retailPrice: 22.64,
    'sku ': '705696116-9',
    stock: 73,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
  },
  {
    id: 273,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'rutrum nulla nunc',
    price: 22.51,
    retailPrice: 21.69,
    'sku ': '639133789-6',
    stock: 90,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.'
  },
  {
    id: 274,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'hendrerit at vulputate',
    price: 23.99,
    retailPrice: 19.57,
    'sku ': '304027554-2',
    stock: 108,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.'
  },
  {
    id: 275,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'tristique in',
    price: 16.36,
    retailPrice: 18.8,
    'sku ': '317384326-6',
    stock: 91,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.'
  },
  {
    id: 276,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'vivamus metus arcu',
    price: 22.11,
    retailPrice: 22.08,
    'sku ': '949486763-7',
    stock: 92,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.'
  },
  {
    id: 277,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'nisl ut',
    price: 21.56,
    retailPrice: 20.12,
    'sku ': '646466803-X',
    stock: 86,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.'
  },
  {
    id: 278,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'sed justo pellentesque',
    price: 15.77,
    retailPrice: 18.97,
    'sku ': '374956606-2',
    stock: 111,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.'
  },
  {
    id: 279,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'leo',
    price: 20.44,
    retailPrice: 19.57,
    'sku ': '164936155-6',
    stock: 104,
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.'
  },
  {
    id: 280,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'sapien quis libero',
    price: 19.49,
    retailPrice: 21.59,
    'sku ': '615345769-X',
    stock: 100,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
  },
  {
    id: 281,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'eget tincidunt eget',
    price: 21.97,
    retailPrice: 20.45,
    'sku ': '995320102-1',
    stock: 105,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.'
  },
  {
    id: 282,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'tellus',
    price: 19.31,
    retailPrice: 19.01,
    'sku ': '331824702-2',
    stock: 103,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.'
  },
  {
    id: 283,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'cras',
    price: 21.46,
    retailPrice: 21.53,
    'sku ': '758351317-0',
    stock: 87,
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.'
  },
  {
    id: 284,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'quam nec',
    price: 15.72,
    retailPrice: 21.66,
    'sku ': '274812181-3',
    stock: 130,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.'
  },
  {
    id: 285,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'dolor sit',
    price: 18.52,
    retailPrice: 21.24,
    'sku ': '004793106-X',
    stock: 105,
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.'
  },
  {
    id: 286,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'ut',
    price: 20.15,
    retailPrice: 19.98,
    'sku ': '123008173-9',
    stock: 109,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.'
  },
  {
    id: 287,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'facilisi',
    price: 18.32,
    retailPrice: 20.66,
    'sku ': '494416909-4',
    stock: 118,
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.'
  },
  {
    id: 288,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'massa',
    price: 13.8,
    retailPrice: 21.24,
    'sku ': '262275813-8',
    stock: 93,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.'
  },
  {
    id: 289,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'sapien',
    price: 20.94,
    retailPrice: 22.63,
    'sku ': '016378526-0',
    stock: 93,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.'
  },
  {
    id: 290,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'adipiscing elit',
    price: 20.76,
    retailPrice: 20.82,
    'sku ': '964753011-0',
    stock: 84,
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.'
  },
  {
    id: 291,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'aliquet',
    price: 20.27,
    retailPrice: 20.84,
    'sku ': '296291438-1',
    stock: 87,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
  },
  {
    id: 292,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'non ligula',
    price: 21.09,
    retailPrice: 19.7,
    'sku ': '821067870-1',
    stock: 98,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.'
  },
  {
    id: 293,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'vivamus vel',
    price: 21.74,
    retailPrice: 20.4,
    'sku ': '383293170-8',
    stock: 96,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
  },
  {
    id: 294,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'quis odio consequat',
    price: 23.22,
    retailPrice: 19.76,
    'sku ': '588912944-9',
    stock: 120,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.'
  },
  {
    id: 295,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'et ultrices posuere',
    price: 18.02,
    retailPrice: 19.16,
    'sku ': '000438980-8',
    stock: 116,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.'
  },
  {
    id: 296,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'praesent blandit',
    price: 18.38,
    retailPrice: 19.11,
    'sku ': '803041130-8',
    stock: 100,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.'
  },
  {
    id: 297,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'justo etiam',
    price: 22.6,
    retailPrice: 25.11,
    'sku ': '231842618-X',
    stock: 109,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.'
  },
  {
    id: 298,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'sed augue',
    price: 20.46,
    retailPrice: 19.46,
    'sku ': '590498927-X',
    stock: 102,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'
  },
  {
    id: 299,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'luctus et',
    price: 16.47,
    retailPrice: 20.6,
    'sku ': '950593455-6',
    stock: 66,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.'
  },
  {
    id: 300,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'ut',
    price: 16.26,
    retailPrice: 18.78,
    'sku ': '374282049-4',
    stock: 114,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.'
  },
  {
    id: 301,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'libero non',
    price: 25.68,
    retailPrice: 19.56,
    'sku ': '900744617-7',
    stock: 80,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.'
  },
  {
    id: 302,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'cras',
    price: 18.12,
    retailPrice: 22.66,
    'sku ': '362553905-5',
    stock: 142,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.'
  },
  {
    id: 303,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'in hac',
    price: 17.98,
    retailPrice: 18.46,
    'sku ': '311720798-8',
    stock: 141,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.'
  },
  {
    id: 304,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'turpis elementum',
    price: 19.85,
    retailPrice: 20.61,
    'sku ': '300398113-7',
    stock: 123,
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.'
  },
  {
    id: 305,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'enim sit amet',
    price: 20.76,
    retailPrice: 21.25,
    'sku ': '097713852-6',
    stock: 100,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.'
  },
  {
    id: 306,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'dui maecenas',
    price: 18.57,
    retailPrice: 21.12,
    'sku ': '088837925-0',
    stock: 112,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.'
  },
  {
    id: 307,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'in',
    price: 22.27,
    retailPrice: 21.85,
    'sku ': '853187406-8',
    stock: 85,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.'
  },
  {
    id: 308,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'nunc donec quis',
    price: 25.48,
    retailPrice: 20.71,
    'sku ': '966787574-1',
    stock: 91,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.'
  },
  {
    id: 309,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'tincidunt eget tempus',
    price: 22.24,
    retailPrice: 24.01,
    'sku ': '595746440-6',
    stock: 82,
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.'
  },
  {
    id: 310,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'ut mauris',
    price: 19.11,
    retailPrice: 20.88,
    'sku ': '648386702-6',
    stock: 73,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.'
  },
  {
    id: 311,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'duis at',
    price: 20.01,
    retailPrice: 21.66,
    'sku ': '749205199-9',
    stock: 70,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.'
  },
  {
    id: 312,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'pede ullamcorper',
    price: 22.33,
    retailPrice: 20.1,
    'sku ': '205891699-9',
    stock: 104,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.'
  },
  {
    id: 313,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'eget eros',
    price: 15.43,
    retailPrice: 19.46,
    'sku ': '453879049-4',
    stock: 70,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'
  },
  {
    id: 314,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'magna vestibulum aliquet',
    price: 24.62,
    retailPrice: 21.64,
    'sku ': '326332946-4',
    stock: 79,
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.'
  },
  {
    id: 315,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'ligula sit amet',
    price: 19.13,
    retailPrice: 18.52,
    'sku ': '596766280-4',
    stock: 103,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.'
  },
  {
    id: 316,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'dictumst morbi vestibulum',
    price: 20.11,
    retailPrice: 19.65,
    'sku ': '434630140-1',
    stock: 111,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.'
  },
  {
    id: 317,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'nam nulla',
    price: 15.23,
    retailPrice: 22.79,
    'sku ': '941667346-3',
    stock: 117,
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'
  },
  {
    id: 318,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'amet eros suspendisse',
    price: 20.98,
    retailPrice: 20.51,
    'sku ': '805367689-8',
    stock: 97,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.'
  },
  {
    id: 319,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'nam nulla',
    price: 16.63,
    retailPrice: 23.34,
    'sku ': '171209966-3',
    stock: 81,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.'
  },
  {
    id: 320,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'turpis eget',
    price: 18.55,
    retailPrice: 23.07,
    'sku ': '359013042-3',
    stock: 107,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.'
  },
  {
    id: 321,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'lectus suspendisse',
    price: 20.15,
    retailPrice: 19.63,
    'sku ': '993929954-0',
    stock: 89,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
  },
  {
    id: 322,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'sed sagittis nam',
    price: 20.01,
    retailPrice: 21.39,
    'sku ': '560730740-9',
    stock: 101,
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.'
  },
  {
    id: 323,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'massa',
    price: 18.08,
    retailPrice: 20.18,
    'sku ': '335556138-X',
    stock: 102,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.'
  },
  {
    id: 324,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'consectetuer adipiscing',
    price: 17.73,
    retailPrice: 20.75,
    'sku ': '688098119-4',
    stock: 111,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.'
  },
  {
    id: 325,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'pellentesque volutpat',
    price: 24.87,
    retailPrice: 19.44,
    'sku ': '329000055-9',
    stock: 105,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.'
  },
  {
    id: 326,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'vel',
    price: 20.1,
    retailPrice: 24.48,
    'sku ': '450695592-7',
    stock: 104,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.'
  },
  {
    id: 327,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'arcu libero rutrum',
    price: 15.88,
    retailPrice: 22.13,
    'sku ': '698577998-0',
    stock: 94,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.'
  },
  {
    id: 328,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'in tempus',
    price: 20.28,
    retailPrice: 20.82,
    'sku ': '358571207-X',
    stock: 100,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.'
  },
  {
    id: 329,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'enim lorem ipsum',
    price: 22.18,
    retailPrice: 22.17,
    'sku ': '289616876-1',
    stock: 106,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
  },
  {
    id: 330,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'quis augue',
    price: 20.14,
    retailPrice: 20.85,
    'sku ': '491410985-9',
    stock: 105,
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.'
  },
  {
    id: 331,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'donec diam neque',
    price: 21.93,
    retailPrice: 23.92,
    'sku ': '838146115-4',
    stock: 80,
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.'
  },
  {
    id: 332,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'orci eget',
    price: 19.29,
    retailPrice: 22.75,
    'sku ': '045452695-4',
    stock: 124,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.'
  },
  {
    id: 333,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'ac lobortis vel',
    price: 19.28,
    retailPrice: 22.27,
    'sku ': '087930913-X',
    stock: 83,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.'
  },
  {
    id: 334,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'vestibulum',
    price: 21.96,
    retailPrice: 22.83,
    'sku ': '062624499-4',
    stock: 132,
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.'
  },
  {
    id: 335,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'tempor convallis nulla',
    price: 15.81,
    retailPrice: 20.71,
    'sku ': '154260711-6',
    stock: 101,
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.'
  },
  {
    id: 336,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'vel lectus in',
    price: 13.34,
    retailPrice: 20.68,
    'sku ': '376923637-8',
    stock: 121,
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.'
  },
  {
    id: 337,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'vulputate justo',
    price: 18.13,
    retailPrice: 23.0,
    'sku ': '770757244-0',
    stock: 84,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
  },
  {
    id: 338,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'integer ac leo',
    price: 23.17,
    retailPrice: 21.75,
    'sku ': '536578364-6',
    stock: 98,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
  },
  {
    id: 339,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'at turpis',
    price: 13.91,
    retailPrice: 21.24,
    'sku ': '774751805-6',
    stock: 111,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.'
  },
  {
    id: 340,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'congue risus semper',
    price: 22.51,
    retailPrice: 20.77,
    'sku ': '146069172-5',
    stock: 90,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.'
  },
  {
    id: 341,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'lorem quisque',
    price: 18.97,
    retailPrice: 20.03,
    'sku ': '086188417-5',
    stock: 132,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.'
  },
  {
    id: 342,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'amet',
    price: 18.23,
    retailPrice: 22.18,
    'sku ': '348227547-5',
    stock: 112,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.'
  },
  {
    id: 343,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'ultrices',
    price: 22.12,
    retailPrice: 21.69,
    'sku ': '099134060-4',
    stock: 116,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.'
  },
  {
    id: 344,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'sapien non mi',
    price: 20.48,
    retailPrice: 19.29,
    'sku ': '948055877-7',
    stock: 98,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.'
  },
  {
    id: 345,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'leo odio',
    price: 21.58,
    retailPrice: 20.59,
    'sku ': '204788699-6',
    stock: 102,
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.'
  },
  {
    id: 346,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'quis turpis sed',
    price: 21.52,
    retailPrice: 23.09,
    'sku ': '393391002-1',
    stock: 83,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.'
  },
  {
    id: 347,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'eget eleifend',
    price: 18.55,
    retailPrice: 21.34,
    'sku ': '140995287-8',
    stock: 81,
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.'
  },
  {
    id: 348,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'sed accumsan felis',
    price: 16.45,
    retailPrice: 18.83,
    'sku ': '217465820-8',
    stock: 113,
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.'
  },
  {
    id: 349,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'donec dapibus',
    price: 22.16,
    retailPrice: 21.93,
    'sku ': '915745466-3',
    stock: 110,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.'
  },
  {
    id: 350,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'neque sapien',
    price: 18.04,
    retailPrice: 21.86,
    'sku ': '048549729-8',
    stock: 103,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.'
  },
  {
    id: 351,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'sit amet nulla',
    price: 20.46,
    retailPrice: 22.43,
    'sku ': '962859460-5',
    stock: 113,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.'
  },
  {
    id: 352,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'nec',
    price: 17.62,
    retailPrice: 20.99,
    'sku ': '388408125-X',
    stock: 119,
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.'
  },
  {
    id: 353,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'a odio',
    price: 23.58,
    retailPrice: 20.74,
    'sku ': '409350708-2',
    stock: 103,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.'
  },
  {
    id: 354,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'facilisi cras non',
    price: 15.62,
    retailPrice: 21.93,
    'sku ': '590698332-5',
    stock: 122,
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.'
  },
  {
    id: 355,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'nulla',
    price: 14.36,
    retailPrice: 19.94,
    'sku ': '766737605-0',
    stock: 103,
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.'
  },
  {
    id: 356,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'at velit eu',
    price: 22.52,
    retailPrice: 22.1,
    'sku ': '539533898-5',
    stock: 82,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.'
  },
  {
    id: 357,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'ut suscipit a',
    price: 16.24,
    retailPrice: 19.86,
    'sku ': '404862010-X',
    stock: 84,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.'
  },
  {
    id: 358,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'lobortis est',
    price: 26.07,
    retailPrice: 21.52,
    'sku ': '049597549-4',
    stock: 81,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.'
  },
  {
    id: 359,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'aliquam augue',
    price: 18.56,
    retailPrice: 20.22,
    'sku ': '957741115-0',
    stock: 124,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'
  },
  {
    id: 360,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'faucibus accumsan odio',
    price: 16.78,
    retailPrice: 20.27,
    'sku ': '236956785-6',
    stock: 127,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
  },
  {
    id: 361,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'dapibus dolor vel',
    price: 21.94,
    retailPrice: 22.48,
    'sku ': '847655686-1',
    stock: 103,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.'
  },
  {
    id: 362,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'interdum eu tincidunt',
    price: 22.19,
    retailPrice: 20.59,
    'sku ': '634170102-0',
    stock: 97,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.'
  },
  {
    id: 363,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'pede ullamcorper',
    price: 27.05,
    retailPrice: 19.39,
    'sku ': '765777506-8',
    stock: 110,
    description: 'Aliquam erat volutpat. In congue. Etiam justo.'
  },
  {
    id: 364,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'phasellus sit',
    price: 19.85,
    retailPrice: 18.55,
    'sku ': '849941383-8',
    stock: 103,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.'
  },
  {
    id: 365,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'viverra eget',
    price: 20.17,
    retailPrice: 21.67,
    'sku ': '426618967-2',
    stock: 120,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.'
  },
  {
    id: 366,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'volutpat eleifend donec',
    price: 21.03,
    retailPrice: 22.13,
    'sku ': '207969822-2',
    stock: 106,
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.'
  },
  {
    id: 367,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'habitasse',
    price: 21.29,
    retailPrice: 22.43,
    'sku ': '311011492-5',
    stock: 123,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.'
  },
  {
    id: 368,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'lacinia nisi venenatis',
    price: 17.37,
    retailPrice: 20.82,
    'sku ': '745897079-0',
    stock: 92,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.'
  },
  {
    id: 369,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'vestibulum ac',
    price: 20.62,
    retailPrice: 22.54,
    'sku ': '504108446-7',
    stock: 106,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.'
  },
  {
    id: 370,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'blandit ultrices enim',
    price: 19.53,
    retailPrice: 22.72,
    'sku ': '056937373-5',
    stock: 114,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 371,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'ac tellus semper',
    price: 18.13,
    retailPrice: 21.18,
    'sku ': '487279149-5',
    stock: 90,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.'
  },
  {
    id: 372,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'quis',
    price: 23.38,
    retailPrice: 21.41,
    'sku ': '248051769-1',
    stock: 83,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.'
  },
  {
    id: 373,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'luctus nec',
    price: 21.58,
    retailPrice: 18.5,
    'sku ': '105562147-4',
    stock: 107,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.'
  },
  {
    id: 374,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'suspendisse',
    price: 24.36,
    retailPrice: 21.85,
    'sku ': '964126689-6',
    stock: 87,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'
  },
  {
    id: 375,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'ultrices posuere cubilia',
    price: 19.63,
    retailPrice: 17.85,
    'sku ': '776704476-9',
    stock: 75,
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.'
  },
  {
    id: 376,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'habitasse',
    price: 18.67,
    retailPrice: 21.02,
    'sku ': '491248798-8',
    stock: 81,
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.'
  },
  {
    id: 377,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'quis orci',
    price: 22.32,
    retailPrice: 22.23,
    'sku ': '416839028-4',
    stock: 128,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 378,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'blandit nam nulla',
    price: 18.78,
    retailPrice: 19.94,
    'sku ': '095585771-6',
    stock: 102,
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.'
  },
  {
    id: 379,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'nibh ligula nec',
    price: 14.19,
    retailPrice: 20.55,
    'sku ': '660349982-7',
    stock: 92,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.'
  },
  {
    id: 380,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'tempus sit amet',
    price: 23.05,
    retailPrice: 21.28,
    'sku ': '971048857-0',
    stock: 106,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
  },
  {
    id: 381,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'diam',
    price: 20.72,
    retailPrice: 21.73,
    'sku ': '167284606-4',
    stock: 111,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.'
  },
  {
    id: 382,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'non mi',
    price: 14.68,
    retailPrice: 22.7,
    'sku ': '291555881-7',
    stock: 81,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.'
  },
  {
    id: 383,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'vehicula',
    price: 17.36,
    retailPrice: 20.5,
    'sku ': '695181432-5',
    stock: 107,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.'
  },
  {
    id: 384,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'ligula suspendisse',
    price: 18.1,
    retailPrice: 20.56,
    'sku ': '765923163-4',
    stock: 105,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
  },
  {
    id: 385,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'integer',
    price: 19.4,
    retailPrice: 21.45,
    'sku ': '711439684-8',
    stock: 127,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.'
  },
  {
    id: 386,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'non lectus aliquam',
    price: 19.54,
    retailPrice: 21.48,
    'sku ': '444044446-6',
    stock: 102,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.'
  },
  {
    id: 387,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'sit amet sem',
    price: 22.78,
    retailPrice: 20.91,
    'sku ': '522644337-4',
    stock: 138,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.'
  },
  {
    id: 388,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'lacinia sapien',
    price: 20.3,
    retailPrice: 19.93,
    'sku ': '936185925-0',
    stock: 96,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.'
  },
  {
    id: 389,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'sed ante',
    price: 18.69,
    retailPrice: 23.62,
    'sku ': '622779930-0',
    stock: 70,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.'
  },
  {
    id: 390,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'nullam',
    price: 21.66,
    retailPrice: 20.66,
    'sku ': '756507736-4',
    stock: 102,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.'
  },
  {
    id: 391,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'tortor eu pede',
    price: 21.47,
    retailPrice: 22.08,
    'sku ': '771590509-7',
    stock: 124,
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.'
  },
  {
    id: 392,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'nulla ultrices aliquet',
    price: 23.75,
    retailPrice: 20.42,
    'sku ': '413769187-8',
    stock: 111,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
  },
  {
    id: 393,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'nec euismod scelerisque',
    price: 26.39,
    retailPrice: 21.05,
    'sku ': '791937764-1',
    stock: 112,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
  },
  {
    id: 394,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'sit',
    price: 15.77,
    retailPrice: 21.61,
    'sku ': '700561487-9',
    stock: 90,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.'
  },
  {
    id: 395,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'placerat',
    price: 14.79,
    retailPrice: 20.39,
    'sku ': '320617386-8',
    stock: 113,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.'
  },
  {
    id: 396,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'eget tempus',
    price: 16.45,
    retailPrice: 20.56,
    'sku ': '516941999-6',
    stock: 85,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.'
  },
  {
    id: 397,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'mi pede',
    price: 21.18,
    retailPrice: 22.54,
    'sku ': '449425145-3',
    stock: 96,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.'
  },
  {
    id: 398,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'vehicula condimentum',
    price: 18.43,
    retailPrice: 22.16,
    'sku ': '667632276-5',
    stock: 108,
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.'
  },
  {
    id: 399,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'platea dictumst etiam',
    price: 17.01,
    retailPrice: 22.59,
    'sku ': '668597219-X',
    stock: 127,
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.'
  },
  {
    id: 400,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'habitasse',
    price: 19.29,
    retailPrice: 23.94,
    'sku ': '157223738-4',
    stock: 63,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
  },
  {
    id: 401,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'sapien iaculis',
    price: 18.69,
    retailPrice: 21.8,
    'sku ': '412805540-9',
    stock: 107,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.'
  },
  {
    id: 402,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'ipsum aliquam non',
    price: 24.28,
    retailPrice: 18.86,
    'sku ': '620761692-8',
    stock: 108,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.'
  },
  {
    id: 403,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'vel',
    price: 23.28,
    retailPrice: 21.64,
    'sku ': '708182397-1',
    stock: 101,
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.'
  },
  {
    id: 404,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'neque',
    price: 22.85,
    retailPrice: 21.31,
    'sku ': '238361851-9',
    stock: 108,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.'
  },
  {
    id: 405,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'aenean',
    price: 22.58,
    retailPrice: 21.25,
    'sku ': '414179771-5',
    stock: 117,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.'
  },
  {
    id: 406,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'adipiscing lorem vitae',
    price: 20.85,
    retailPrice: 17.01,
    'sku ': '943294489-1',
    stock: 92,
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.'
  },
  {
    id: 407,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'diam nam tristique',
    price: 20.3,
    retailPrice: 22.95,
    'sku ': '875404688-2',
    stock: 93,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.'
  },
  {
    id: 408,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'curabitur',
    price: 19.89,
    retailPrice: 19.29,
    'sku ': '427025087-9',
    stock: 94,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.'
  },
  {
    id: 409,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'funk'",
    'artist ': 'mattis odio',
    price: 22.53,
    retailPrice: 19.85,
    'sku ': '710487716-9',
    stock: 100,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.'
  },
  {
    id: 410,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'blandit',
    price: 20.39,
    retailPrice: 22.9,
    'sku ': '799289970-9',
    stock: 88,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.'
  },
  {
    id: 411,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'natoque penatibus',
    price: 20.76,
    retailPrice: 21.02,
    'sku ': '990357266-2',
    stock: 105,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.'
  },
  {
    id: 412,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'ultrices phasellus id',
    price: 20.12,
    retailPrice: 21.58,
    'sku ': '749056169-8',
    stock: 94,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.'
  },
  {
    id: 413,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'nulla tempus vivamus',
    price: 18.87,
    retailPrice: 22.52,
    'sku ': '702812929-2',
    stock: 97,
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.'
  },
  {
    id: 414,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'magna bibendum imperdiet',
    price: 17.5,
    retailPrice: 21.83,
    'sku ': '815348431-1',
    stock: 106,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.'
  },
  {
    id: 415,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'rhoncus dui',
    price: 21.25,
    retailPrice: 20.85,
    'sku ': '794971241-4',
    stock: 100,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.'
  },
  {
    id: 416,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'velit',
    price: 16.51,
    retailPrice: 21.5,
    'sku ': '607241661-6',
    stock: 83,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.'
  },
  {
    id: 417,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'ac enim in',
    price: 21.68,
    retailPrice: 22.1,
    'sku ': '670334702-6',
    stock: 103,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.'
  },
  {
    id: 418,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'nec dui',
    price: 16.51,
    retailPrice: 21.36,
    'sku ': '856444513-1',
    stock: 92,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.'
  },
  {
    id: 419,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'neque',
    price: 24.34,
    retailPrice: 20.96,
    'sku ': '558365944-0',
    stock: 99,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.'
  },
  {
    id: 420,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'magna ac',
    price: 23.78,
    retailPrice: 20.21,
    'sku ': '005623653-0',
    stock: 103,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'
  },
  {
    id: 421,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'id',
    price: 17.91,
    retailPrice: 20.4,
    'sku ': '796316922-6',
    stock: 111,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.'
  },
  {
    id: 422,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'dapibus',
    price: 15.86,
    retailPrice: 19.44,
    'sku ': '888072225-5',
    stock: 112,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.'
  },
  {
    id: 423,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'vestibulum ante',
    price: 16.07,
    retailPrice: 19.98,
    'sku ': '757745490-7',
    stock: 109,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.'
  },
  {
    id: 424,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'odio porttitor id',
    price: 22.2,
    retailPrice: 22.21,
    'sku ': '370644772-X',
    stock: 86,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.'
  },
  {
    id: 425,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'vestibulum ac est',
    price: 19.83,
    retailPrice: 21.49,
    'sku ': '665501132-9',
    stock: 103,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.'
  },
  {
    id: 426,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'est',
    price: 18.97,
    retailPrice: 20.73,
    'sku ': '249647956-5',
    stock: 131,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.'
  },
  {
    id: 427,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'sapien ut',
    price: 21.32,
    retailPrice: 20.0,
    'sku ': '266256758-9',
    stock: 97,
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.'
  },
  {
    id: 428,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'at nulla suspendisse',
    price: 18.24,
    retailPrice: 21.44,
    'sku ': '062351593-8',
    stock: 122,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.'
  },
  {
    id: 429,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'arcu sed augue',
    price: 19.72,
    retailPrice: 21.32,
    'sku ': '436997549-2',
    stock: 100,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.'
  },
  {
    id: 430,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'nullam',
    price: 22.13,
    retailPrice: 19.65,
    'sku ': '415357763-4',
    stock: 122,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.'
  },
  {
    id: 431,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'in',
    price: 20.57,
    retailPrice: 19.41,
    'sku ': '221736421-9',
    stock: 88,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.'
  },
  {
    id: 432,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'hac habitasse platea',
    price: 16.78,
    retailPrice: 23.77,
    'sku ': '665562996-9',
    stock: 111,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.'
  },
  {
    id: 433,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'iaculis congue',
    price: 20.02,
    retailPrice: 19.88,
    'sku ': '423734975-6',
    stock: 103,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 434,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'dapibus augue vel',
    price: 16.84,
    retailPrice: 20.82,
    'sku ': '726453628-9',
    stock: 96,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.'
  },
  {
    id: 435,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'diam in',
    price: 21.88,
    retailPrice: 23.92,
    'sku ': '856314463-4',
    stock: 78,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.'
  },
  {
    id: 436,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'odio',
    price: 19.92,
    retailPrice: 19.32,
    'sku ': '222230408-3',
    stock: 99,
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.'
  },
  {
    id: 437,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'R&B'",
    'artist ': 'sit',
    price: 20.28,
    retailPrice: 19.27,
    'sku ': '451635641-4',
    stock: 58,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.'
  },
  {
    id: 438,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'nam dui',
    price: 24.47,
    retailPrice: 21.73,
    'sku ': '884058556-7',
    stock: 99,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.'
  },
  {
    id: 439,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'ipsum integer',
    price: 18.12,
    retailPrice: 22.39,
    'sku ': '258331505-6',
    stock: 132,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.'
  },
  {
    id: 440,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'vulputate luctus',
    price: 15.43,
    retailPrice: 22.0,
    'sku ': '081782822-2',
    stock: 99,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.'
  },
  {
    id: 441,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'disco'",
    'artist ': 'lectus',
    price: 18.7,
    retailPrice: 17.8,
    'sku ': '643482638-9',
    stock: 92,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.'
  },
  {
    id: 442,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'neque duis',
    price: 20.75,
    retailPrice: 21.73,
    'sku ': '200589985-2',
    stock: 82,
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.'
  },
  {
    id: 443,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'ultrices phasellus',
    price: 22.21,
    retailPrice: 21.35,
    'sku ': '401938512-2',
    stock: 104,
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.'
  },
  {
    id: 444,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'proin',
    price: 19.21,
    retailPrice: 18.63,
    'sku ': '776571721-9',
    stock: 90,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.'
  },
  {
    id: 445,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'justo',
    price: 19.04,
    retailPrice: 21.28,
    'sku ': '108344188-4',
    stock: 87,
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.'
  },
  {
    id: 446,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'disco'",
    'artist ': 'quisque porta volutpat',
    price: 17.48,
    retailPrice: 21.4,
    'sku ': '245751965-9',
    stock: 114,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.'
  },
  {
    id: 447,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'at diam nam',
    price: 21.34,
    retailPrice: 20.67,
    'sku ': '885017378-4',
    stock: 110,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'
  },
  {
    id: 448,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'nunc rhoncus dui',
    price: 16.91,
    retailPrice: 19.7,
    'sku ': '400491183-4',
    stock: 109,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.'
  },
  {
    id: 449,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'nam congue risus',
    price: 23.94,
    retailPrice: 20.49,
    'sku ': '309929950-2',
    stock: 85,
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.'
  },
  {
    id: 450,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'eu',
    price: 20.63,
    retailPrice: 20.75,
    'sku ': '914994433-9',
    stock: 114,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.'
  },
  {
    id: 451,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'sed',
    price: 15.66,
    retailPrice: 22.41,
    'sku ': '946117156-0',
    stock: 100,
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 452,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'ultrices aliquet',
    price: 26.55,
    retailPrice: 20.62,
    'sku ': '916776351-0',
    stock: 109,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 453,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'soul'",
    'artist ': 'in magna',
    price: 22.42,
    retailPrice: 20.52,
    'sku ': '678001005-7',
    stock: 90,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.'
  },
  {
    id: 454,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'nisi nam ultrices',
    price: 17.88,
    retailPrice: 21.97,
    'sku ': '904996022-7',
    stock: 115,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.'
  },
  {
    id: 455,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rap'",
    'artist ': 'platea dictumst',
    price: 22.81,
    retailPrice: 21.05,
    'sku ': '313190852-1',
    stock: 98,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.'
  },
  {
    id: 456,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'at',
    price: 18.96,
    retailPrice: 18.71,
    'sku ': '085030711-2',
    stock: 122,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.'
  },
  {
    id: 457,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'nullam varius nulla',
    price: 18.08,
    retailPrice: 24.36,
    'sku ': '338183048-1',
    stock: 87,
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.'
  },
  {
    id: 458,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'turpis',
    price: 23.65,
    retailPrice: 21.39,
    'sku ': '868881172-5',
    stock: 114,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.'
  },
  {
    id: 459,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'pellentesque ultrices mattis',
    price: 23.28,
    retailPrice: 22.41,
    'sku ': '117701739-3',
    stock: 99,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.'
  },
  {
    id: 460,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'ullamcorper augue',
    price: 17.85,
    retailPrice: 18.99,
    'sku ': '331428444-6',
    stock: 82,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.'
  },
  {
    id: 461,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'funk'",
    'artist ': 'sem praesent id',
    price: 17.86,
    retailPrice: 19.89,
    'sku ': '114363103-X',
    stock: 124,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.'
  },
  {
    id: 462,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'consequat ut nulla',
    price: 21.23,
    retailPrice: 19.49,
    'sku ': '099653013-4',
    stock: 91,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.'
  },
  {
    id: 463,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'blues'",
    'artist ': 'elementum',
    price: 17.01,
    retailPrice: 21.96,
    'sku ': '898917940-8',
    stock: 111,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
  },
  {
    id: 464,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'funk'",
    'artist ': 'ultrices aliquet maecenas',
    price: 20.1,
    retailPrice: 21.07,
    'sku ': '020006620-X',
    stock: 106,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.'
  },
  {
    id: 465,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'sapien placerat ante',
    price: 17.44,
    retailPrice: 20.48,
    'sku ': '935298422-6',
    stock: 82,
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.'
  },
  {
    id: 466,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rock'",
    'artist ': 'lectus',
    price: 17.05,
    retailPrice: 20.52,
    'sku ': '302160374-2',
    stock: 102,
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.'
  },
  {
    id: 467,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'hac habitasse',
    price: 18.73,
    retailPrice: 20.74,
    'sku ': '374489509-2',
    stock: 93,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.'
  },
  {
    id: 468,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'nulla dapibus',
    price: 21.46,
    retailPrice: 18.81,
    'sku ': '289928411-8',
    stock: 90,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.'
  },
  {
    id: 469,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'id',
    price: 16.83,
    retailPrice: 22.11,
    'sku ': '422107396-9',
    stock: 121,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.'
  },
  {
    id: 470,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'ac consequat metus',
    price: 19.39,
    retailPrice: 21.24,
    'sku ': '943326563-7',
    stock: 84,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.'
  },
  {
    id: 471,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'nullam sit amet',
    price: 24.16,
    retailPrice: 25.14,
    'sku ': '132909032-2',
    stock: 95,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.'
  },
  {
    id: 472,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'soul'",
    'artist ': 'cras',
    price: 21.76,
    retailPrice: 17.98,
    'sku ': '850531185-X',
    stock: 93,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'
  },
  {
    id: 473,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'disco'",
    'artist ': 'ut erat',
    price: 16.51,
    retailPrice: 21.36,
    'sku ': '832053631-6',
    stock: 77,
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.'
  },
  {
    id: 474,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'sit',
    price: 22.35,
    retailPrice: 24.08,
    'sku ': '746169566-5',
    stock: 99,
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.'
  },
  {
    id: 475,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'consequat nulla',
    price: 16.43,
    retailPrice: 20.0,
    'sku ': '389195199-X',
    stock: 112,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.'
  },
  {
    id: 476,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'ante',
    price: 22.29,
    retailPrice: 22.89,
    'sku ': '851273874-X',
    stock: 106,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.'
  },
  {
    id: 477,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'R&B'",
    'artist ': 'lorem id',
    price: 19.38,
    retailPrice: 20.72,
    'sku ': '373152221-7',
    stock: 102,
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.'
  },
  {
    id: 478,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'amet lobortis sapien',
    price: 16.24,
    retailPrice: 22.65,
    'sku ': '104029163-5',
    stock: 115,
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.'
  },
  {
    id: 479,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'dictumst etiam faucibus',
    price: 23.84,
    retailPrice: 21.43,
    'sku ': '358801195-1',
    stock: 124,
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.'
  },
  {
    id: 480,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'at lorem integer',
    price: 20.38,
    retailPrice: 20.94,
    'sku ': '836115700-X',
    stock: 114,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.'
  },
  {
    id: 481,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'funk'",
    'artist ': 'interdum',
    price: 17.45,
    retailPrice: 20.3,
    'sku ': '449172924-7',
    stock: 98,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'
  },
  {
    id: 482,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'magna',
    price: 21.38,
    retailPrice: 19.68,
    'sku ': '070746327-0',
    stock: 120,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.'
  },
  {
    id: 483,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'disco'",
    'artist ': 'neque sapien placerat',
    price: 25.57,
    retailPrice: 22.3,
    'sku ': '957685585-3',
    stock: 104,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.'
  },
  {
    id: 484,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rock'",
    'artist ': 'rutrum at lorem',
    price: 14.85,
    retailPrice: 19.62,
    'sku ': '317870383-7',
    stock: 103,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'
  },
  {
    id: 485,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'rock'",
    'artist ': 'justo lacinia',
    price: 19.66,
    retailPrice: 22.62,
    'sku ': '183398843-4',
    stock: 91,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.'
  },
  {
    id: 486,
    imgUrl: "'./server/db/images/igor.jpeg'",
    'genre ': "'blues'",
    'artist ': 'luctus',
    price: 23.68,
    retailPrice: 20.77,
    'sku ': '736492567-8',
    stock: 93,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.'
  },
  {
    id: 487,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rock'",
    'artist ': 'venenatis',
    price: 25.6,
    retailPrice: 17.79,
    'sku ': '064904919-5',
    stock: 86,
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.'
  },
  {
    id: 488,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'blues'",
    'artist ': 'varius nulla',
    price: 18.67,
    retailPrice: 19.67,
    'sku ': '652071933-1',
    stock: 84,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.'
  },
  {
    id: 489,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'rap'",
    'artist ': 'magna vulputate',
    price: 22.04,
    retailPrice: 19.27,
    'sku ': '979132462-X',
    stock: 103,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
  },
  {
    id: 490,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'tempus',
    price: 18.07,
    retailPrice: 20.96,
    'sku ': '445227985-6',
    stock: 76,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
  },
  {
    id: 491,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'molestie',
    price: 20.75,
    retailPrice: 21.37,
    'sku ': '701245052-5',
    stock: 110,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.'
  },
  {
    id: 492,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'rap'",
    'artist ': 'aliquam non mauris',
    price: 20.74,
    retailPrice: 20.98,
    'sku ': '053024298-2',
    stock: 70,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.'
  },
  {
    id: 493,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'turpis nec',
    price: 23.2,
    retailPrice: 21.19,
    'sku ': '454113400-4',
    stock: 90,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'
  },
  {
    id: 494,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'rap'",
    'artist ': 'eros elementum',
    price: 19.71,
    retailPrice: 20.18,
    'sku ': '840541429-0',
    stock: 87,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
  },
  {
    id: 495,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'blues'",
    'artist ': 'vehicula',
    price: 22.53,
    retailPrice: 21.94,
    'sku ': '766444175-7',
    stock: 118,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.'
  },
  {
    id: 496,
    imgUrl: "'./server/db/images/jungle.jpg'",
    'genre ': "'R&B'",
    'artist ': 'quis orci nullam',
    price: 20.44,
    retailPrice: 21.4,
    'sku ': '058281233-X',
    stock: 103,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.'
  },
  {
    id: 497,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'soul'",
    'artist ': 'cum',
    price: 19.05,
    retailPrice: 21.58,
    'sku ': '839187385-4',
    stock: 83,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'
  },
  {
    id: 498,
    imgUrl: "'./server/db/images/FKA-twigs.jpg'",
    'genre ': "'soul'",
    'artist ': 'erat',
    price: 19.12,
    retailPrice: 20.0,
    'sku ': '175080943-5',
    stock: 80,
    description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
  },
  {
    id: 499,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'magnis dis',
    price: 16.86,
    retailPrice: 23.08,
    'sku ': '682660629-1',
    stock: 83,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.'
  },
  {
    id: 500,
    imgUrl: "'server/db/images/duaLipa.jpg'",
    'genre ': "'R&B'",
    'artist ': 'commodo placerat praesent',
    price: 18.67,
    retailPrice: 23.12,
    'sku ': '217501298-0',
    stock: 96,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.'
  }
]

module.exports = DummyProducts
