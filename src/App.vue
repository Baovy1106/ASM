<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.min.css';


</script>
<template>
  <div class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <RouterLink to="/" class="navbar-brand text-info">FPT Polytechnic</RouterLink>
        <RouterLink to="/" class="nav-link mx-2">Home</RouterLink>
        <RouterLink to="/" class="nav-link mx-2">Pháp Luật</RouterLink>
        <RouterLink to="/" class="nav-link mx-2">Chính trị</RouterLink>
        <RouterLink to="/port" class="nav-link mx-2">Tạo bài viết</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink to="/user" class="nav-link">Người dùng</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">Login</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/dk" class="nav-link">Đăng ký</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <RouterView />

    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p class="mb-0">©Copyright by FPT Polytechnic</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 1200px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
nav{
  width: 1200px;
}
</style>
