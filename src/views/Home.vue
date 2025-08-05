<template>
  <div class="home-container">
    <h1 class="home-title">Welcome to the Vue 3 Blog App ✨</h1>
    <p class="home-subtitle">Create, browse, and read blog posts with ease.</p>

    <router-link class="get-started-btn" to="/posts">🚀 Get Started</router-link>

    <div class="features">
      <div class="feature-card">
        <h2>📰 View Posts</h2>
        <p>Browse all the latest blog posts shared by the community.</p>
        <router-link to="/posts" class="btn">View Posts</router-link>
      </div>

      <div class="feature-card">
        <h2>👨‍🍳 Food Category</h2>
        <p>Explore food-related blog posts in one place.</p>
        <router-link to="/posts/food" class="btn">View Food Posts</router-link>
      </div>

      <div class="feature-card">
        <h2>ℹ️ About</h2>
        <p>Learn more about this application and its creators.</p>
        <router-link to="/about" class="btn">About Us</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(to right, #e0f7fa, #fff);
  min-height: 100vh;
}

.home-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.home-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #34495e;
}

.get-started-btn {
  display: inline-block;
  margin-bottom: 50px;
  padding: 10px 20px;
  background: #2ecc71;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.3s ease;
}

.get-started-btn:hover {
  background: #27ae60;
}

.features {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  max-width: 300px;
  flex: 1;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h2 {
  color: #2980b9;
  margin-bottom: 10px;
}

.feature-card p {
  color: #555;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  background: #3498db;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #2980b9;
}
</style>
