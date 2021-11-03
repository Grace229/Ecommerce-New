<template>
  <section v-if="this.$store.state.carts.cart.length < 1">
      <EmptyCart />
  </section>
   <section v-else>
       <CartItems />
   </section>
</template>

<script>
import EmptyCart from  './../components/EmptyCart.vue'
import CartItems from  './../components/CartItems.vue'
export default {
    components:{
EmptyCart,
CartItems
    },
  data(){
return{

}
  },
 computed: {
  },
 
}
</script>
<style scoped>

</style>