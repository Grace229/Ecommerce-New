<template>
 <div> 
<Navbar />
<ProductList :items="products" />
<CartItems />
 </div>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import CartItems from './../components/CartItems.vue'
import ProductList from './../components/ProductList.vue'
export default {
components:{
  Navbar,
   ProductList,
   CartItems,
},
data(){
  return{

  }
},
computed:{
    products() {
      return this.$store.getters["product/GetProducts"];
    },
}
}
</script>
