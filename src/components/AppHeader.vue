<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Movie List App</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'movielist' }" class="nav-link">
          <i class="fas fa-home"></i>
          Homepage
        </router-link>
      </li>
    </div>
  </nav>
</template>
