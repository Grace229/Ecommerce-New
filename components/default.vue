<template>
  <div>
      <div class="hom mb-2">
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row' v-for="cart in cartitems" :key="cart.id">
  <div class='d-flex details'>
  <img class='bigpic' :src="cart.img" />
  <div class="ml-2">
  <p ><b>{{ cart.name}}</b></p>
   <div class='mt-n3 d-lg-none d-xl-none d-md-none d-sm-none'>
  ₦ {{ cart.subTotal }}
  </div>
  <div class="d-none d-lg-block d-xl-block d-md-block d-sm-block">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg>  <router-link to='' @click.native="save(cart)">MOVE TO SAVED ITEMS</router-link> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>  <nuxt-link to='' @click.native="remove(cart)">REMOVE</nuxt-link>
</div>
  </div>
  </div>
  <!-- image & name -->
  <div class='border-right pl-3 pr-3 pt-2 d-none d-lg-block d-xl-block d-md-block d-sm-block'>
  <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="quantity"
      :options="[{ text: '1', value: 1 }, { text: '2', value: 2 }, '3', '4', '5', '6', '7', '8', '9', '10']"
      :value="null"
      @change="changeQty(quantity)"
    ></b-form-select>
    </div>
  <div class='border-right pl-5 pr-5 pt-3 d-none d-lg-block d-xl-block d-md-block d-sm-block'>
  ₦ {{ cart.unitPrice }}
  </div>
  <div class='pl-5 pt-3 pl-5 d-none d-lg-block d-xl-block d-md-block d-sm-block'>
  ₦ {{ cart.subTotal }}
  </div>
  
 </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>