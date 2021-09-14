<template>
  <header id="header" class="bg-blue-800 text-white">
    <!-- The Top Nav -->
    <div class="flex justify-between p-4">
      <div class="text-2xl font-bold cursor-pointer">
        <h3><router-link to="/">Welcome To Agie's Store</router-link></h3>
      </div>
      
      <!-- The dropdown -->
        <div class="dropdown mx-auto mr-12">
          <p class="dropbtn text-white">My Account </p>
          <div class="dropdown-content">
            <a href="#">my profile</a>
            <a href="#">Settings</a>
            <a href="#">Sign out</a>
          </div>
        </div>

  <!-- The Icons -->
      <div class="ml-40">
        <ul class="flex mr-11 cursor-pointer">
          <li class="mr-3"><i class="fab fa-twitter"></i></li>
          <li class="mr-3"><i class="fab fa-facebook "></i></li>
          <li><i class="fab fa-pinterest-p "></i></li>
        </ul>
      </div> 
    </div>   
  </header>
</template>



<script>
export default {
  name: "Header",
  // props: ['msg']

}
</script>

  <style scoped>
        #header {
            font-family: 'Montserrat', sans-serif;
        }

        .dropbtn {
            background-color: none;
            color: white;
            padding: 5px;
            /* font-size: 16px; */
            border: none;
            cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  /* background-color: #3e8e41; */
}
    </style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
