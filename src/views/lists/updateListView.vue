<template>
    <div class="container-xxl py-5">
              <div class="container">
                  
                  <div class="row g-4">
                      
                      <div class="col-md-6">
                          <div class="wow fadeInUp" data-wow-delay="0.5s">
                              <form @submit.prevent="handleSubmit">
                                  
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="text"
                                              class="form-control" 
                                              id="name" 
                                              placeholder="For Sell or Rent"
                                              v-model="forr">
                                              <label for="name">  For Sell or Rent </label>
                                          </div>
                                      </div>

                                      
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="text"
                                              class="form-control" 
                                              id="name" 
                                              placeholder="Size"
                                              v-model="size">
                                              <label for="name">Size </label>
                                          </div>
                                      </div>
                                      
                                      
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="text"
                                              class="form-control" 
                                              id="name" 
                                              placeholder=" Building Type"
                                              v-model="address">
                                              <label for="name">Building Type </label>
                                          </div>
                                      </div>

                                      
                                      <div class="col-md-6">
                                          <div class="form-floating">
                                              <input 
                                              type="text"
                                              class="form-control" 
                                              id="name" 
                                              placeholder="Address"
                                              v-model="address">
                                              <label for="name">Address</label>
                                          </div>
                                      </div>

                                      <div class="col-12">
                                          <div class="form-floating">
                                              <input 
                                              type="number" 
                                              class="form-control"  
                                              placeholder="Number of Beds"
                                              v-model="numberofbeds">
                                              <label for="subject"> Number of Beds </label>
                                          </div>
                                      </div>

                                      <div class="col-12">
                                          <div class="form-floating">
                                              <input 
                                              type="number" 
                                              class="form-control"  
                                              placeholder="Number of Pathrooms"
                                              v-model="numberofpaths">
                                              <label for="subject"> Number of Pathrooms </label>
                                          </div>
                                      </div>
                                      
                                      <div class="col-12">
                                          <div class="form-floating">
                                              <input 
                                              type="number" 
                                              class="form-control" 
                                              id="subject" 
                                              placeholder="Price"
                                              v-model="price">
                                              <label for="subject">Price</label>
                                          </div>
                                      </div>
                                      
                                      <div class="col-12">
                                          <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                      </div>
                                  
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  </template>
  
<script>
import { useListStore } from '@/stores/listStore';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
    export default{
        setup(){
            const listStore = useListStore()
            const router = useRouter();

            const route = useRoute()
            const id = route.query.id

            const forr = ref('')
            const size = ref('')
            const type = ref('')
            const address = ref('')
            const numberofbeds = ref('')
            const numberofpaths = ref('')
            const price = ref('')

            const handleSubmit = () => {

                const data = {
                    forr: forr,
                    size: size,
                    type: type,
                    address: address,
                    numberofbeds: numberofbeds,
                    numberofpaths: numberofpaths,
                    price: price
                }

                const listdata = {
                    id: id,
                    data: data
                }

                listStore.updateList(listdata)
                router.push('/list')
            }

            return {
                forr, size, type, address, numberofbeds, numberofpaths, price, handleSubmit
            }
        }
    }
</script>