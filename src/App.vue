<template>
  <div class="app-container">
    <header class="header">
      <h1 class="app-title">📝 Vue 3 Blog App</h1>

      <nav class="nav-bar">
        <router-link to="/">🏠 Home</router-link>
        <router-link to="/about">ℹ️ About</router-link>
        <router-link to="/posts">📰 Posts</router-link>
        <router-link to="/posts/food">🍔 Food</router-link>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>

    <footer class="footer">
      <p>© 2025 Prabhjot Singh — Vue Blog</p>
    </footer>
  </div>
</template>

<script setup>
// No dark mode
</script>

<style scoped>
/* App Layout */
.app-container {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9fafc;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background-color: #ffffff;
  padding: 20px 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-bottom: 3px solid #3498db;
}

.app-title {
  font-size: 2.2rem;
  color: #3498db;
  margin-bottom: 10px;
}

/* Nav Bar */
.nav-bar {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.nav-bar a {
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 14px;
  border-radius: 6px;
  background-color: #ecf0f1;
  color: #2c3e50;
  transition: background-color 0.3s ease;
}

.nav-bar a:hover {
  background-color: #d0e6f7;
}

.nav-bar a.router-link-exact-active {
  background-color: #3498db;
  color: white;
}

/* Main Content */
.content {
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Footer */
.footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 15px;
  font-size: 0.9rem;
  color: #777;
  border-top: 1px solid #ddd;
}
</style>
