<script setup>
import { usePostViewModel } from '@/viewmodels/post.viewmodel'
import Modal from '@/components/Modal.vue'
import { reactive } from 'vue'

const {
  posts,
  filteredPosts,
  searchTerm,
  addPost,
  showModal,
  selectedPost
} = usePostViewModel()

const newPost = reactive({
  title: '',
  category: '',
  content: '',
  author: '',
  image: '',
  date: new Date().toISOString().slice(0, 10)
})

function submitPost() {
  if (newPost.title && newPost.content) {
    addPost({ ...newPost })
    Object.assign(newPost, {
      title: '',
      category: '',
      content: '',
      author: '',
      image: '',
      date: new Date().toISOString().slice(0, 10)
    })
  }
}

function openModal(post) {
  selectedPost.value = post
  showModal.value = true
}
</script>

<template>
  <div class="container">
    <h1 class="title">📘 Blog Posts</h1>

    <input
      v-model="searchTerm"
      placeholder="🔍 Search by title or category"
      class="search-input"
    />

    <transition-group name="fade" tag="div">
      <div
        v-for="post in filteredPosts"
        :key="post.id"
        class="post-card"
      >
        <img v-if="post.image" :src="post.image" class="post-img" />
        <span class="badge">{{ post.category }}</span>
        <h2>{{ post.title }}</h2>
        <p class="date">📅 {{ new Date(post.date).toLocaleDateString() }}</p>
        <p>{{ post.content }}</p>
        <button class="btn" @click="openModal(post)">Show Details</button>
      </div>
    </transition-group>

    <hr class="divider" />

    <h2 class="subtitle">📝 Add a New Post</h2>
    <div class="form-group">
      <input v-model="newPost.title" placeholder="Title" />
      <input v-model="newPost.category" placeholder="Category" />
      <input v-model="newPost.author" placeholder="Author" />
      <input v-model="newPost.image" placeholder="Image URL (optional)" />
      <textarea v-model="newPost.content" placeholder="Content"></textarea>
      <button class="btn add-btn" @click="submitPost">➕ Add Post</button>
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
}

.title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 30px;
}

.search-input {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 25px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.post-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.post-card:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.post-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.badge {
  display: inline-block;
  background-color: #e1f5fe;
  color: #0277bd;
  padding: 4px 10px;
  font-size: 13px;
  border-radius: 20px;
  margin-bottom: 10px;
}

.date {
  font-size: 14px;
  color: #888;
  margin: 4px 0 10px;
}

.form-group input,
.form-group textarea {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 15px;
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.btn {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background: #3498db;
  color: white;
  cursor: pointer;
  font-size: 15px;
  transition: background 0.3s ease;
}
.btn:hover {
  background: #2c80b4;
}

.add-btn {
  background: #2ecc71;
}
.add-btn:hover {
  background: #28b861;
}

.divider {
  margin: 40px 0;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
