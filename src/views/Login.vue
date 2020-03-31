<template>
  <div class="columns">
    <div class="column is-5">
      <h3 class="title is-5">Please login before you can make use of the dashboard.</h3>

      <form @submit.prevent="login" method="post">
        <b-field label="Username">
          <b-input v-model="username"></b-input>
        </b-field>
        <b-field label="Password">
          <b-input v-model="password" type="password"></b-input>
        </b-field>
        <b-field>
          <b-button tag="input" type="is-primary" native-type="submit" value="Login" />
        </b-field>
        <b-field>
          <p class="has-text-danger">{{this.error}}</p>
        </b-field>
      </form>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      username: "test",
      password: "currycrew",
      error: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.username + "@currycrewtournamentdashboard.com",
          this.password
        )
        .then(data => {
          console.log(data);
          this.$router.push({ name: "Dashboard" });
        })
        .catch(error => {
          this.error = error.message;
          console.log(error);
        });
    }
  }
};
</script>
