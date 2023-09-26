import axios from "axios";
import { defineStore } from "pinia";

export const useListStore = defineStore("ListStore",{
    state: () => ({
        load: false,
        lists: []
    }),
    actions: {
        async getAllLists(){
            try{
                this.load = true;

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data 

                this.load = false
                this.lists = data
            }catch(error){
                console.log(error.message)
            }
        },

        async addList(list){
            try{
                this.load = true

                const res = await axios.post('http://localhost:3000/List',list)
                const data = await res.data

                this.load = false
                this.lists.push(data)
            }catch(error){
                console.log(error.message)
            }
        },

        async getOneList(id){
            try{
                this.load = true

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
                const data = await res.data

                this.load = false
                this.lists = data
            }catch(error){
                console.log(error.message)
            }
        },

        async updateList(list){
            try{
                this.load = true

                const res = await axios.patch('http://localhost:3000/List/'+list.id,list.data)
                const data = await res.data

                this.load = false
                this.lists = this.lists.splice(this.lists[data.id],1,data)

            }catch(error){
                console.log(error.message)
            }
        },

        async deleteList(id){
            try{
                this.load = true

                await axios.delete('http://localhost:3000/List/'+id)

                this.load = false
                this.lists = this.lists.splice(id,1)
            }catch(error){
                console.log(error.message)
            }
        }
    }
})