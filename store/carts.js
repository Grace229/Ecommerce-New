
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
    setCart(state, item) {
      state.cart.unshift(item)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    // set cart on reload
    setCartReload(state, item) {
      state.cart = item
    },
    // set cart after removing item
    setRemoveItemCart(state, item) {
      state.cart = item
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
     // set saved product
     setSavedProducts(state, item) {
      state.savedProducts = item
    },
    // set success message
    setSuccessAlert (state, item) {
      state.successAlertMessage = item.successMessage
      state.showSuccessAlert = item.showSuccess
    },
    // set error message
    setErrorAlert (state, item) {
      state.errorAlertMessage = item.errorMessage
      state.showErrrorAlert = item.showError
    },

  };
  const actions = {};
  
  export default {
      namespaced: true,
      state,
      getters,
      mutations,
      actions
  };
 
 