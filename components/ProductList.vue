<template>
  <div>
      <div class="container mx-auto h-auto grid grid-cols-4 gap-4 mt-12">
  <div class=" h-lg mb-20" v-for="item in items" :key="item.id">
    <div class=" bg-secondary w-full" style="height: 250px; width: 300px; display: flex; align-items: center;"> 
    <img :src="item.imageLink" alt="" width="200px" height="250px" class="ml-8" srcset="">
    </div>
    <div class="flex w-full my-2">
 <p class="w-4/6 text-2xl font-medium"> {{item.Name}} </p>
 <p class="w-2/6  text-2xl font-medium">&#8358;{{item.Price}} </p>
    </div>
    <div class="flex w-full my-2">
      <p class="w-4/6 text-gray-darkest 2xl">Seller's Name</p>
 <p class="w-2/6 text-gray-dark font-normal 2xl"> {{item.Seller}} fffff </p>
    </div>
    <div class="w-12/12 flex items-center">
     <button class="bg-primary text-secondary w-full rounded-md py-2">
      
          <span class="text-2xl">Add To Cart</span>
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
    allArticles: [],
    articleData: [],
    approveModal: false,
    filter: 0,
    selectedArticle: {},
  }),
}
</script>

<style>
h1{
  align-items: center;
}
</style>