<template>
  <div class="relative z-0 w-full mb-5 group">
    <input type="{{ props.type }}" :class="[props.error !='' ? 'ErrorInput':'Input', 'peer']" placeholder=" "
     required :ref="props.name"  @keyup="$emit('update:modelValue',($event.target  as HTMLInputElement).value.trim())"  />
    <label :class="[props.error !='' ? 'ErrorInputLabel':'InputLabel', 'peer']">{{ props.name }}</label>
    <small v-if="error" class="text-sm text-red-500">{{error}} </small>
  </div>
</template>

<script setup lang="ts">
   import { defineProps } from 'vue'
   
   const props =defineProps({
     name:{
        type:String,
        required:true,
     },

     type:{
        type:String,
        required:true,
     },

     error:{
        type:String,
        default:''
     },
    
   })
</script>

<style scoped>

</style>