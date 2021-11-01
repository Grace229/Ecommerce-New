import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
        id: 1,
        Name: 'Hoodie',
        Price: 10000,
        imageLink: require('../assets/h1.jpg'),
        imageLink1: require('../assets/h2.jpg'),
        imageLink2: require('../assets/h3.jpg'),
        imageLink3: require('../assets/h1.jpg'),
        Description: 'S-5XL Plus Size Autumn Winter Planet Printed Hoodies Women Loose Casual Long Sleeve Sweatshirts Hooded Pullovers Moletom Feminino',
        Details:[

        ]
     
       
      },
       {
        id: 2,
        Name: 'Cosmetics set',
        Price: 25000,
        imageLink: require('../assets/c1.jpg'),
        imageLink1: require('../assets/c2.jpg'),
        imageLink2: require('../assets/c3.jpg'),
        imageLink3: require('../assets/c1.jpg'),
        Description: 'Modern Cosmetic Storage Box Dressing Table Shelf Beauty Acrylic Desktop Large-Capacity Transparent Makeup Storage Box',
      },
      {
        id: 3,
         Name: 'Bag',
        Price: 15000,
        imageLink: require('../assets/b1.jpg'),
        imageLink1: require('../assets/b2.jpg'),
        imageLink2: require('../assets/b3.jpg'),
        imageLink3: require('../assets/b1.jpg'),
        Description: '1set(2pcs) All Match Bear Pendant 2pcs Square Handbags Ladies Leisure Messenger Bags Pillow Bag Set',
       
      },
      
 {
        id: 4,
         Name: 'Shoes',
        Price: 15500,
        imageLink: require('../assets/s1.jpg'),
        imageLink1: require('../assets/s2.jpg'),
        imageLink2: require('../assets/shoe1.jpg'),
        imageLink3: require('../assets/s1.jpg'),
        Description: 'Autumn New Female Shoes Harajuku Bae Set Up A Thick Bottom Inside The Increase Casual Wind Sports Women',
       
       
      },
        {
        id: 5,
         Name: 'Laptop',
        Price: 350000,
        imageLink: require('../assets/gadget1.jpg'),
        imageLink1: require('../assets/cloth1.jpg'),
        imageLink2: require('../assets/cloth1.jpg'),
        imageLink3: require('../assets/gadget1.jpg'),
        Description: '15500',
      },
      {
        id: 6,
         Name: 'Smart watch',
        Price: 50000,
        imageLink: require('../assets/gadget.jpg'),
        imageLink1:require('../assets/gadget.jpg'),
        imageLink2: require('../assets/gadget.jpg'),
        imageLink3: require('../assets/gadget.jpg'),
        Description: 'Fashion Mens Watches Luxury Big Dial Mens Sports Watch Stainlessr Display Quartz Wrist Watches Casual Military Men Watch Reloj Hombre',
    
       
      },
 
       {
        id: 7,
         Name: 'Infant Wears',
        Price: 5000,
        imageLink: require('../assets/infant.jpg'),
        imageLink1: require('../assets/cloth1.jpg'),
        imageLink2: require('../assets/cloth1.jpg'),
        imageLink3: require('../assets/infant.jpg'),
        Description: '',
      
       
      },
       {
        id: 8,
         Name: 'Jewelries',
        Price: 9500,
        imageLink: require('../assets/jewel1.jpg'),
        imageLink1: require('../assets/cloth1.jpg'),
        imageLink2: require('../assets/cloth1.jpg'),
        imageLink3: require('../assets/jewel1.jpg'),
        Description: '15500',
       
      },
      ]
  },

})