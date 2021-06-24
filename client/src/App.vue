<template>
  <div id="app">
    <NavMobile />
    <div class="grid-container" :class="{ open: showNav }">
      <header class="header">
        <nav
          v-if="mobileView"
          class="navbar navbar-expand navbar-light bg-light fixed-top py-0 "
        >
          <div class="navbar-nav mr-auto">
            <div class="bar-icon" @click="showNav = !showNav">
              <font-awesome-icon icon="bars" />
            </div>
            <li class="nav-item">
              <router-link to="/home">
                <img
                  class="logo"
                  src="https://i.postimg.cc/qvfLyxDH/output-onlinepngtools.png"
                  width="80"
                  alt=""
                />
              </router-link>
            </li>
          </div>
          <div v-if="currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link text-success">
                Hello,
                {{ currentUser.username }}
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href @click.prevent="logOut">
                <font-awesome-icon icon="sign-out-alt" />LogOut
              </a>
            </li>
          </div>
        </nav>

        <nav
          v-if="!mobileView"
          class="navbar navbar-expand navbar-light bg-light fixed-top py-0 "
        >
          <div class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/home">
                <img
                  class="logo"
                  src="https://i.postimg.cc/qvfLyxDH/output-onlinepngtools.png"
                  width="80"
                  alt=""
                />
              </router-link>
            </li>
          </div>

          <div class="navbar-nav mx-auto">
            <li class="nav-item-center">
              <router-link to="/members" class="nav-link">
                <button type="button" class="btn btn-light text-secondary">
                  Members
                </button>
              </router-link>
            </li>
            <li class="nav-item-center">
              <router-link to="/beneficiaries" class="nav-link">
                <button type="button" class="btn btn-light text-secondary">
                  Beneficiaries
                </button>
              </router-link>
            </li>
            <li class="nav-item-center">
              <router-link to="/contactus" class="nav-link">
                <button type="button" class="btn btn-light text-secondary">
                  Contact Us
                </button>
              </router-link>
            </li>
          </div>

          <div v-if="!currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">
                <button type="button" class="btn btn-light text-success">
                  <font-awesome-icon icon="sign-in-alt" /> Login
                </button>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/register" class="nav-link">
                <button
                  type="button"
                  class="btn btn-success border-dark text-wrap"
                >
                  <font-awesome-icon icon="user-plus" /> Become a HashTagger
                </button>
              </router-link>
            </li>
          </div>
          <div v-if="currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link text-success">
                Hello,
                {{ currentUser.username }}
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href @click.prevent="logOut">
                <font-awesome-icon icon="sign-out-alt" />LogOut
              </a>
            </li>
          </div>
        </nav>
      </header>

      <div class="main">
        <router-view />
      </div>
      <footer>
        <div
          v-if="currentUser && mobileView1"
          class="icon-bar d-flex bd-highlight"
        >
          <router-link to="/profile" class="nav-link p-2 flex-fill bd-highlight"
            ><i><font-awesome-icon icon="user"/></i
          ></router-link>
          <router-link
            v-if="showMemberBoard"
            to="/addtoken"
            class="nav-link p-2 flex-fill bd-highlight"
            ><i><font-awesome-icon icon="chart-pie"/></i
          ></router-link>
          <router-link
            v-if="showBeneficiaryBoard"
            to="/gettokens"
            class="nav-link p-2 flex-fill bd-highlight"
            ><i><font-awesome-icon icon="gift"/></i
          ></router-link>
          <router-link to="/blog" class="nav-link p-2 flex-fill bd-highlight"
            ><i><font-awesome-icon icon="pen"/></i
          ></router-link>
          <router-link
            to="/security"
            class="nav-link p-2 flex-fill bd-highlight"
            ><i><font-awesome-icon icon="lock"/></i
          ></router-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavMobile from "./views/NavMobile.vue";

export default {
  data: () => {
    return {
      mobileView: false,
      mobileView1: false,
      showNav: false,
    };
  },
  components: {
    NavMobile,
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
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
      this.mobileView1 = window.innerWidth <= 767;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: white;
}

#app {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 10px;
  color: #333;
  overflow: auto;
  font-family: "Coming Soon", cursive;
}
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "main main main main main main";
  position: absolute;
  top: 10px;
  padding-left: 10px;
  background-color: #fff;

  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}
.bar-icon {
  font-size: 40px;
  color: #5cb85c;
  margin-top: 8px;
  margin-left: 10px;
}

.header {
  grid-area: header;
  display: flex;
  width: 100%;
}

.main {
  grid-area: main;
  padding-right: 30px;
}

nav {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-left: -10px;
}

.navbar-nav {
  padding-left: 30px;
  padding-right: 30px;
}

.nav-item-center {
  padding-left: 50px;
}

.nav-item {
  padding-left: 20px;
}

.logo {
  height: 120px;
  width: 120px;
  padding: 0px 10px;
  margin: -35px auto -15px;
}

/* 
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 800px;
}  */

.main {
  margin-top: 98px;
  margin-bottom: 150px;
  width: 97vw;
  height: 100vh;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-left: -20px;
}

.icon-bar {
  background-color: #474747;
  overflow: auto;
  width: 100%;
}

.icon-bar a {
  text-align: center;
  float: center;
  padding-left: 20px;
  transition: all 0.3s ease;
  color: white;
  font-size: 30px;
}

.icon-bar a:not(.router-link-active):hover {
  background-color: #5b5b5b;
  color: white;
}

.icon-bar .router-link-active {
  background-color: #5cb85c;
  color: white;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.open {
  transform: translateX(250px);
}
</style>
