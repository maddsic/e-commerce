<template>
  <nav id="navbar" class="bg-blue-800 text-white p-4">
    <div class="flex p-4 justify-between">
      <!-- The Nav links -->
      <div class="best">
        <span class="font-bold">BEST PRODUCTS</span>
      </div>
      <div class="productLinks">
        <ul class="flex font-bold cursor-pointer space-x-8 mr-40">
          <li class="mr-4">
            <router-link to="#appliance">APPLIANCES</router-link>
          </li>
          <li class="mr-4">
            <router-link to="/#computer">COMPUTERS</router-link>
          </li>
          <li class="mr-4">
            <router-link to="/#Headset">HEADSETS</router-link>
          </li>
          <li class="mr-4">
            <router-link to="/collection">MOBILE</router-link>
          </li>
          <li class="mr-4">
            <router-link to="/contacts">ACCESSORIES</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "ProductNav",
  };
</script>