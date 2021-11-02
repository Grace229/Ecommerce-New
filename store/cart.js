
const state = () => ({
    cart:[],
    cartQty:null,
  });
  const getters = {
   // calculate total quantity in cart
   getCartQty (state) {
    if (state.cart.length < 1) {
      return 0
    } else {
      let totalQuantity = []
             state.cart.forEach((item) => {
             totalQuantity.push(item.quantity)
      })
      let total = totalQuantity.reduce((a, b) => {
        return a + b
      })
      return total
    }
  },

  // calculate total price
  getTotalPrice (state) {
    if (state.cart.length < 1) {
      return 0
    } else {
      let totalPrice = []
             state.cart.forEach((item) => {
             totalPrice.push(item.subTotal)
      })
      let totalP = totalPrice.reduce((a, b) => {
        return a + b
      })
      return totalP
    }
  }
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
  