<template>
  <div class="text-4xl font-bold items-center">
    <div class="flex items-center justify-between p-6">
      <div class="p-14" id="estore">
        <h1>E-STOR<span class="text-blue-800">E</span></h1>
      </div>
      <!-- SearchBox goes here -->
      <!-- <div class="search-box">
        <input
          class="search-input"
          type="text"
          name=""
          placeholder="Search..."
        />
        <a href="#" class="search-btn">
          <i class="fas fa-search"></i>
        </a>
      </div> -->

      <!-- shopping cart and free delivery goes here -->
      <div class="flex justify-between">
        <div class="cart mr-10">
          <small
            ><i class="fas fa-shopping-cart"
              ><span class="ml-4 text-lg"> Shop with us</span></i
            ></small
          >
        </div>
        <div class="delivery">
          <small
            ><i class="fas fa-truck"
              ><span class="ml-4 text-lg"> Free Delivery</span></i
            ></small
          >
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
  export default {
    name: "Estore",
  };
</script>

<style scoped>
  #estore {
    font-family: "Merriweather", serif;
  }

  .search-box {
    background: black;
    height: 50px;
    border-radius: 50px;
    padding: 10px;
    position: absolute;
    /* top: 50%; */
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
  }

  .search-btn {
    color: white;
    float: right;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 2s;
  }

  .fa-search {
    background: black;
    font-size: 24px;
  }

  .search-input {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 20px;
    transition: 0.4s;
    line-height: 50px;
    width: 0;
  }

  .search-box:hover > .search-input {
    width: 250px;
    padding: 0 7px;
  }
</style>