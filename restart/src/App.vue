<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterView />
    <div class="head">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link" to="/about">Request a book</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link" to="/LocationsView">Locations</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link" to="/SearchView">Search</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link" to="/ContactView">Contact Us!</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link login user" to="/loginView">Log In</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link signup user" to="/SignUpView">Sign Up</RouterLink>
      </nav>
      <nav>
        <RouterLink class="link cart user" to="/cartView">Cart</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style>
.header {
  margin: 10px auto;
  color: #f4f1d6;
  text-align: center;
}

.link {
  margin: 20px auto;
  color: white;
  background-color: #452784;
}

.head {
  width: 100%;
  align-content: center;
  display: flex;
  justify-content: space-evenly;
  margin: 300px;
  margin-bottom: 200px;
  margin-top: -428px;
}

.login {
  margin-left: 100px;
}

.signup {
  margin-right: 100px;
}

.user {
  border: black 3px solid;
  padding: 5px;
  margin-top: 5%;
  border-radius: 1px;
  background-color: #452784;
  border-radius: 20px;
}

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
.name {
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
