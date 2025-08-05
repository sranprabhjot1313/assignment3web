<template>
  <teleport to="body">
    <div v-if="show" class="modal" @click.self="$emit('close')">
      <div class="modal-content">
        <h2>{{ post?.title }}</h2>
        <p><strong>Author:</strong> {{ post?.author }}</p>
        <p><strong>Date:</strong> {{ post?.date }}</p>
        <p><strong>Content:</strong> {{ post?.content }}</p>
        <button class="btn" @click="$emit('close')">Close</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps(['show', 'post'])
defineEmits(['close']) 
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
}

.btn {
  margin-top: 20px;
  padding: 10px 16px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #2c80b4;
}

@keyframes fadeIn {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
