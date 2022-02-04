const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'images/hat.jpg',
      url: 'shop/hats',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'images/jacket.jpg',
      url: 'shop/jackets',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'images/sneakers.jpg',
      url: 'shop/sneakers',
    },
    {
      id: 4,
      title: 'mens',
      imageUrl: 'images/men.jpg',
      size: 'large',
      url: 'shop/mens',
    },
    {
      id: 5,
      title: 'womens',
      imageUrl: 'images/women.jpg',
      size: 'large',
      url: 'shop/womens',
    },
  ],
}
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
