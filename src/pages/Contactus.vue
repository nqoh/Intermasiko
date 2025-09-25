<template>
    <div>
        <div class="my-2  rounded-md shadow-gray-400  ">
            <h1 class="title">
               Contactus     
            </h1>
                
   <form @submit.prevent="HandleSubmit" class="max-w-md mx-auto p-5">
      <FormInput name="Name" type="text" v-model="form.name"    :error="fromErrors.name"  />
      <FormInput name="Email" type="email" v-model="form.email" :error="fromErrors.email" />
     <div class="relative z-0 w-full mb-5 group">
      <textarea :class="[fromErrors.message !='' ? 'ErrorInput':'Input', 'peer']" required v-model.trim="form.message"  placeholder="" />
      <label :class="[fromErrors.message  !='' ? 'ErrorInputLabel':'InputLabel', 'peer']">Message</label>
      <small v-if="fromErrors.message" class="text-sm text-red-500">{{fromErrors.message}} </small>
     </div>
     <button type="submit" @click="HandleSubmit" class="btn">Submit</button>
    </form>
<!-- 
    <div class="text-gray-800 font-serif text-md space-y-2 ">
        <p>
    <b>Phone :</b> +45 51 49 13 40
   </p>

   <p>
    <b>Cell :</b> +27 (0)76 309 5390
   </p>

   <p>
    <b>Cell :</b> +27 (0)84 067 1465
   </p>

   <p>
    <b>Email :</b> erik.bilsted@gmail.com
   </p>

   <p>
    <b>Physical Address :</b> 160 Currie Road <br>
                                 Durban 4001<br>
                                 South Africa
   </p>


    </div> -->

    </div>
  </div>
</template>

<script setup lang="ts">
  import FormInput from '../components/app/FormInput.vue';
  import { reactive } from 'vue'


  const form = reactive({
     name:'',
     email:'',
     message:''
  })

  const fromErrors = reactive({
      name:'',
      email:'',
      message:''
  })

  const HandleSubmit = ()=>{
    fromErrors.email = ''
    fromErrors.name = ''
    fromErrors.message = ''
    if(form.name.length < 3){
        fromErrors.name = "Name must have atleast 3 charachers long";
    }
    if(form.email.indexOf('@') === -1 || form.email.lastIndexOf('.') === -1){
         fromErrors.email = "Invalid email address";
    }
    if(form.message.length < 10){
        fromErrors.message = "Messages must have atleast 10 characters long"
    }
  }

</script>

<style scoped>

</style>