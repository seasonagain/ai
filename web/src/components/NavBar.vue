<template>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Bot Playground</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/pk/">对战</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/record/">对局列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ranklist/">排行榜</router-link>
        </li>
      </ul>
      
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Season
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><router-link class="dropdown-item" to="/user/bot/">我的bot</router-link></li>
            <li><a class="dropdown-item" href="#">退出</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

</script>

<style scoped>
/* 自定义 router-link 的活动状态样式 */
.navbar-nav .nav-link.router-link-active {
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
}

.dropdown-item.router-link-active {
  background-color: var(--bs-dropdown-link-active-bg);
  color: var(--bs-dropdown-link-active-color);
}
</style>