<template>
  <div class="container-fluid nav-bar bg-transparent">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <router-link to="index.html" class="navbar-brand d-flex align-items-center text-center">
                    <div class="icon p-2 me-2">
                        <img class="img-fluid" src="./assets/img/icon-deal.png" alt="Icon" style="width: 30px; height: 30px;">
                    </div>
                    <h1 class="m-0 textprimary">Makaan</h1>
                </router-link>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <router-link to="/" class="nav-item nav-link">Home</router-link>
                        <router-link to="/about" class="nav-item nav-link">About</router-link>
                        <div class="nav-item dropdown">
                            <router-link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</router-link>
                            <div class="dropdown-menu rounded-0 m-0">
                                <router-link to="/list" class="dropdown-item">Property List</router-link>
                                <router-link to="/type" class="dropdown-item">Property Type</router-link>
                                <router-link to="/agent" class="dropdown-item">Property Agent</router-link>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <router-link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</router-link>
                            <div class="dropdown-menu rounded-0 m-0">
                                <router-link to="/testimonial" class="dropdown-item">Testimonial</router-link>
                            </div>
                        </div>
                        <router-link to="/contact" class="nav-item nav-link">Contact</router-link>
                    </div>
                    <router-link to="" class="btn btn-primary px-3 d-none d-lg-flex">Add Property</router-link>
                </div>
            </nav>
        </div>
        <header-component />
         <router-view/>
  <footer-component />
</template>
<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style>
@import url('./assets/css/style.css');
</style>
