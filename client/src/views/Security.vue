<template>
  <div class="row">
    <div class="col-md-3"><SideBar /></div>
    <div class="col-md-9">
      <div class="jumbotron">
        <article>
          <h1>Site is temporarily unavailable.</h1>
          <p>
            Site Construction is currently in progress. Please check back soon.
          </p>
          <p>We apologize for any inconvenience.</p>
          <p id="signature">
            &mdash; <a href="mailto:[Email]">[HashTagPastry]</a>
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";

export default {
  name: "Security",
  components: {
    SideBar,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 50px;
  margin: 0;
}
article {
  display: block;
  text-align: left;
  max-width: 650px;
  margin: 0 auto;
}
a {
  color: #dc8100;
  text-decoration: none;
}
a:hover {
  color: #333;
  text-decoration: none;
}
@media only screen and (max-width: 480px) {
  h1 {
    font-size: 40px;
  }
}
</style>
