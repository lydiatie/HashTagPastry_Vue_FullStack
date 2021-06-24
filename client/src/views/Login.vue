<template>
  <div class="card d-flex align-items-center">
    <img
      id="profile-img"
      src="https://i.postimg.cc/Hx8JZSzD/Hash-Tag-Pastrylogo.png"
      class="profile-img-card"
    />
    <h3>Log into your account</h3>
    <br />
    <form name="form" @submit.prevent="handleLogin">
      <div class="input-group mb-3 " style="width:100%; padding-bottom:6px">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><font-awesome-icon icon="user"
          /></span>
        </div>
        <input
          v-model="user.username"
          v-validate="'required'"
          name="username"
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          autocomplete="off"
        />
      </div>
      <div
        v-if="errors.has('username')"
        class="alert alert-danger"
        style="margin-top:-21px"
        role="alert"
      >
        Username is required!
      </div>

      <div class="input-group mb-3 " style="width:100%; padding-bottom:6px">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><font-awesome-icon icon="unlock"
          /></span>
        </div>
        <input
          v-model="user.password"
          v-validate="'required'"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </div>
      <div
        v-if="errors.has('password')"
        class="alert alert-danger"
        style="margin-top:-21px"
        role="alert"
      >
        Password is required!
      </div>
      <a href="#" style="padding-bottom:6px">Forgot password?</a>

      <div class="button form-group">
        <button
          class="btn btn-success border-dark"
          style="padding-right: 15vw; padding-left: 15vw"
          :disabled="loading"
        >
          <span
            v-show="loading"
            class="spinner-border spinner-border-sm"
          ></span>
          <span>Login</span>
        </button>
      </div>
      <p>No Account? <router-link to="/register">SignUp Here!</router-link></p>
      <div v-if="message" class="alert alert-danger" role="alert">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
import User from "../models/user";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$router.push("/profile");
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },
  },
};
</script>

<style>
.card {
  padding: 20px 20px 60px;
  margin: 0 auto 25px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  width: 60%;
  text-align: center;
}

.profile-img-card {
  max-width: 40%;
  margin: 0 auto;
  opacity: 0.5;
}
</style>
