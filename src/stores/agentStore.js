import axios from "axios";
import { defineStore } from "pinia";

export const useAgentStore = defineStore("AgentStore",{
    state: () => ({
        load: false,
        agents: []
    }),
    actions: {
        async getAllAgent(){
            try{
                this.load = true;

                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                const data = await res.data;

                this.load = false;
                this.agents = data;
            }catch(error){
                console.log(error.message)
            }
        },

        async addAgent(agentdata) {
            try{
                this.load = true;

                const res = await axios.post('http://localhost:3000/Agent',agentdata);
                const data = await res.data;

                this.load = false;
                this.agents.push(data);
            }catch(error){
                console.log(error.message)
            }
        },


        async getOneAgent(id){
            try{
                this.load = true;
                

                const res = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
                const data = await res.data;

                this.load = false;
                this.agents = data;
            }catch(error){
                console.log(error.message)
            }
        },

        async updateAgent(agent){
            try{
                this.load = true

                const res = await axios.patch('http://localhost:3000/Agent/'+agent.id,agent.data)
                const data = await res.data

                this.load = false
                this.agents = this.agents.splice(this.agents[data.id],1,data);
                
            }catch(error){
                console.log(error.message)
            }
        },

        async deleteAgent(id){
            try{
                this.load = true

                await axios.delete('http://localhost:3000/Agent/'+id)

                this.load = false;
                this.agents = this.agents.splice(id,1)
            }catch(error){
                console.log(error.message)
            }
        }
    }
})