<template>
  <div>
    <h1>Sign Up</h1>
  </div>
</template>

<script>
import supabase from "../supabaseClient";
console.log(supabase);
export default {
  setup() {
    name: "SignUp";
    data();
    {
      return {
        user: "",
        email: "",
        password: "",
      };
    }
  },
  methods: {
    async signUp() {
      let result = await users.post(
        "https://lanvotduduqpfvtpbjjp.supabase.co",
        {
          user: this.user,
          email: this.email,
          password: this.password,
        }
      );
      console.warn(result);
      if (result.status == 201) {
        alert("sign-up done");
        localStorage.setItem("user-info", result.data);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
