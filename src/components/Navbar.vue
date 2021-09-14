// the main navbar
<template>    
        <nav id="navbar" class="bg-blue-800 text-white justify-between">
            <div class="flex items-center justify-between p-4">
                <div class="font-bold cursor-pointer">
                    <p><router-link to="/"><i class="fas fa-home fa-3x text-black"></i></router-link></p>
                </div>

                <!-- The Nav links -->
            <div>
                <ul class="flex mr-8 space-4 font-bold cursor-pointer">
                    <li class="mr-4">
                        <select name="" id="">
                        <option value="">OUR SERVICES</option>
                        <option value="">TRADING</option>
                        <option value="">FREE DELIVERY</option>
                        </select>
                    </li>
                    <li class="mr-4"><router-link to="/about">ABOUT US</router-link></li>
                    <li class="mr-4"><router-link to="/shop">SHOP</router-link></li>
                    <li class="mr-4"><router-link to="/collection">COLLECTIONS</router-link></li>
                    <li class="mr-4"><router-link to="/contacts">CONTACTS</router-link></li>
                </ul>
            </div> 

            <div class="flex items-center justify-between ">
                <p class="mr-4"><i class="fas fa-phone-volume fa-2x text-black"></i></p>
                <a href="tel:+2213825407" class="mx-auto">+2213825407</a>
            </div>
            </div>
        </nav>
</template>

    <script>
    export default {
        name: "Navbar",
    }
    </script>


    <style scoped>
        #navbar {
            font-family: 'Montserrat', sans-serif;
        }
    </style>