<template>
  <div class="card d-flex align-items-center">
    <img
      id="profile-img"
      src="https://i.postimg.cc/Hx8JZSzD/Hash-Tag-Pastrylogo.png"
      class="profile-img-card"
    />
    <form name="form" @submit.prevent="handleRegister">
      <div v-if="!successful">
        <h3>Register your account</h3>
        <br />
        <div class="form-group">
          <label for="roles" style="margin-right:15vw"
            >Please select an account type</label
          >
          <select
            name="roles"
            v-model="user.roles"
            v-validate="'required'"
            type="text"
            class="form-control"
            style="width:60%"
          >
            <option value="null" disabled>Account type</option>
            <option value="member">Charity Member</option>
            <option value="beneficiary">Beneficiary</option>
          </select>
          <div v-if="submitted && errors.has('roles')" class="alert-danger">
            {{ errors.first("roles") }}
          </div>
        </div>
        <div class="form-group">
          <input
            v-model="user.username"
            v-validate="'required|min:3|max:20'"
            type="text"
            class="form-control"
            placeholder="Username"
            name="username"
          />
          <div v-if="submitted && errors.has('username')" class="alert-danger">
            {{ errors.first("username") }}
          </div>
        </div>

        <div class="form-group">
          <input
            v-model="user.email"
            v-validate="'required|email|max:50'"
            type="email"
            class="form-control"
            placeholder="Email"
            name="email"
          />
          <div v-if="submitted && errors.has('email')" class="alert-danger">
            {{ errors.first("email") }}
          </div>
        </div>

        <div class="form-group">
          <input
            v-model="user.password"
            v-validate="'required|min:6|max:40'"
            type="password"
            class="form-control"
            placeholder="Password"
            name="password"
          />
          <div v-if="submitted && errors.has('password')" class="alert-danger">
            {{ errors.first("password") }}
          </div>
        </div>
        <div class="button form-group">
          <button
            class="btn btn-success border-dark btn-block"
            style="padding-right: 15vw; padding-left: 15vw"
          >
            Sign Up
          </button>
        </div>
        <p>
          Already have an account?
          <router-link to="/login">Login Here!</router-link>
        </p>
      </div>
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
import User from "../models/user";

export default {
  name: "Register",
  data() {
    return {
      user: new User("", "", "", "null"),
      submitted: false,
      successful: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then((isValid) => {
        if (isValid) {
          this.$store.dispatch("auth/register", this.user).then(
            (data) => {
              this.message = data.message;
              this.successful = true;
            },
            (error) => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    },
  },
};
</script>
