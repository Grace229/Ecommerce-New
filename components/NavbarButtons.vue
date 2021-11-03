<template>
   <section> 
  <div class="navbar-buttons flex justify-around mt-8">
 
      <svg xmlns="http://www.w3.org/2000/svg" class="button text-default hover:text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
 <nuxt-link to="/cart">
    <div class="flex"
  >
  <svg xmlns="http://www.w3.org/2000/svg" class="button text-default hover:text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
<p class="text-default mb-6 font-bold hover:text-secondary">{{cartQty}}  </p>
</div>
  </nuxt-link>
 <button  @click="push" class="bg-default px-2 rounded-lg text-primary hover:text-primary hover:bg-secondary">LOGOUT</button>  
 
  </div>

  </section>
 
</template>

<script>
export default {
   components: {

  },
data(){
  return{
   
  }
},
computed: {
    cartQty () {
      return this.$store.getters["carts/getCartQty"];
    }
  },
  methods: {
     push() {
      this.$router.push('/');
    },
  }
}
</script>

<style scoped>
.button{
  width: 35px;
  height: 35px;
}
.navbar-buttons{
  height: 50px;
}
</style>