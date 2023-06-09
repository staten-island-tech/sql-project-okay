<script setup>
import { ref } from "vue";
import useAuthUser from "@/composables/UseAuthUser";
import { useRouter } from "vue-router";

const router = useRouter();
const { register } = useAuthUser();

const form = ref({
  name: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    await register({
      name: form.value.name,
      password: form.value.password,
    });

 router.push({
      name: "Me",
    });
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <form class="max-w-lg m-auto" @submit.prevent="handleSubmit">
    <h1 class="text-3xl mb-5">Register</h1>
    <label>Name <input v-model="form.name" type="text" /></label>
    <label>Password <input v-model="form.password" type="password" /></label>
    <button type="submit">Register</button>
  </form>
</template>


<style>
/* Add your custom CSS styles here */
div {
  width: 100%;
  max-width: 400px;
  margin: auto;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

form {
  margin-bottom: 1rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-top: 0.25rem;
}

button {
  width: 300px;
  height: 40px;
  border: 2px solid rgb(25, 25, 25);
  background-color: rgb(42, 72, 42);
  color: aliceblue;
  cursor: pointer;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

a {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #4caf50;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.logo {
  width: 100px;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.register input {
  width: 300px;
  height: 50px;
  padding-left: 30px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid rgb(25, 25, 25);
}

.register button {
  width: 300px;
  height: 40px;
  border: 2px solid rgb(25, 25, 25);
  background-color: rgb(42, 72, 42);
  color: aliceblue;
  cursor: pointer;
}

button:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>