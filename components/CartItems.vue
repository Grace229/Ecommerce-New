<template>
  <div class="bg-default">
      <div style="width:80%;" class="container mx-auto mr-20 h-auto">
          <h2 class="font-bold text-2xl" v-if="this.$store.state.carts.cart.length > 0">Cart ({{ totalQuantity }} items)</h2>

        <div class="w-full h-sm bg-white mx-16 mt-8  rounded-lg flex shadow-xl" v-for="cart in cartitems" :key="cart.id">
          <div class=" my-8 w-1/6" >
            <img class='bigpic' :src="cart.img" />
            </div>
            <div class=" my-8 w-2/6 content">
            <p class="mb-6 mr-16" ><b>{{ cart.name}}</b></p>
            <div class="flex"> 
 <svg xmlns="http://www.w3.org/2000/svg" class="trash h-5 w-5 text-secondary mt-4 " viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>  <nuxt-link to='' @click.native="remove(cart)" class="hover:text-secondary font-bold mt-4">Remove</nuxt-link>
</div>
            </div>
             <div class=" w-1/6 my-8 content">
            <p class="text-gray-darkest">quantity</p>
            <p> {{ cart.quantity }}</p>
           
             </div>
          
            <div class=" w-1/6 my-8 content mx-4">
            <p class="text-gray-darkest">price</p>
            <p> ₦ {{ cart.unitPrice }}</p>
           
             </div>
            <div class=" w-1/6 my-8 content">
              <p class="text-gray-darkest">total price</p>
              <p>  ₦ {{ cart.subTotal }}</p>
            
              </div>
               <div class=" w-1/6 my-8 content">
           <p class="text-gray-darkest">Seller's Name</p>
           <p> {{ cart.seller }}</p>   
           </div>
        </div>
        <div class="text-right mr-1" v-if="this.$store.state.carts.cart.length > 0">
  <h5 class="font-semi-bold text-2xl">Total:	₦ {{ totalPrice }} </h5>
 Shipping fees not included yet <br> 
 Customs Fee not included yet
  </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ["cart"],
  data(){
return{

}
  },
 computed: {
   
    cartitems () {
      return this.$store.state.carts.cart
    },
    quantity () {
        return this.$store.state.carts.cart.quantity
    },
    subTotal () {
       return this.$store.state.carts.cart.subTotal
    },
     
    totalQuantity () {
      return this.$store.getters["carts/getCartQty"]
    },
    // get cart total price
    totalPrice () {
      return this.$store.getters["carts/getTotalPrice"]
    },
  },
  methods:{
      remove (x) {
        let item = this.cartitems.filter((item) => {
            return item.id != x.id
        })
        this.$store.commit("carts/setRemoveItemCart", item)
        this.$router.go()
      },
  }
}
</script>
<style scoped>

.content {
  margin-left: 20px;
  margin-right: 10px;
  text-align: center;
  border-right: 1px solid gray;
}

.bigpic {
  width: 100px;
  height: 100px;
  margin-left: 20px;
}

.details {
  width: 100%;
}

.trash {
 width: 25px;
  height: 25px;
  
}


</style>
