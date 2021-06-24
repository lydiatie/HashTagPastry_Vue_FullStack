<template>
  <div>
    <div v-if="currentUser && !mobileView1" class="sidebar">
      <div class="w3-container">
        <img
          src="https://i.postimg.cc/m2L69znq/searchpng-com-deafult-profile-icon-transparent-png-free-download.png"
          class="profile-img"
        />
        <h3>{{ currentUser.username }}</h3>
        <p>{{ currentUser.email }}</p>
      </div>
      <div class="menu">
        <router-link to="/profile" class="nav-link"
          ><i><font-awesome-icon icon="user"/></i>My Profile</router-link
        >
        <router-link to="/addtoken" class="nav-link" v-if="showMemberBoard"
          ><i><font-awesome-icon icon="chart-pie"/></i>Donate pies</router-link
        >
        <router-link
          to="/gettokens"
          class="nav-link"
          v-if="showBeneficiaryBoard"
          ><i><font-awesome-icon icon="gift"/></i>Get pies</router-link
        >
        <router-link to="/blog" class="nav-link"
          ><i><font-awesome-icon icon="pen"/></i>Blog</router-link
        >
        <router-link to="/security" class="nav-link"
          ><i><font-awesome-icon icon="lock"/></i>Security</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data: () => {
    return {
      mobileView1: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView1 = window.innerWidth <= 767;
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showMemberBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MEMBER");
      }

      return false;
    },
    showBeneficiaryBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_BENEFICIARY");
      }

      return false;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style>
.sidebar {
  width: 250px;
  height: 90vh;
  background-color: #474747;
  overflow: auto;
  position: fixed;
  z-index: 1;
  margin-left: -20px;
  margin-top: -40px;
}

.sidebar a {
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
}

.sidebar .router-link-active {
  background-color: #5cb85c;
  color: white;
}

.sidebar a:not(.router-link-active):hover {
  background-color: #5b5b5b;
  color: white;
}

.w3-container {
  text-align: center;
  color: white;
}

.profile-img {
  margin: 20px;
}

.profile .for_profile {
  background-color: #26ea71;
}

.menu .nav-link i {
  margin-right: 20px;
  font-size: 20px;
  margin-top: -10px;
}
</style>
