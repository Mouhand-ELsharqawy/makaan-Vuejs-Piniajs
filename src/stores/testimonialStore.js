import axios from "axios";
import { defineStore } from "pinia";

export const useTestimonialStore = defineStore("TestimonialStore",{
    state: () => ({
        load: false,
        tests: []
    }),
    actions: {
        async getAllTestimonials(){
            try{
                this.load = true;

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data

                this.load = false
                this.tests = data
            }catch(error){
                console.log(error.message)   
            }
        }
    }
})