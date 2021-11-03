<template>
<section >
        <div class="bg-primary w-full h-24">
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-3">
    <img src="./../assets/logo.png" width="80px" height="80px" class="ml-12 mt-4" alt="" srcset="">
  </div>
  <div><NavbarButtons :handleShow="showCart" :handleHide="hideCart"  /></div>
</div>
      </div>
 
</section>

  
</template>

<script>
import NavbarButtons from "./NavbarButtons.vue"
import CartItems from './../components/CartItems.vue'
export default {
components:{
  NavbarButtons,
  CartItems
},
data(){
  return{
     cart: false,
  }
},
methods:{
  showCart(){
    this.cart = true
    console.log("hello")
  },
   hideCart(){
    this.cart = false
  }
}
}
</script>

<style>

</style>