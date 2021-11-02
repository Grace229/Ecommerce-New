<template>
  <div>
      <div class="flex justify-center">
<svg xmlns="http://www.w3.org/2000/svg" class="h-lg w-lg text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
</div>
  <h4 class="text-center">Your cart is empty!</h4>
  <p class="text-center">Already have an account? <router-link to='/login'>login</router-link> to see the items in your cart.</p>
   <h4 class="text-center ml-3"> <b-button to="/" class="add" style="float: center">START SHOPPING</b-button></h4>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>