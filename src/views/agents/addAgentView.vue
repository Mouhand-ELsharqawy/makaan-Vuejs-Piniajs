<template>
    <div class="container-xxl py-5">
              <div class="container">
                     
                      <div class="col-md-6">
                          <div class="wow fadeInUp" data-wow-delay="0.5s">
                              
                              <form @submit.prevent="handleSubmit">
                                  <div class="row g-3">
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="text"
                                              class="form-control" 
                                              id="name" 
                                              placeholder="Agent FirstName"
                                              v-model="firstname">
                                              <label for="name">Agent FirstName</label>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="text"
                                              class="form-control" 
                                              id="name" 
                                              placeholder="Agent LastName"
                                              v-model="lastname">
                                              <label for="name">Agent LastName</label>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="text"
                                              class="form-control" 
                                              id="name" 
                                              placeholder="Agent Phone"
                                              v-model="phone">
                                              <label for="name">Agent Phone</label>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="text"
                                              class="form-control" 
                                              id="name" 
                                              placeholder="Agent TelePhone"
                                              v-model="telephone">
                                              <label for="name">Agent TelePhone</label>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="email" 
                                              class="form-control" 
                                              id="email" 
                                              placeholder="Agent Email"
                                              v-model="email">
                                              <label for="email">Agent Email</label>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="email" 
                                              class="form-control" 
                                              id="email" 
                                              placeholder="Agent Facebook"
                                              v-model="facebook">
                                              <label for="email">Agent Facebook</label>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="form-floating">
                                              <input 
                                              type="text" 
                                              class="form-control" 
                                              id="subject" 
                                              placeholder="Order"
                                              v-model="order">
                                              <label for="subject">Order</label>
                                          </div>
                                      </div>


                                      <div class="col-12">
                                          <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          
  </template>

<script>
import { useAgentStore } from '@/stores/agentStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
    setup(){
        const agentStore = useAgentStore()
        const router = useRouter()


        const firstname = ref('')
        const lastname = ref('')
        const phone = ref('')
        const telephone = ref('')
        const email = ref('')
        const facebook = ref('')
        const order = ref('')
        const handleSubmit = () => {
            
            const data = {
                firstname: firstname,
                lastname: lastname,
                phone: phone,
                telephone: telephone,
                email: email,
                facebook: facebook,
                order: order
            }
            agentStore.addAgent(data)
            router.push('/agent')
        }

        return {
            firstname, lastname, phone, telephone, email, facebook, order, handleSubmit
        }
    }
}
</script>
