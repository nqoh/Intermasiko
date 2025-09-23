<template>
  <div>
      <div class=" relative bg-[url('/public/assets/images/pic%20view%20c.jpg')] h-90 bg-cover bg-center">
        <div class="pt-5 flex justify-between items-center"> 
        <div class="ml-8 p-2 ">
          <router-link :to="{name:'Home'}">
            <img src="/assets/images/inter2.gif" class="w-36" />
          </router-link>
         </div>

         <div class="sm:hidden flex items-center mr-3">
            <button type="button" class="mobile-menu-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </button>
          </div>
      

          <div class="hidden sm:inline-flex  font-serif navigation-menu">
             <ul  class="flex space-x-4 mr-2 text-sm ">
              <router-link :to="{name:'Home'}">
                <li class=" cursor-pointer py-1 px-3"> Home </li>
              </router-link>
              <router-link :to="{name:'Activities'}">
              <li class=" cursor-pointer py-1 px-3">Activities</li>
              </router-link>
              <router-link :to="{name:'Holidays'}">
              <li class=" cursor-pointer py-1 px-3">Holidays</li>
              </router-link>
              <router-link :to="{name:'Aboutus'}"> 
                <li class=" cursor-pointer py-1 px-3">Aboutus</li>
              </router-link>
              <router-link :to="{name:'Contactus'}">
                <li class=" cursor-pointer py-1 px-3">Contactus</li>
              </router-link>
            </ul>
          </div>

      <div class="flex flex-col absolute mt-50  left-1/2  w-full transform -translate-x-1/2 text-center ">
       <h1 class="m-auto font-bold font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px]">WELLCOME TO INTERMASIKO</h1>
       <p  class="whitespace-nowrap pt-1 text-white">Education & Culture </p>
      </div>

      </div>
    </div>
  </div>
 </template>
    
    <script setup lang="ts">
        import { onMounted } from 'vue'
        
        onMounted(() => {
            const btn = document.querySelector('button.mobile-menu-button');
            const menu = document.querySelector('.navigation-menu');
        
            if (btn) {
                btn.addEventListener('click', () => {
                    if (menu) {
                        menu.classList.toggle('hidden');
                    }
                });
            }
        
            const dropdownToggle = document.querySelector('.dropdown-toggle');
            const dropdownMenu = document.querySelector('.dropdown-menu');
        
            if (dropdownToggle) {
                dropdownToggle.addEventListener('click', () => {
                    if (dropdownMenu) {
                        dropdownMenu.classList.toggle('hidden');
                    }
                });
            }
        });
    </script>
    
    <style scoped>
     
    </style>