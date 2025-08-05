import { ref, onMounted, computed, watch } from 'vue'

export function usePostViewModel() {
  const posts = ref([])
  const searchTerm = ref('')
  const selectedPost = ref(null)
  const showModal = ref(false)

  const LOCAL_KEY = 'vue-blog-posts'

  const fetchPosts = async () => {
    const saved = localStorage.getItem(LOCAL_KEY)

    if (saved) {
      posts.value = JSON.parse(saved)
    } else {
      const res = await fetch('/posts.json')
      posts.value = await res.json()
      localStorage.setItem(LOCAL_KEY, JSON.stringify(posts.value))
    }
  }

  const addPost = (newPost) => {
    newPost.id = Date.now()
    posts.value.unshift(newPost)
    localStorage.setItem(LOCAL_KEY, JSON.stringify(posts.value)) // Save after add
  }

  const filteredPosts = computed(() =>
    posts.value.filter(post =>
      post.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  )

  onMounted(fetchPosts)

  // Optional: auto-save anytime posts change
  watch(posts, () => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(posts.value))
  }, { deep: true })

  return {
    posts,
    searchTerm,
    filteredPosts,
    addPost,
    showModal,
    selectedPost
  }
}
