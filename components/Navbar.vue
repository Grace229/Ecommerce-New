<template>
  <div>
      <div class="bg-primary w-full h-24">
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-3">
    <img src="./../assets/logo.png" width="80px" height="80px" class="ml-12 mt-4" alt="" srcset="">
  </div>
  <div><NavbarButtons /></div>
</div>
      </div>
  </div>
</template>

<script>
import NavbarButtons from "./NavbarButtons.vue"
export default {
components:{
  NavbarButtons
}
}
</script>

<style>

</style>