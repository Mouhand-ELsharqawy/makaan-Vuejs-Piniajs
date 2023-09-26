<template>
   <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                    <h1 class="mb-3">Property Types</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div class="row g-4" >
                        <div class="textprimary" v-if="load">
                            loading...
                        </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" v-for="typ in types" :key= "typ.id"> 
                        <a class="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div class="rounded p-4">
                                <div class="icon mb-3">
                                    <img class="img-fluid" src="../assets/img/icon-apartment.png" alt="Icon">
                                </div>
                                <h6> {{ typ.title }} </h6>
                                <span> {{ typ.body }} </span>
                                 <router-link 
                            :to="{ name: 'SingleList', query: { id: typ.id } }"
                            class="btn btn-primary py-3 px-4 me-2"> Go </router-link>
                            </div>
                        </a>
                    </div>
                   
                </div>
            </div>
        </div>
</template>

<script>
import { useTypeStore } from '@/stores/typeStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
export default {
    setup(){
        const typeStore = useTypeStore()
        const { load, types } = storeToRefs(typeStore)
        onMounted(() => typeStore.getAllTypes())

        return {
            load, types
        }
    }
}
</script>

<style>

</style>