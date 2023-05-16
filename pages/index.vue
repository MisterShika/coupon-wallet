<template>
  <div>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto+Condensed&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">

    <div class="h-screen flex items-center justify-center text-center bg-yellow-100">
      <div class="bg-white rounded-2xl border border-gray-200 p-10">
          <h1 class="text-7xl p-3">Coupon Wallet</h1>
          <!-- Have to use client-only because Vue is giving some sort of error only for Fontawesome icons -->
          <client-only><span class="fa-stack fa-5x">
            <font-awesome-icon icon="certificate" class="fa-solid fa-certificate fa-stack-2x custom-spin text-yellow-300" />
            <font-awesome-icon icon="wallet" class="fa-solid fa-wallet fa-stack-1x text-red-600" />
          </span></client-only>
          <login />
      </div>
    </div>
    
  </div>
</template>


<script>
  export default {
    name: 'index'
  }
</script>