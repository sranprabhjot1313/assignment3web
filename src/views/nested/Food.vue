<script setup>
import { usePostViewModel } from '@/viewmodels/post.viewmodel'
import Modal from '@/components/Modal.vue'
import { ref, computed } from 'vue'

const {
  posts,
  showModal,
  selectedPost
} = usePostViewModel()

// Only show posts with category "Food"
const foodPosts = computed(() =>
  posts.value.filter(post =>
    post.category.toLowerCase() === 'food'
  )
)

function openModal(post) {
  selectedPost.value = post
  showModal.value = true
}
</script>

<template>
  <div class="container">
    <h1>🍽️ Food Posts</h1>
    <p class="subtitle">Delicious reads curated just for food lovers.</p>

    <div v-if="foodPosts.length === 0" class="empty">
      <p>😔 No food posts available yet. Come back hungry later!</p>
    </div>

    <div
      v-for="post in foodPosts"
      :key="post.id"
      class="post-card"
    >
      <h3>{{ post.title }}</h3>
      <p><strong>Category:</strong> {{ post.category }}</p>
      <p>{{ post.content }}</p>
      <p class="meta">👨‍🍳 Author: {{ post.author }} | 🗓️ {{ post.date }}</p>
      <button class="btn" @click="openModal(post)">Show Details</button>
    </div>

    <Modal :show="showModal" :post="selectedPost" @close="showModal = false" />
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fffdf6;
  border-radius: 12px;
}

.subtitle {
  margin-bottom: 30px;
  color: #8b4513;
  font-style: italic;
}

.empty {
  text-align: center;
  color: #777;
  font-size: 1.1rem;
  margin: 40px 0;
}

.post-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  background: #fff8f0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.post-card:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.meta {
  font-size: 0.9rem;
  color: #666;
  margin-top: 8px;
}

.btn {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background: #ff7f50;
  color: white;
  cursor: pointer;
  font-size: 15px;
  transition: background 0.3s ease;
}
.btn:hover {
  background: #e56c3b;
}
</style>
