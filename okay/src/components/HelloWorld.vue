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
/* Userfront.init('demo1234')
export default {
  data() {
    return {
      emailOrUsername: '',
      password: '',
      alert: ''
    }
  },
  methods: {
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
    loginWithSSO() {
      Userfront.login({ method: 'google' })
    }
  }
} */

/* filtering */
let { data: users, error } = await supabase
  .from('users')
  .select('*')

  // Filters
  .eq('column', 'Equal to')
  .gt('column', 'Greater than')
  .lt('column', 'Less than')
  .gte('column', 'Greater than or equal to')
  .lte('column', 'Less than or equal to')
  .like('column', '%CaseSensitive%')
  .ilike('column', '%CaseInsensitive%')
  .is('column', null)
  .in('column', ['Array', 'Values'])
  .neq('column', 'Not equal to')

  // Arrays
  .cs('array_column', ['array', 'contains'])
  .cd('array_column', ['contained', 'by'])

/* insert rows */
const { data, error } = await supabase
  .from('users')
  .insert([{ some_column: 'someValue', other_column: 'otherValue' }])

/* update rows */
const { data, error } = await supabase
  .from('users')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue')
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
