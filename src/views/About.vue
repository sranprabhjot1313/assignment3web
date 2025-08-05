<template>
  <div class="about-container">
    <h1>📘 About This Blog App</h1>

    <p>
      Welcome to this Vue 3 Blog Application — a simple yet functional blog project created as part of a course assignment. It highlights core frontend development skills using the Vue framework.
    </p>

    <h2>✨ What You Can Do</h2>
    <ul>
      <li>📄 Browse blog posts stored locally</li>
      <li>🔍 Search posts by title or category</li>
      <li>📝 Create new posts during the session</li>
      <li>👁️‍🗨️ View post details in a stylish popup</li>
      <li>🗂️ Navigate smoothly across pages: Home, About, Posts, Food</li>
    </ul>

    <h2>🎯 Skills Demonstrated</h2>
    <p>
      This app demonstrates key Vue 3 concepts such as reactive state, modular components, dynamic routing, computed properties, event handling, and lifecycle hooks.
    </p>

    <p class="credit">👨‍💻 Crafted with care by <strong>Prabhjot Singh</strong></p>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
  background: linear-gradient(to bottom right, #ffffff, #f0f4f8);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

h1 {
  font-size: 2.3rem;
  margin-bottom: 20px;
  color: #2d3748;
  text-align: center;
}

h2 {
  font-size: 1.6rem;
  margin-top: 30px;
  margin-bottom: 15px;
  color: #1f2937;
}

ul {
  margin-left: 20px;
  padding-left: 15px;
}

li {
  margin-bottom: 10px;
  font-size: 16px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.credit {
  margin-top: 40px;
  font-weight: bold;
  font-size: 17px;
  color: #1e40af;
  text-align: center;
}
</style>
