import axios from "axios";
import { defineStore } from "pinia";

export const useTypeStore = defineStore("TypeStore",{
    state:() =>({
        load: false,
        types: []
    }),
    actions: {
        async getAllTypes(){
            try{
                this.load = true

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data

                this.load = false
                this.types = data
            }catch(error){
                console.log(error.message)
            }
        },

        async addType(type){
            try{
                this.load = true
                
                const res = await axios.post('http://localhost:3000/Type',type)
                const data = await res.data

                this.load = false
                this.types.push(data)
            }catch(error){
                console.log(error.message)
            }
        },

        async getOneType(id){
            try{
                this.load = true

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
                const data = await res.data

                this.load = false
                this.types = data
            }catch(error){
                console.log(error.message)
            }
        },

        async updateType(type){
            try{
                this.load = true

                const res = await axios.patch('http://localhost:3000/Type/'+type.id,type.data)
                const data = await res.data

                this.load = false
                this.types = this.types.splice(this.types[data.id],1,data)
            }catch(error){
                console.log(error.message)
            }
        },

        async deleteType(id){
            try{
                this.load = true

                await axios.delete('http://localhost:3000/Type/'+id)

                this.load = false
                this.types = this.types.splice(id,1)
            }catch(error){
                console.log(error.message)
            }
        }
    }
})