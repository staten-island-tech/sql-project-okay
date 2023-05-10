<template>
  <div id="app">
    <div id="alert" v-if="alert">{{ alert }}</div>
    <form @submit.prevent="loginWithPassword">
      <label>
        Email or username
        <input type="text" v-model="emailOrUsername" />
      </label>
      <label>
        Password
        <input type="password" v-model="password" />
      </label>
      <button type="submit">Log in</button>
    </form>

    <p>or</p>

    <button @click.prevent="loginWithSSO">Log in with Google</button>
  </div>
</template>

<script>
// Initialize Userfront
Userfront.init('demo1234')

export default {
  data() {
    return {
      emailOrUsername: '',
      password: '',
      alert: ''
    }
  },
  methods: {
    // Log in with the form's email/username and password
    loginWithPassword() {
      this.alert = ''
      Userfront.login({
        method: 'password',
        emailOrUsername: this.emailOrUsername,
        password: this.password
      }).catch((error) => {
        this.alert = error.message
      })
    },
    // Log in with SSO (google)
    loginWithSSO() {
      Userfront.login({ method: 'google' })
    }
  }
}
</script>

<style scoped>
button,
input {
  display: block;
  margin-bottom: 10px;
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>

<style scoped>
body {
  background-color: #074407;
  font-family: Calleo-Regular, sans-serif;
}

table {
  background-color: #015c6a;
  font-family: Calleo-Regular, sans-serif;
  color: aliceblue;
}

canvas {
  background-color: aliceblue;
}

button,
input {
  display: block;
  margin-bottom: 10px;
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>
