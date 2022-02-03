const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'images/hat.jpg',
      url: 'hats',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'images/jacket.jpg',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'images/sneakers.jpg',
    },
    {
      id: 4,
      title: 'mens',
      imageUrl: 'images/men.jpg',
      size: 'large',
    },
    {
      id: 5,
      title: 'womens',
      imageUrl: 'images/women.jpg',
      size: 'large',
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
