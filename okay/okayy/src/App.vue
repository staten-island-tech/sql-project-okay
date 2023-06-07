<script>
import HelloWorld from "./components/HelloWorld.vue";
import SignUp from "./components/SignUp.vue";
import supabase from "./supabaseClient";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [user, setUser] = useState(text);
  const [id, setId] = useState(int8);
  const [password, setPassword] = useState(text);
  const [email, setEmail] = useState(text);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.from("user").select();

      if (error) {
        setFetchError("Could not find the user");
        setUser(null);
        console.log(error);
      }

      if (data) {
        setUser(data);
        setFetchError(null);
      }
    };

    fetchUser();
  }, []);
  console.log(Home);
};

export default {
  name: "App",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  components: {
    SignUp,
  },

  methods: signUp()(
    console.warn("signup", this.name, this.email, this.password)
  ),
};
</script>

<template>
  <SignUp />
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">Sign Up!</button>

    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
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

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
