<template>
  <div id="navigation-mobile">
    <ul>
      <li>
        <router-link to="/members" class="nav-link">
          Members
        </router-link>
      </li>
      <li>
        <router-link to="/beneficiaries" class="nav-link">
          Beneficiaries
        </router-link>
      </li>
      <li>
        <router-link to="/contactus" class="nav-link">
          Contact Us
        </router-link>
      </li>

      <div v-if="!currentUser">
        <li>
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
        <li>
          <router-link to="/register" class="nav-link">
            <button type="button" class="btn btn-success border-dark text-wrap">
              <font-awesome-icon icon="user-plus" /> Become a HashTagger
            </button>
          </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>
#navigation-mobile {
  padding: 20px 0 0 0;
}

#navigation-mobile ul {
  list-style: none;
  width: 200px;
  text-align: center;
  padding-left: 20px;
}

#navigation-mobile ul li .nav-link {
  color: #5cb85c;
  font-size: 1.85rem;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
}

#navigation-mobile ul li .nav-link:hover {
  color: black;
}

#navigation-mobile ul li .router-link-active {
  color: black;
}
</style>
