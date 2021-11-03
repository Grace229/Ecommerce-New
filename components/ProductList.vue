<template>
  <div>  
      <div class="container mx-auto h-auto grid grid-cols-4 gap-6 mt-12">
  <div class=" h-lg mb-20" v-for="item in items" :key="item.id">
    <div class=" bg-default w-full"> 
    <img :src="item.imageLink" alt="" width="200px" height="250px" class="ml-8" srcset="">
    </div>
    <div class="flex w-full my-2">
 <p class="w-4/6 text-2xl font-bold"> {{item.Name}} </p>
 <p class="w-2/6  text-2xl font-bold">&#8358;{{item.Price}} </p>
    </div>
    <div class="flex w-full my-2">
      <p class="w-4/6 text-gray-darkest 2xl">Seller's Name</p>
 <p class="w-2/6 text-gray-dark font-normal 2xl"> {{item.Seller}} </p>
    </div>
    
    <div class="w-12/12 flex items-center">
     <button class="bg-primary text-default hover:bg-secondary hover:text-primary w-full rounded-md py-2 flex" @click="addtocart(item)">
        <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px; height:30px;" class="hover:text-primary ml-3 button text-default hover:text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
          <span class="text-2xl ml-10">Add To Cart</span>
        </button>
  </div>
  </div>
 
</div>
  </div>
</template>

<script>
export default {
  props: ['items'],
 data: () => ({
  }),
   computed:{
     cartitem () {
      return this.$store.state.carts.cart
    }
    
  },
  methods:{
 addtocart (x) {
      let itemExist = false;
      let quantity = null

      //check if item exist
      this.$store.state.carts.cart.forEach((item) => {
        if(item.id === x.id) {
          itemExist = true
          quantity = item.quantity + 1
        }
      })
      if(itemExist) { 

        // remove item if it exist
      let item1 = this.$store.state.carts.cart.filter((item) => {
            return item.id != x.id
        })
      this.$store.commit("carts/setRemoveItemCart", item1)

      // set removed item with its new quantity
      let item = {
        id: x.id,
        img: x.imageLink,
        name: x.Name,
        quantity: quantity,
        unitPrice: x.Price,
        seller: x.Seller,
        subTotal: parseInt(x.Price) * quantity
      }
      this.$store.commit("carts/setCart", item)
      } else {
      let item = {
        id: x.id,
        img: x.imageLink,
        name: x.Name,
        quantity: 1,
        unitPrice: x.Price,
        seller: x.Seller,
        subTotal: x.Price
      }
      this.$store.commit("carts/setCart", item)

    }
  }
  }
}
</script>

<style>
h1{
  align-items: center;
}
</style>

