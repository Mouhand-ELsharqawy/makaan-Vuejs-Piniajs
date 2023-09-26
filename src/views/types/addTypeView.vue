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
                                              placeholder="Building Type"
                                              v-model="type">
                                              <label for="name">Building Type</label>
                                          </div>
                                      </div>

                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="text"
                                              class="form-control" 
                                              id="name" 
                                              placeholder="City"
                                              v-model="city">
                                              <label for="name">City</label>
                                          </div>
                                      </div>
                                   
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="number"
                                              class="form-control" 
                                              id="name" 
                                              placeholder="Building Number"
                                              v-model="number">
                                              <label for="name">Building Number</label>
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
import { useTypeStore } from '@/stores/typeStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
    setup(){
        const typeStore = useTypeStore()
        const router = useRouter()

        const type = ref('')
        const number = ref('')
        const city = ref('')

        const handleSubmit = () => {
            const data = {
                type: type,
                number: number,
                city:city
            }

            typeStore.addType(data)
            router.push('/type')
        }
        return {
            type, number, city, handleSubmit
        }
    }
}
</script>