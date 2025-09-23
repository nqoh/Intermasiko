import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import('../pages/Welcome.vue'),
        meta:{
          title:"Intermasiko"
        } as { title: string },
       
    },
    {
        path:"/holidays",
        name:"Holidays",
        meta:{
          title:'Holidays | Intermasiko'  
        } as { title: string },
        component:()=>import('../pages/Holidays.vue')
    },
    {
        path:"/activities",
        name:"Activities",
        meta:{
          title:'Activities | Intermasiko'  
        } as { title: string },
        component:()=>import('../pages/Activities.vue')
    },
    {
        path:"/aboutus",
        name:"Aboutus",
        meta:{
          title:'Aboutus | Intermasiko'  
        } as { title: string },
        component:()=>import('../pages/Aboutus.vue')
    }
    ,
    {
        path:"/contactus",
        name:"Contactus",
        meta:{
          title:'Contactus | Intermasiko'  
        } as { title: string },
        component:()=>import('../pages/Contactus.vue')
    }
]

const  router =  createRouter({
      routes,
      history: createWebHistory()
})

router.afterEach((to)=>{
     document.title = (to.meta as { title: string }).title
});

export default router;