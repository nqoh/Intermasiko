<template>
  <div class="my-2  rounded-md shadow-gray-400 ">
    <h1 class="title">HOLIDAY ACCOMONDATION</h1>
      <div class="w-full p-5 md:columns-1 sm:columns-1 lg:columns-3" v-for="item in items" :key="item.id">
        <div class="">        
           <img :src="`/assets/images/${item.image1}`" />
            </div>
              <div>
                <h1 class=" flex justify-center mt-5 font-bold font-serif uppercase sm:text-4xl md:text-4xl lg:text-xl xl:text-[25px]">
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

         <div class="flex justify-center mt-2 text-gray-700 ">
        <p class="w-[80%] text-center">
             We rent out a flat 5 Raleigh Lodge, 160 Currie Road, Durban, South Africa on a daily or weekly basis.
             The flat is newly renovated and situated in Berea with a splendid view of the city, the harbor and the Indian Ocean.
             The size is one hundred square meters in open plan with lounge, dining area, kitchen with all facilities including dishwasher,
             toilet with washing machine, bathroom with shower and two large bedrooms with two beds each, working desk and wardrobes.
          </p>
        </div>
    

    </div>
</template>

<script setup lang="ts">
    import { reactive  } from 'vue';
     const items = reactive([
        {
            id:1,
            title:'The building.',
            description:['The building was originally built in the beginning of 1900 as an English twin house.',
                     'It has been changed over the years and now consists of five flats.Flats number 1 and 2 have',
                     'individual private gardens and there is a large outdoor space for the use of the remaining flats.',
                    ' In that open area you will also find washing lines and dustbins.'],
            image1:'pic_b.JPG',
            image2:'pic_c.JPG'      
        },
        {
            id:2,
            title:'Entrance and parking.',
            description:['The main entrance to flat number 5 is from Currie Road and you have access to a garage',
                         'which you will find in the small street behind the building. From the garage you will enter',
                         'Currie Road through the garden area.'],
            image1:'pic_a.JPG',
            image2:'pic_e.JPG'               
        },
        {
            id:3,
            title:'Technical installations.',
            description:['There is a television with a premium DSTV connection there is also wireless internet connection available.'],
            image1:'pic_d.JPG',
            image2:'pic_view_a.JPG'
        }
     ])
</script>

<style scoped>

</style>