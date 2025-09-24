<template>
 <div class="my-2  rounded-md shadow-gray-400 ">

   <h1 class="title">
    Activities For Student
    </h1>

       
   <small class="subtitle">
    There are three categories of students.
   </small>

     <div class="w-full p-5 md:columns-1 sm:columns-1 lg:columns-3" v-for="item in items" :key="item.id">
             <div class="">
               
             <img :src="`/assets/images/${item.image1}`" />
             </div>

             <div>
                 <h1 class=" flex justify-center font-bold font-serif uppercase sm:text-4xl md:text-4xl lg:text-xl xl:text-[17px]">
                     {{item.title}}
                 </h1>
                  <p class="mt-5 text-lg text-center text-gray-700">
                    {{item.description.join('')}}
                  </p>
             </div>

             <div>
                 <img :src="`/assets/images/${item.image2}`" />
             </div>
       </div>


       <div class="flex  justify-center ">
       
     </div>
     <small class="flex justify-center uppercase underline mt-2  font-serif text-sm sm:text-sm md:text-sm lg:text-xl xl:text-[15px]">
        Practical issues
    </small>

      <div class="flex justify-center mt-2 text-gray-700 ">
     <p class="w-[50%] text-center">
        We find suitable accommodation, transport and leisure activities for the students during their stay.
        We also make sure that they know about security and general etiquette in South Africa during their stay.
       </p>
     </div>
 

 </div>
</template>

<script setup lang="ts">
 import { reactive  } from 'vue';
  const items = reactive([
     {
         id:1,
         title:'1. Students practice.',
         description:['These students participate to add an extra dimension to their practical experience.',
                      'The master degree project is the students’ further education following after the bachelor',
                      'degree. The students must choose a topic that allows them to compare curriculum and ways of',
                      'teaching at home and in South Africa. hey must show that they are able to understand the South African',
                      'way of teaching that incorporates tradition, culture and possibilities in South Africa.'],
         image1:'pic Open Air.JPG',
         image2:'pic Ngabayena b.JPG'      
     },
     {
         id:2,
         title:'2. Students writing master degree',
         description:['These students observe, prepare, teach and evaluate their lessons under',
                      'our supervision and under the host schools supervision. The schools provide',
                      'the students with a diploma for their personal files.'],
         image1:'pic Glenwood Junior.JPG',
         image2:'pic Penzance Primary.JPG'               
     },
     {
         id:3,
         title:'3. Students study at University of KZN.',
         description:['We cooperate with the university and we are able to guide them in their study in South Africa.'],
         image1:'pic Ngabayena a.JPG',
         image2:'IMG_5084.JPG'
     }
  ])
</script>

<style scoped>

</style>