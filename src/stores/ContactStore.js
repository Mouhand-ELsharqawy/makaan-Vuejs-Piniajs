import axios from "axios";
import { defineStore } from "pinia";

export const useContactStore = defineStore("ContactStore",{
    state: ()=> ({
        load: false,
        contacts:[]
    }),
    actions: {
        async contact(contactdata){
            try{
                this.load = true;

                const res = await axios.post('http://localhost:3000/Contact',contactdata);
                const data = await res.data;

                this.load = false;
                this.contacts.push(data);
            }catch(error){
                console.log(error.message)
            }
        }
    }
})