
const state = () => ({
  products:[
    {
      id: 1,
      Name: 'Hoodie',
      Price: 10000,
      imageLink: require('../assets/c13.png'),
      Seller: 'Grace',
      Details:[
  
      ]
     
    },
     {
      id: 2,
      Name: 'Cosmetics set',
      Price: 25000,
      imageLink: require('../assets/c2.png'),
      Seller: 'Grace',
    },
    {
      id: 3,
       Name: 'Bag',
      Price: 15000,
      imageLink: require('../assets/c3.png'),
      Seller: 'Grace',
    },
    
  {
      id: 4,
       Name: 'Shoes',
      Price: 15500,
      imageLink: require('../assets/c4.png'),
      Seller: 'Grace',
     
    },
      {
      id: 5,
       Name: 'Laptop',
      Price: 350000,
      imageLink: require('../assets/c5.png'),
      Seller: 'Grace',
    },
    {
      id: 6,
       Name: 'Smart watch',
      Price: 50000,
      imageLink: require('../assets/c6.png'),
      Seller: 'Grace',     
    },
  
     {
      id: 7,
       Name: 'Infant Wears',
      Price: 5000,
      imageLink: require('../assets/c7.png'),
      Seller: 'Grace',
    },
     {
      id: 8,
       Name: 'Jewelries',
      Price: 9500,
      imageLink: require('../assets/c8.png'),
      Seller: 'Grace',
    },
    {
      id: 9,
       Name: 'Jewelries',
      Price: 9500,
      imageLink: require('../assets/c9.png'),
      Seller: 'Grace',
    },
    {
      id: 10,
       Name: 'Jewelries',
      Price: 9500,
      imageLink: require('../assets/c11.png'),
      Seller: 'Grace',
    },
    {
      id: 11,
       Name: 'Jewelries',
      Price: 9500,
      imageLink: require('../assets/c12.png'),
      Seller: 'Grace',
    },
    {
      id: 12,
      Name: 'Hoodie',
      Price: 10000,
      imageLink: require('../assets/c14.png'),
      Seller: 'Grace',
      Details:[
  
      ]
     
    },
    ]
});
const getters = {
  GetProducts: state => {
    return state.products
},
};
const mutations = {
    
};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
