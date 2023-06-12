<script>
import boxTemplate from '../components/boxTemplate.vue'
import { createClient } from '@supabase/supabase-js'

export default {
  async created() {
    // Create a single supabase client for interacting with your database
    const supabase = createClient(
      'https://lkfdrqoayqeodntjklhk.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZmRycW9heXFlb2RudGprbGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjU5NjEsImV4cCI6MTk5OTMwMTk2MX0.Nnia_31--mSH_S4xwIC08lvP956aV3qD-XDNVv_Mhxc'
    )

    const { data, error } = await supabase.from('books').select('*')
    if (error) {
      console.error(error)
    } else {
      this.books = data
    }
  },
  data() {
    return {
      books: null
    }
  },
  components: {
    boxTemplate
  }
}
</script>

<template>
  <div class="Book-Card">
    <boxTemplate
      v-for="item in books"
      :key="item.id"
      :books="item.books"
      :img="item.img"
      :Location="item.Location"
      :price="item.price"
      buttonLabel="Add To Cart"
    />
  </div>
</template>

<style>

.Book-Card {
  width: 350px;
  flex-wrap: wrap;
  background-color: rgb(125, 180, 125);
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 50px;
  border-radius: 10px;
  height: 770px;
  margin-left: 50px;
  margin-right: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
img {
  width: 200px;
  border-radius: 10%;
}
h2 {
  font-size: 3vh;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.desc {
  margin-top: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.books {
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
